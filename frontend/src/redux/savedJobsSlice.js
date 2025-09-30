import { createSlice } from "@reduxjs/toolkit";

const savedJobsSlice = createSlice({
  name: "savedJobs",
  initialState: {
    savedJobs: [],
  },
  reducers: {
    setSavedJobs: (state, action) => {
      state.savedJobs = action.payload;
    },
    clearSavedJobs: (state) => {
      state.savedJobs = [];
    },
  },
});

export const { setSavedJobs,clearSavedJobs } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;
