import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FitnessState {
  value: 'Active' | 'Heart' | 'Steps' | 'Weight'
}

const initialState: FitnessState = {
  value: 'Active'
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