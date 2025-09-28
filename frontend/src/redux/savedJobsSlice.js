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
  },
});

export const { setSavedJobs } = savedJobsSlice.actions;
export default savedJobsSlice.reducer;
