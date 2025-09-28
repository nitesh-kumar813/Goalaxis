import express from "express";
import { saveJob, unSaveJob, getSavedJobs } from "../controllers/savedJob.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";

const router = express.Router();


router.post("/save/:jobId", isAuthenticated, saveJob);
router.delete("/unsave/:jobId", isAuthenticated, unSaveJob);
router.get("/all", isAuthenticated, getSavedJobs);

export default router;
