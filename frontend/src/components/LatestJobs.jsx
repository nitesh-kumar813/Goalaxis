import React from "react";
import LatestJobCards from "./LatestJobCards";
import { useSelector } from "react-redux";

const LatestJobs = () => {
  const { allJobs } = useSelector((store) => store.job);

  const colors = ["#F6E1CF", "#C8F8ECFF", "#E2DBFA", "#BFFABD", "#FABEDD", "#BFC3CA"];
  

  return (
    <div className="max-w-7xl mx-auto my-20 ">
      <h1 className="text-4xl font-bold px-4">
        <span className="text-[#6A38C2]">Latest & Top </span> Job Openings
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-5 px-4">
        {Array.isArray(allJobs) && allJobs.length > 0 ? (
          allJobs
            .slice(0, 6)
            .map((job, index) => <LatestJobCards key={job._id} job={job} color={colors[index % colors.length]}/>)
        ) : (
          <span>No Job Available</span>
        )}
      </div>
    </div>
  );
};

export default LatestJobs
