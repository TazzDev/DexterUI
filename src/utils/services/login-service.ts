"use client";
import { storeTokenInLocalStorage } from "../storage";
import { supabase } from "../supabase/supabase";

const loginUser = async (email: string, password: string) => {
  const {
    data: { user, session },
    error,
  } = await supabase.auth.signInWithPassword({ email, password });
  if (error) return { error };
  if (session?.access_token) {
    storeTokenInLocalStorage(session.access_token);
  }
  return { user, session };
};
