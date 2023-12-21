import { createSlice } from "@reduxjs/toolkit";

interface HealthState {
  data: any;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
  machineData: undefined;
  scoreHistory: { date: string; score: number }[]; // Add this line
}

const initialState: HealthState = {
  machineData: undefined,
  data: {},
  status: "idle",
  error: null,
  scoreHistory: [], // And this line
};

const machineSlice = createSlice({
  name: "machineData",
  initialState,
  reducers: {
    loadMachine: (state, action) => {
      state.machineData = action.payload;
    },
    resetMachine: () => initialState,
    updateMachine: (state, action) => {
      state.machineData = action.payload;
      console.log(action.payload, "payload");
    },
    setScores: (state, action) => {
      return { ...state, scores: action.payload };
    },
    addScoreToHistory: (state, action) => {
      // Add this reducer
      state.scoreHistory.push(action.payload);
    },
  },
});

export const {
  loadMachine,
  resetMachine,
  updateMachine,
  setScores,
  addScoreToHistory,
} = machineSlice.actions;
export default machineSlice.reducer;
