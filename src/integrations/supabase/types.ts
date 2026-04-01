// @ts-nocheck
export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      analysis_queue: {
        Row: {
          completed_at: string | null
          created_at: string
          error_message: string | null
          id: string
          manuscript_id: string
          priority: number
          retry_count: number
          started_at: string | null
          status: string
          user_id: string
        }
        Insert: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          manuscript_id: string
          priority?: number
          retry_count?: number
          started_at?: string | null
          status?: string
          user_id: string
        }
        Update: {
          completed_at?: string | null
          created_at?: string
          error_message?: string | null
          id?: string
          manuscript_id?: string
          priority?: number
          retry_count?: number
          started_at?: string | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "analysis_queue_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: true
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_audience_mods: {
        Row: {
          audience_tag: string
          brevity: number | null
          character_id: string
          created_at: string | null
          deference: number | null
          defiance: number | null
          id: string
          manuscript_id: string | null
          source_type: string | null
          updated_at: string | null
          warmth: number | null
        }
        Insert: {
          audience_tag: string
          brevity?: number | null
          character_id: string
          created_at?: string | null
          deference?: number | null
          defiance?: number | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          updated_at?: string | null
          warmth?: number | null
        }
        Update: {
          audience_tag?: string
          brevity?: number | null
          character_id?: string
          created_at?: string | null
          deference?: number | null
          defiance?: number | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          updated_at?: string | null
          warmth?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "character_audience_mods_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_audience_mods_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_conflict_profile: {
        Row: {
          character_id: string
          conflict_strategy: string | null
          created_at: string | null
          manuscript_id: string | null
          morality_axis: string | null
          source_type: string | null
          truth_bias: number | null
          updated_at: string | null
        }
        Insert: {
          character_id: string
          conflict_strategy?: string | null
          created_at?: string | null
          manuscript_id?: string | null
          morality_axis?: string | null
          source_type?: string | null
          truth_bias?: number | null
          updated_at?: string | null
        }
        Update: {
          character_id?: string
          conflict_strategy?: string | null
          created_at?: string | null
          manuscript_id?: string | null
          morality_axis?: string | null
          source_type?: string | null
          truth_bias?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_conflict_profile_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: true
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_conflict_profile_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_emotion_map: {
        Row: {
          character_id: string
          created_at: string | null
          id: string
          manuscript_id: string | null
          source_type: string | null
          trigger: string
          voice_shift: string
        }
        Insert: {
          character_id: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          trigger: string
          voice_shift: string
        }
        Update: {
          character_id?: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          trigger?: string
          voice_shift?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_emotion_map_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_emotion_map_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_lexicon: {
        Row: {
          character_id: string
          created_at: string | null
          id: string
          manuscript_id: string | null
          meaning: string | null
          phrase: string
          source_type: string | null
        }
        Insert: {
          character_id: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          meaning?: string | null
          phrase: string
          source_type?: string | null
        }
        Update: {
          character_id?: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          meaning?: string | null
          phrase?: string
          source_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_lexicon_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_lexicon_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_mottos: {
        Row: {
          character_id: string
          created_at: string | null
          id: string
          manuscript_id: string | null
          motto: string
          source_type: string | null
        }
        Insert: {
          character_id: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          motto: string
          source_type?: string | null
        }
        Update: {
          character_id?: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          motto?: string
          source_type?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_mottos_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_mottos_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_style_rules: {
        Row: {
          cadence: string | null
          character_id: string
          created_at: string | null
          emphasis_method: string | null
          forbidden_patterns: string | null
          lexical_range: string | null
          manuscript_id: string | null
          punctuation_habits: string | null
          sentence_rhythm: string | null
          source_type: string | null
          updated_at: string | null
          world_term_rules: string | null
        }
        Insert: {
          cadence?: string | null
          character_id: string
          created_at?: string | null
          emphasis_method?: string | null
          forbidden_patterns?: string | null
          lexical_range?: string | null
          manuscript_id?: string | null
          punctuation_habits?: string | null
          sentence_rhythm?: string | null
          source_type?: string | null
          updated_at?: string | null
          world_term_rules?: string | null
        }
        Update: {
          cadence?: string | null
          character_id?: string
          created_at?: string | null
          emphasis_method?: string | null
          forbidden_patterns?: string | null
          lexical_range?: string | null
          manuscript_id?: string | null
          punctuation_habits?: string | null
          sentence_rhythm?: string | null
          source_type?: string | null
          updated_at?: string | null
          world_term_rules?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_style_rules_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: true
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_style_rules_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_timeline_entries: {
        Row: {
          analysis_text: string | null
          chapter_number: number
          chapter_title: string | null
          character_id: string
          created_at: string
          dialogue_patterns: string[] | null
          emotional_state: string | null
          external_dialogue: string[] | null
          flags: Json | null
          id: string
          internal_dialogue: string[] | null
          manuscript_id: string
          master_summary: string | null
          profile_text: string | null
          relationships: string | null
          sentiment: string | null
          source_type: string
          traits: string[] | null
          updated_at: string
          user_id: string
          views_by_others: string | null
          views_of_others: string | null
          voice_scales: Json | null
        }
        Insert: {
          analysis_text?: string | null
          chapter_number: number
          chapter_title?: string | null
          character_id: string
          created_at?: string
          dialogue_patterns?: string[] | null
          emotional_state?: string | null
          external_dialogue?: string[] | null
          flags?: Json | null
          id?: string
          internal_dialogue?: string[] | null
          manuscript_id: string
          master_summary?: string | null
          profile_text?: string | null
          relationships?: string | null
          sentiment?: string | null
          source_type?: string
          traits?: string[] | null
          updated_at?: string
          user_id: string
          views_by_others?: string | null
          views_of_others?: string | null
          voice_scales?: Json | null
        }
        Update: {
          analysis_text?: string | null
          chapter_number?: number
          chapter_title?: string | null
          character_id?: string
          created_at?: string
          dialogue_patterns?: string[] | null
          emotional_state?: string | null
          external_dialogue?: string[] | null
          flags?: Json | null
          id?: string
          internal_dialogue?: string[] | null
          manuscript_id?: string
          master_summary?: string | null
          profile_text?: string | null
          relationships?: string | null
          sentiment?: string | null
          source_type?: string
          traits?: string[] | null
          updated_at?: string
          user_id?: string
          views_by_others?: string | null
          views_of_others?: string | null
          voice_scales?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "character_timeline_entries_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_timeline_entries_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_traits: {
        Row: {
          character_id: string
          created_at: string | null
          id: string
          manuscript_id: string | null
          source_type: string | null
          trait: string
        }
        Insert: {
          character_id: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          trait: string
        }
        Update: {
          character_id?: string
          created_at?: string | null
          id?: string
          manuscript_id?: string | null
          source_type?: string | null
          trait?: string
        }
        Relationships: [
          {
            foreignKeyName: "character_traits_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_traits_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_voice_feedback: {
        Row: {
          accuracy_score: number | null
          character_id: string
          created_at: string | null
          divergence_areas: Json | null
          feedback_text: string
          id: string
          manuscript_id: string | null
          updated_at: string | null
        }
        Insert: {
          accuracy_score?: number | null
          character_id: string
          created_at?: string | null
          divergence_areas?: Json | null
          feedback_text: string
          id?: string
          manuscript_id?: string | null
          updated_at?: string | null
        }
        Update: {
          accuracy_score?: number | null
          character_id?: string
          created_at?: string | null
          divergence_areas?: Json | null
          feedback_text?: string
          id?: string
          manuscript_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_voice_feedback_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: false
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_voice_feedback_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      character_voice_scales: {
        Row: {
          aggression: number | null
          brashness: number | null
          character_id: string
          created_at: string | null
          empathy: number | null
          fid_level: number | null
          formality: number | null
          humor_dryness: number | null
          internal_external: number | null
          introspection: number | null
          manuscript_id: string | null
          masking: number | null
          sophistication: number | null
          source_type: string | null
          subtext_density: number | null
          updated_at: string | null
        }
        Insert: {
          aggression?: number | null
          brashness?: number | null
          character_id: string
          created_at?: string | null
          empathy?: number | null
          fid_level?: number | null
          formality?: number | null
          humor_dryness?: number | null
          internal_external?: number | null
          introspection?: number | null
          manuscript_id?: string | null
          masking?: number | null
          sophistication?: number | null
          source_type?: string | null
          subtext_density?: number | null
          updated_at?: string | null
        }
        Update: {
          aggression?: number | null
          brashness?: number | null
          character_id?: string
          created_at?: string | null
          empathy?: number | null
          fid_level?: number | null
          formality?: number | null
          humor_dryness?: number | null
          internal_external?: number | null
          introspection?: number | null
          manuscript_id?: string | null
          masking?: number | null
          sophistication?: number | null
          source_type?: string | null
          subtext_density?: number | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "character_voice_scales_character_id_fkey"
            columns: ["character_id"]
            isOneToOne: true
            referencedRelation: "characters"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "character_voice_scales_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
        ]
      }
      characters: {
        Row: {
          aggression_level: number | null
          ai_version_id: string | null
          author_edited: boolean | null
          blocked: boolean | null
          brashness_scale: number | null
          created_at: string | null
          description: string | null
          free_indirect_discourse_level: number | null
          id: string
          internal_external_filter: number | null
          manuscript_id: string | null
          mottos: string[] | null
          name: string
          personality_traits: string[] | null
          project_id: string | null
          role: string | null
          sophistication_scale: number | null
          source_type: string | null
          speech_patterns: Json | null
          timeline_data: Json | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          aggression_level?: number | null
          ai_version_id?: string | null
          author_edited?: boolean | null
          blocked?: boolean | null
          brashness_scale?: number | null
          created_at?: string | null
          description?: string | null
          free_indirect_discourse_level?: number | null
          id?: string
          internal_external_filter?: number | null
          manuscript_id?: string | null
          mottos?: string[] | null
          name: string
          personality_traits?: string[] | null
          project_id?: string | null
          role?: string | null
          sophistication_scale?: number | null
          source_type?: string | null
          speech_patterns?: Json | null
          timeline_data?: Json | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          aggression_level?: number | null
          ai_version_id?: string | null
          author_edited?: boolean | null
          blocked?: boolean | null
          brashness_scale?: number | null
          created_at?: string | null
          description?: string | null
          free_indirect_discourse_level?: number | null
          id?: string
          internal_external_filter?: number | null
          manuscript_id?: string | null
          mottos?: string[] | null
          name?: string
          personality_traits?: string[] | null
          project_id?: string | null
          role?: string | null
          sophistication_scale?: number | null
          source_type?: string | null
          speech_patterns?: Json | null
          timeline_data?: Json | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "characters_manuscript_id_fkey"
            columns: ["manuscript_id"]
            isOneToOne: false
            referencedRelation: "manuscripts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "characters_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "characters_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      manuscripts: {
        Row: {
          analysis_progress: number | null
          analysis_results: Json | null
          chapter_number: number | null
          chapter_title: string | null
          content: string
          created_at: string | null
          file_path: string | null
          id: string
          processing_progress: number | null
          project_id: string | null
          queue_position: number | null
          reader_reactions: Json | null
          title: string
          updated_at: string | null
          user_id: string
        }
        Insert: {
          analysis_progress?: number | null
          analysis_results?: Json | null
          chapter_number?: number | null
          chapter_title?: string | null
          content: string
          created_at?: string | null
          file_path?: string | null
          id?: string
          processing_progress?: number | null
          project_id?: string | null
          queue_position?: number | null
          reader_reactions?: Json | null
          title: string
          updated_at?: string | null
          user_id: string
        }
        Update: {
          analysis_progress?: number | null
          analysis_results?: Json | null
          chapter_number?: number | null
          chapter_title?: string | null
          content?: string
          created_at?: string | null
          file_path?: string | null
          id?: string
          processing_progress?: number | null
          project_id?: string | null
          queue_position?: number | null
          reader_reactions?: Json | null
          title?: string
          updated_at?: string | null
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "manuscripts_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "manuscripts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          created_at: string | null
          email: string | null
          full_name: string | null
          id: string
        }
        Insert: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id: string
        }
        Update: {
          created_at?: string | null
          email?: string | null
          full_name?: string | null
          id?: string
        }
        Relationships: []
      }
      projects: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string
          updated_at: string
          user_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      world_glossary: {
        Row: {
          ai_interpretation: string | null
          appears_in: number[] | null
          category: string | null
          created_at: string
          curse_harshness: number | null
          definition: string
          id: string
          locked: boolean | null
          manuscript_id: string | null
          project_id: string | null
          source_type: string
          updated_at: string
          usage_notes: string | null
          user_id: string
          word: string
          word_type: string
        }
        Insert: {
          ai_interpretation?: string | null
          appears_in?: number[] | null
          category?: string | null
          created_at?: string
          curse_harshness?: number | null
          definition: string
          id?: string
          locked?: boolean | null
          manuscript_id?: string | null
          project_id?: string | null
          source_type?: string
          updated_at?: string
          usage_notes?: string | null
          user_id: string
          word: string
          word_type: string
        }
        Update: {
          ai_interpretation?: string | null
          appears_in?: number[] | null
          category?: string | null
          created_at?: string
          curse_harshness?: number | null
          definition?: string
          id?: string
          locked?: boolean | null
          manuscript_id?: string | null
          project_id?: string | null
          source_type?: string
          updated_at?: string
          usage_notes?: string | null
          user_id?: string
          word?: string
          word_type?: string
        }
        Relationships: [
          {
            foreignKeyName: "world_glossary_project_id_fkey"
            columns: ["project_id"]
            isOneToOne: false
            referencedRelation: "projects"
            referencedColumns: ["id"]
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
