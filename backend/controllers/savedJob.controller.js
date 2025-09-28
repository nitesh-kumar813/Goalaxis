import SavedJob from "../models/savedJob.model.js";

// Save Job
export const saveJob = async (req, res) => {
  try {
    const savedJob = await SavedJob.create({
      user: req.id,
      job: req.params.jobId,
    });

    res.status(201).json({
      message: "Job saved successfully",
      savedJob,
    });
  } catch (error) {
    res.status(500).json({ message: "Error saving job", error });
  }
};

//  Unsave Job
export const unSaveJob = async (req, res) => {
  try {
    const removed = await SavedJob.findOneAndDelete({
      user: req.id,
      job: req.params.jobId,
    });

    if (!removed) {
      return res.status(404).json({ message: "Saved job not found" });
    }

    res.status(200).json({ message: "Job unsaved successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error unsaving job", error });
  }
};

//  Get All Saved Jobs
export const getSavedJobs = async (req, res) => {
  try {
    const savedJobs = await SavedJob.find({ user: req.id }).populate({
      path: "job",
      populate: {
        path: "company",
        select: "name logo",
      },
    });

    res.status(200).json({ savedJobs });
  } catch (error) {
    res.status(500).json({ message: "Error fetching saved jobs", error });
  }
};
