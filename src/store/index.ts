import { create } from 'zustand';
import { UserSlice, createUserSlice } from './slices/userSlice';

type StoreState = UserSlice;

export const useStore = create<StoreState>()((...args) => ({
  ...createUserSlice(...args),
})); 