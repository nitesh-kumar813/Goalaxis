import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
// import FilterCard from "./FilterCard";
import ResponsiveFilter from "./ResponsiveFilter";

import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

const Jobs = () => {
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
        return (
          job.title.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.description.toLowerCase().includes(searchedQuery.toLowerCase()) ||
          job.location.toLowerCase().includes(searchedQuery.toLowerCase())
        );
      });
      setFilterJobs(filteredJobs);
    } else {
      setFilterJobs(allJobs);
    }
  }, [allJobs, searchedQuery]);

  return (
    <div className="bg-[conic-gradient(at_top_left,_#fbc2eb,_#a18cd1,_#fcb69f,_#fbc2eb)] min-h-screen ">
   
      <Navbar />
      <div className="max-w-[90rem] mx-auto mt-5 ">
        <div className="flex flex-col lg:flex-row gap-3 px-5 ">
          <div className="w-full lg:w-1/6">
            <ResponsiveFilter />
          </div>

          {filterJobs.length <= 0 ? (
            <span className="text-center w-full mt-10 text-lg font-semibold">
              Job not found
            </span>
          ) : (
            <div className="flex-1 h-[80vh] overflow-y-auto pb-5 bg-red500 pr-0 sm:pr-4 ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filterJobs.map((job) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Jobs;
