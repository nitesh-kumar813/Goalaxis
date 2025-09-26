

import React, { useEffect, useState } from "react";
import Navbar from "./shared/Navbar";
import ResponsiveFilter from "./ResponsiveFilter";
import Job from "./Job";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import useGetAllJobs from "@/hooks/useGetAllJobs"; 


const salaryMap = {
  "0-2LPA": [0, 200000],
  "2LPA-5LPA": [200000, 500000],
  "5LPA-8LPA": [500000, 800000],
  "8LPA-15LPA": [800000, 1500000]
};

const colors = ["#F6E1CF", "#C8F8ECFF", "#E2DBFA", "#BFFABD", "#FABEDD", "#BFC3CA",];

const Jobs = () => {
  useGetAllJobs("jobs"); 
  
  const { allJobs, searchedQuery } = useSelector((store) => store.job);
  const [filterJobs, setFilterJobs] = useState(allJobs);

  useEffect(() => {
    if (searchedQuery) {
      const filteredJobs = allJobs.filter((job) => {
      
        if (salaryMap[searchedQuery]) {
          const [min, max] = salaryMap[searchedQuery];
          return job.salary >= min && job.salary <= max;
        }

       
        const search = searchedQuery.toLowerCase();
        return (
          job.title.toLowerCase().includes(search) ||
          (job.description && job.description.toLowerCase().includes(search)) ||
          (job.location && job.location.toLowerCase().includes(search))
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
      <div className="max-w-[90rem] mx-auto mt-5 " >
        <div className="flex flex-col lg:flex-row gap-3 px-5 ">
          <div className="w-full lg:w-2/10 shrink-0">
            <ResponsiveFilter />
          </div>

          {filterJobs.length <= 0 ? (
            <span className="text-center w-full mt-10 text-lg font-semibold">
              Job not found
            </span>
          ) : (
              <div className="flex-1 h-[80vh] overflow-y-auto pb-5 pr-0 sm:pr-4 "
                style={{
              scrollbarWidth: "thin",
              scrollbarColor: "#9ca3af #f3f4f6", 
            }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                {filterJobs.map((job,index) => (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.3 }}
                    key={job?._id}
                  >
                    <Job job={job} color={colors[index % colors.length]}/>  
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
