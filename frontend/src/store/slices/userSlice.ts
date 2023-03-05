import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from '../../types'

interface UserState {
  value: User[]
}

const initialState: UserState = {
  value: []
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.value.push(action.payload);
    },
  },
})