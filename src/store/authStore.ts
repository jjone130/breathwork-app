// src/store/authStore.ts
/**
 * Auth store: manages Supabase session state.
 */
import { create } from 'zustand';
import { supabase } from '../services/supabase';
import type { Session } from '@supabase/supabase-js';

type AuthState = {
  session: Session | null;
  loading: boolean;
  init: () => Promise<void>;
  signInWithEmail: (email: string) => Promise<{ error?: string }>;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  session: null,
  loading: true,

  init: async () => {
    const { data } = await supabase.auth.getSession();
    set({ session: data.session ?? null, loading: false });

    supabase.auth.onAuthStateChange((_event, session) => {
      set({ session: session ?? null });
    });
  },

  signInWithEmail: async (email) => {
    const { error } = await supabase.auth.signInWithOtp({ email });
    if (error) return { error: error.message };
    return {};
  },

  signOut: async () => {
    await supabase.auth.signOut();
  },
}));


