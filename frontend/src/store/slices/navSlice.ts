import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface NavState {
  value: string
}

const initialState: NavState = {
  value: ""
}

export const navSlice = createSlice({
  name: "nav",
  initialState,
  reducers: {
    updateNav: (state, action: PayloadAction<NavState>) => {
      state.value.push(action.payload);
    }
  }
})