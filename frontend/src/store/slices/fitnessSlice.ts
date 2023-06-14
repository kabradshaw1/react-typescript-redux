import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FitnessState {
  value: 'active' | 'heart' | 'steps' | 'weight'
}

const initialState: FitnessState = {
  value: 'active'
}
const fitnessSlice = createSlice({
  name: 'fitness',
  initialState,
  reducers: {
    setFitness(state, action: PayloadAction<FitnessState>) {
      state.value = action.payload.value;
    }
  }
});

export const { setFitness } = fitnessSlice.actions;

export default fitnessSlice;