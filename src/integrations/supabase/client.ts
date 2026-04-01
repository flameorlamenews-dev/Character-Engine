// @ts-nocheck
// Mock Supabase client that stores data in localStorage

function generateId(): string {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

function getTable(tableName: string): any[] {
  try {
    const raw = localStorage.getItem(`supabase_${tableName}`);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function setTable(tableName: string, data: any[]): void {
  localStorage.setItem(`supabase_${tableName}`, JSON.stringify(data));
}

type FilterOp = { column: string; value: any; op: 'eq' | 'in' | 'ilike' };

class QueryBuilder {
  private tableName: string;
  private filters: FilterOp[] = [];
  private orderCol: string | null = null;
  private orderAsc: boolean = true;
  private limitCount: number | null = null;
  private operation: 'select' | 'insert' | 'update' | 'delete' | 'upsert';
  private payload: any = null;
  private _selectColumns: string = '*';
  private singleMode: boolean = false;
  private maybeSingleMode: boolean = false;

  constructor(tableName: string, operation: 'select' | 'insert' | 'update' | 'delete' | 'upsert', payload?: any) {
    this.tableName = tableName;
    this.operation = operation;
    this.payload = payload;
  }

  select(columns: string = '*'): QueryBuilder {
    if (this.operation === 'insert' || this.operation === 'update' || this.operation === 'upsert') {
      // chained .select() after insert/update means "return the result"
      this._selectColumns = columns;
      return this;
    }
    this._selectColumns = columns;
    return this;
  }

  eq(column: string, value: any): QueryBuilder {
    this.filters.push({ column, value, op: 'eq' });
    return this;
  }

  in(column: string, values: any[]): QueryBuilder {
    this.filters.push({ column, value: values, op: 'in' });
    return this;
  }

  ilike(column: string, value: string): QueryBuilder {
    this.filters.push({ column, value, op: 'ilike' });
    return this;
  }

  order(column: string, options?: { ascending?: boolean }): QueryBuilder {
    this.orderCol = column;
    this.orderAsc = options?.ascending !== false;
    return this;
  }

  limit(count: number): QueryBuilder {
    this.limitCount = count;
    return this;
  }

  single(): Promise<{ data: any; error: any }> {
    this.singleMode = true;
    return this.execute();
  }

  maybeSingle(): Promise<{ data: any; error: any }> {
    this.maybeSingleMode = true;
    return this.execute();
  }

  then(resolve: (value: { data: any; error: any }) => void, reject?: (reason: any) => void): Promise<void> {
    return this.execute().then(resolve, reject);
  }

  private applyFilters(rows: any[]): any[] {
    let result = rows;
    for (const f of this.filters) {
      if (f.op === 'eq') {
        result = result.filter(r => r[f.column] === f.value);
      } else if (f.op === 'in') {
        result = result.filter(r => (f.value as any[]).includes(r[f.column]));
      } else if (f.op === 'ilike') {
        const pattern = f.value.replace(/%/g, '').toLowerCase();
        result = result.filter(r => String(r[f.column] || '').toLowerCase().includes(pattern));
      }
    }
    return result;
  }

  private async execute(): Promise<{ data: any; error: any }> {
    try {
      const now = new Date().toISOString();

      if (this.operation === 'select') {
        let rows = getTable(this.tableName);
        rows = this.applyFilters(rows);

        if (this.orderCol) {
          const col = this.orderCol;
          const asc = this.orderAsc;
          rows.sort((a: any, b: any) => {
            const av = a[col], bv = b[col];
            if (av == null && bv == null) return 0;
            if (av == null) return asc ? -1 : 1;
            if (bv == null) return asc ? 1 : -1;
            if (av < bv) return asc ? -1 : 1;
            if (av > bv) return asc ? 1 : -1;
            return 0;
          });
        }

        if (this.limitCount !== null) {
          rows = rows.slice(0, this.limitCount);
        }

        if (this.singleMode) {
          return { data: rows[0] || null, error: rows.length === 0 ? { message: 'No rows found' } : null };
        }
        if (this.maybeSingleMode) {
          return { data: rows[0] || null, error: null };
        }

        return { data: rows, error: null };
      }

      if (this.operation === 'insert') {
        const rows = getTable(this.tableName);
        const items = Array.isArray(this.payload) ? this.payload : [this.payload];
        const inserted: any[] = [];
        for (const item of items) {
          const record = {
            id: item.id || generateId(),
            created_at: now,
            updated_at: now,
            ...item,
          };
          rows.push(record);
          inserted.push(record);
        }
        setTable(this.tableName, rows);

        if (this.singleMode || this.maybeSingleMode) {
          return { data: inserted[0] || null, error: null };
        }
        return { data: inserted.length === 1 ? inserted[0] : inserted, error: null };
      }

      if (this.operation === 'update') {
        const rows = getTable(this.tableName);
        const matched = this.applyFilters(rows);
        const updated: any[] = [];
        for (const row of matched) {
          Object.assign(row, this.payload, { updated_at: now });
          updated.push(row);
        }
        setTable(this.tableName, rows);

        if (this.singleMode || this.maybeSingleMode) {
          return { data: updated[0] || null, error: null };
        }
        return { data: updated, error: null };
      }

      if (this.operation === 'upsert') {
        const rows = getTable(this.tableName);
        const items = Array.isArray(this.payload) ? this.payload : [this.payload];
        const result: any[] = [];
        for (const item of items) {
          // Try to find existing by filters or by id
          const idx = rows.findIndex((r: any) => {
            if (item.id && r.id === item.id) return true;
            // For character_voice_scales, match on character_id + source_type
            if (item.character_id && r.character_id === item.character_id &&
                item.source_type && r.source_type === item.source_type) return true;
            return false;
          });
          if (idx >= 0) {
            Object.assign(rows[idx], item, { updated_at: now });
            result.push(rows[idx]);
          } else {
            const record = { id: generateId(), created_at: now, updated_at: now, ...item };
            rows.push(record);
            result.push(record);
          }
        }
        setTable(this.tableName, rows);
        return { data: result.length === 1 ? result[0] : result, error: null };
      }

      if (this.operation === 'delete') {
        let rows = getTable(this.tableName);
        rows = rows.filter((r: any) => !this.applyFilters([r]).length);
        setTable(this.tableName, rows);
        return { data: null, error: null };
      }

      return { data: null, error: { message: 'Unknown operation' } };
    } catch (e: any) {
      return { data: null, error: { message: e.message || 'Unknown error' } };
    }
  }
}

const storageHandler = {
  from(bucket: string) {
    return {
      upload(path: string, _file: any) {
        // No-op for local storage
        return Promise.resolve({ data: { path }, error: null });
      },
      getPublicUrl(path: string) {
        return { data: { publicUrl: `local://${bucket}/${path}` } };
      },
    };
  },
};

export const supabase = {
  from(tableName: string) {
    return {
      select(columns: string = '*') {
        const qb = new QueryBuilder(tableName, 'select');
        qb.select(columns);
        return qb;
      },
      insert(payload: any) {
        return new QueryBuilder(tableName, 'insert', payload);
      },
      update(payload: any) {
        return new QueryBuilder(tableName, 'update', payload);
      },
      delete() {
        return new QueryBuilder(tableName, 'delete');
      },
      upsert(payload: any) {
        return new QueryBuilder(tableName, 'upsert', payload);
      },
    };
  },
  auth: {
    getSession() {
      return Promise.resolve({
        data: { session: { user: { id: 'local-user', email: 'author@local' } } },
        error: null,
      });
    },
    signOut() {
      return Promise.resolve({ error: null });
    },
    onAuthStateChange(_callback: any) {
      return { data: { subscription: { unsubscribe() {} } } };
    },
  },
  functions: {
    invoke(_functionName: string, _options?: { body?: any }) {
      // Placeholder - return success
      return Promise.resolve({ data: { success: true, text: 'Generated text placeholder.' }, error: null });
    },
  },
  storage: storageHandler,
  channel(_name: string) {
    return {
      on(_event: string, _opts: any, _callback?: any) {
        return this;
      },
      subscribe() {
        return this;
      },
      unsubscribe() {
        return this;
      },
    };
  },
  removeChannel(_channel: any) {
    // no-op
  },
};
