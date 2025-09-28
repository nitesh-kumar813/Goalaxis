import axios from "axios";
import { SAVED_JOB_API_END_POINT } from "../utils/constant";
import { setSavedJobs } from "./savedJobsSlice";

//  Get all saved jobs
export const getSavedJobs = () => async (dispatch) => {
  try {
    const res = await axios.get(`${SAVED_JOB_API_END_POINT}/all`, {
      withCredentials: true,
    });
    dispatch(setSavedJobs(res.data.savedJobs || []));
    return res.data.savedJobs;
  } catch (error) {
    console.error(
      "[getSavedJobs] Error:",
      error.response?.data || error.message
    );
  }
};

//  Save a job
export const saveJob = (jobId) => async (dispatch, getState) => {
  try {
    await axios.post(
      `${SAVED_JOB_API_END_POINT}/save/${jobId}`,
      {},
      { withCredentials: true }
    );
    dispatch(getSavedJobs());
  } catch (error) {
    console.error("[saveJob] Error:", error.response?.data || error.message);
  }
};

//  Unsave a job
export const unSaveJob = (jobId) => async (dispatch, getState) => {
  try {
    await axios.delete(`${SAVED_JOB_API_END_POINT}/unsave/${jobId}`, {
      withCredentials: true,
    });
    dispatch(getSavedJobs());
  } catch (error) {
    console.error("[unSaveJob] Error:", error.response?.data || error.message);
  }
};
