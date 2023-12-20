import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  machineData: undefined,
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
  },
});

export const { loadMachine, resetMachine, updateMachine, setScores } =
  machineSlice.actions;
export default machineSlice.reducer;
