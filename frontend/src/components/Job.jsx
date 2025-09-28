import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { formatSalary } from "@/utils/formatSalary";
import { useDispatch, useSelector } from "react-redux";
import { saveJob, unSaveJob } from "../redux/savedJobsActions";
import { toast } from "sonner"; 

const Job = ({ job, color }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { savedJobs } = useSelector((state) => state.savedJobs);
  const { user } = useSelector((state) => state.auth); 

  
  const isSaved = savedJobs.some((j) => j?.job?._id === job._id);

 
  const handleSaveToggle = () => {
    if (!user) {
    toast.error("Please login to save jobs"); 
    return;
    }
    
    
    if (isSaved) {
    dispatch(unSaveJob(job._id));
    } else {
    dispatch(saveJob(job._id));
    }
    };

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  };

  return (
    <div
      className="p-3 rounded-md shadow-xl border border-gray-100 px-4"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <button onClick={handleSaveToggle}>
          <Bookmark
            className={`w-5 h-5 ${
              isSaved
                ? "text-[#8445ae] fill-[#8445ae] "
                : "text-gray-700 fill-none"
            } hover:text-[#8445ae]`}
          />
        </button>
      </div>

      <div className="flex items-center gap-2 my-2 ">
        <Button className="rounded-full p-4" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src={job?.company?.logo} />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-medium font-semibold text-gray-900 tracking-tight truncate w-full">
            {job?.company?.name}
          </h1>
        </div>
      </div>

      <div>
        <h1 className="font-bold text-medium my-2 truncate w-full ">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-600 h-16 line-clamp-3 ">
          {job?.description}
        </p>
      </div>

      <div className="flex items-center gap-2 mt-3 flex-nowrap overflow-x-auto no-scrollbar">
        <Badge
          className="text-blue-700 font-bold border border-blue-700"
          variant="ghost"
        >
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-[#f94a22] font-bold border border-[#f94a22]"
          variant="ghost"
        >
          {job?.jobType}
        </Badge>
        <Badge
          className="text-[#7209b7] font-bold border border-[#7209b7]"
          variant="ghost"
        >
          {formatSalary(job?.salary)}
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="px-3 h-6 py-4 text-sm"
        >
          Details
        </Button>
        <Button
          onClick={handleSaveToggle}
          className={`px-3 h-6 py-4 text-sm text-white ${
            isSaved
              ? "bg-gray-600 hover:bg-gray-500"
              : "bg-[#8445ae] hover:bg-[#9c5bce]"
          }`}
        >
          {isSaved ? "Unsave" : "Save for Later"}
        </Button>
      </div>
    </div>
  );
};

export default Job;
