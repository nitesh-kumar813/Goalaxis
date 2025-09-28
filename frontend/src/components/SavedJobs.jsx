import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSavedJobs } from "../redux/savedJobsActions";
import Navbar from "./shared/Navbar";
import Job from "./Job";
import { motion } from "framer-motion";

const SavedJobs = () => {
  const dispatch = useDispatch();
  const { savedJobs } = useSelector((state) => state.savedJobs);

  const colors = [
    "#F6E1CF",
    "#C8F8ECFF",
    "#E2DBFA",
    "#BFFABD",
    "#FABEDD",
    "#BFC3CA",
  ];

  useEffect(() => {
    dispatch(getSavedJobs());
  }, [dispatch]);

  return (
    <div className="bg-[conic-gradient(at_top_left,_#fbc2eb,_#a18cd1,_#fcb69f,_#fbc2eb)] min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="font-bold text-lg sm:text-xl mb-6">
          Saved Jobs ({savedJobs.length})
        </h1>

        {savedJobs.length === 0 ? (
          <p>No saved jobs yet</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedJobs.map((jobObj, index) => (
              <motion.div
                key={jobObj._id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Job job={jobObj.job} color={colors[index % colors.length]} />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SavedJobs;
