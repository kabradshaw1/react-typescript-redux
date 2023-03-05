import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import UserState from '../../types'


const initialState: UserState = {
  value:[]
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<>)
  }
})