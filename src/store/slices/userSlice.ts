import { StateCreator } from "zustand";
import supabase from "@/supabase";
import { AuthError, User } from "@supabase/supabase-js";

export interface UserSlice {
  user: User | null;
  loginError: boolean;
  login: (username: string, password: string) => Promise<{ user: User | null; error: AuthError | null }>;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  loginError: false,
  login: async (
    username: string,
    password: string
  ): Promise<{ user: User | null; error: AuthError | null }> => {
    const {
      data: { user, session },
      error,
    } = await supabase.auth.signInWithPassword({ email: username, password });

    const { access_token, refresh_token } = session || {};
    localStorage.setItem("accessToken", `${access_token}`);
    localStorage.setItem("refreshToken", `${refresh_token}`);

    if (user) {
      set({ user });
    }
    if (error) {
      set({ loginError: true });
    }

    return { user, error };
  },
  logout: () => {
    set({ user: null });
    localStorage.clear();
  },
});
