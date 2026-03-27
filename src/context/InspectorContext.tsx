import { createContext, useContext, useState, type ReactNode } from 'react';
import type { Surge } from '../types/emotions';

interface InspectorContextValue {
  selectedSurge: Surge | null;
  selectSurge: (surge: Surge | null) => void;
}

const InspectorContext = createContext<InspectorContextValue | null>(null);

export function InspectorProvider({ children }: { children: ReactNode }) {
  const [selectedSurge, setSelectedSurge] = useState<Surge | null>(null);

  return (
    <InspectorContext.Provider value={{ selectedSurge, selectSurge: setSelectedSurge }}>
      {children}
    </InspectorContext.Provider>
  );
}

export function useInspector() {
  const ctx = useContext(InspectorContext);
  if (!ctx) throw new Error('useInspector must be used within InspectorProvider');
  return ctx;
}
