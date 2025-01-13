import { StateCreator } from 'zustand';

export interface User {
    userId: string;
    userName: string;
}

export interface UserSlice {
  user: User | null;
  login: (username: string, password: string) => void;
  logout: () => void;
}

export const createUserSlice: StateCreator<UserSlice> = (set) => ({
  user: null,
  login: (username: string, password: string) => {
    // Call API with username and password here
    console.log(username, password)
    const currentUser = {userId: '', userName: ''};
    set({ user: currentUser})
  },
  logout: () => set({ user: null }),
}); 