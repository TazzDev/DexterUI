import { create } from 'zustand'
import { createUserSlice, UserSlice } from './user-slice'

export const useBoundStore = create<UserSlice>((...a) => ({
  ...createUserSlice(...a),
}))