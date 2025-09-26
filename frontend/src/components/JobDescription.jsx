import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import { MapPin, Briefcase, IndianRupee, Users } from "lucide-react";
import { formatSalary } from "@/utils/formatSalary";

const JobDescription = () => {
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const isIntiallyApplied =
    singleJob?.applications?.some(
      (application) => application.applicant === user?._id
    ) || false;
  const [isApplied, setIsApplied] = useState(isIntiallyApplied);

  const params = useParams();
  const jobId = params.id;
  const dispatch = useDispatch();

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(
        `${APPLICATION_API_END_POINT}/apply/${jobId}`,
        { withCredentials: true }
      );

      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = {
          ...singleJob,
          applications: [...singleJob.applications, { applicant: user?._id }],
        };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(
            res.data.job.applications.some(
              (application) => application.applicant === user?._id
            )
          );
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  return (
    <div className="w-full min-h-screen bg-[conic-gradient(at_top_left,_#fbc2eb,_#a18cd1,_#fcb69f,_#fbc2eb)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-6 sm:py-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="w-full sm:w-auto">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl break-words">
              {singleJob?.title}
            </h1>
            <div className="flex flex-wrap items-center gap-2 mt-3">
              <Badge className="text-blue-700 font-bold" variant="ghost">
                {singleJob?.position} Positions
              </Badge>
              <Badge className="text-[#F83002] font-bold" variant="ghost">
                {singleJob?.jobType}
              </Badge>
              <Badge className="text-[#7209b7] font-bold" variant="ghost">
                {formatSalary(singleJob?.salary)}
              </Badge>
            </div>
          </div>
  
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`w-full sm:w-auto rounded-lg px-4 py-2 text-sm sm:text-base ${
              isApplied
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </div>
  
        
        <div className="border-b-1 border-gray-300 font-medium pt-4 pb-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mt-4">
          <h1 className="text-base sm:text-lg">Job Description</h1>
          <div className="text-xs sm:text-sm text-[#1a1919]">
            Posted on: {singleJob?.createdAt.split("T")[0]}
          </div>
        </div>
  
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-700 my-6">
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <MapPin size={14} className="text-[#f41717]" />
              <p className="text-xs uppercase text-[#1a1919]">Location</p>
            </div>
            <p className="font-medium text-sm break-words">
              {singleJob?.location}
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <Briefcase size={14} className="text-[#f41717]" />
              <p className="text-xs uppercase text-[#1a1919]">Experience</p>
            </div>
            <p className="font-medium text-sm">
              {singleJob?.experienceLevel} yrs
            </p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <IndianRupee size={14} className="text-[#f41717]" />
              <p className="text-xs uppercase text-[#1a1919]">Salary</p>
            </div>
            <p className="font-medium text-sm">{formatSalary(singleJob?.salary)}</p>
          </div>
  
          <div className="flex flex-col items-center text-center">
            <div className="flex items-center gap-1">
              <Users size={14} className="text-[#f41717]" />
              <p className="text-xs uppercase text-[#1a1919]">Applicants</p>
            </div>
            <p className="font-medium text-sm">
              {singleJob?.applications?.length}
            </p>
          </div>
        </div>
  
        
        <div className="my-4">
          <h1 className="font-semibold mb-1 text-base sm:text-lg">Description</h1>
          <p className="text-[#1a1919] text-sm sm:text-base leading-relaxed">
            {singleJob?.description}
          </p>
        </div>
  
        
        <div className="my-6">
          <h1 className="font-semibold mb-2 text-base sm:text-lg">
            Requirements
          </h1>
          <ul className="list-disc list-inside pl-4 sm:pl-6 text-sm sm:text-base text-[#1a1919] space-y-1">
            {singleJob?.requirements?.map((req, index) => (
              <li key={index} className="font-normal">
                {req}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
};

export default JobDescription;
