import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface formState {
  value: string[],
}

const initialState: formState = {
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

export const { add } = formSlice.actions

export default formSlice.reducer;