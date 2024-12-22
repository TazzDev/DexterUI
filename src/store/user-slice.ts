import { StateCreator } from "zustand";

type Username = {
  firstName: string | null;
  lastName: string | null;
};

export interface UserSlice {
  userId: string | null;
  username: string | null;
  name: Username | null;
  accessToken: string | null;
  setUser?: any;
}

export const createUserSlice: StateCreator<UserSlice, [], [], UserSlice> = (
  set: any
) => ({
  userId: null,
  username: null,
  name: {
    firstName: null,
    lastName: null,
  },
  accessToken: null,
  setUser: (user: UserSlice) => set(() => user),
});
