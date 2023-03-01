import { createSlice, PayloadAction } from '@reduxjs/toolkit';

inerface

const initialState = {
  value:[]
}
export const formSlice = createSlice({
  name: 'form',
  initialState, 
  reducers: {
    add: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload)
    }
  }
})

export default formSlice.reducer;