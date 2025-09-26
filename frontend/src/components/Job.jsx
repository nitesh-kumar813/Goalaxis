import React from "react";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { useNavigate } from "react-router-dom";
import { formatSalary } from "@/utils/formatSalary";



const Job = ({ job, color }) => {
  const navigate = useNavigate();
  

  const daysAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime);
    const currentTime = new Date();
    const timeDifference = currentTime - createdAt;
    return Math.floor(timeDifference / (1000 * 24 * 60 * 60));
  };


  return (
    <div
      className="p-3 rounded-md shadow-xl  border border-gray-100 px-4"
      style={{ backgroundColor: color }}
    >
      <div className="flex items-center justify-between ">
        <p className="text-sm text-gray-500">
          {daysAgoFunction(job?.createdAt) === 0
            ? "Today"
            : `${daysAgoFunction(job?.createdAt)} days ago`}
        </p>
        <button onClick={() => console.log("clicked")}>
          <Bookmark className="w-5 h-5 text-gray-700 hover:text-blue-800" />
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

      <div className="">
        <h1 className="font-bold text-medium my-2 truncate w-full ">
          {job?.title}
        </h1>
        <p className="text-sm text-gray-600  h-16 line-clamp-3 ">
          {job?.description}
        </p>
      </div>
      <div className="flex items-center gap-2 mt-3 flex-nowrap overflow-x-auto no-scrollbar">
        <Badge
          className="text-blue-700 font-bold border border-blue-700"
          variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge
          className="text-[#f94a22] font-bold border border-[#f94a22]"
          variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge
          className="text-[#7209b7] font-bold border border-[#7209b7]"
          variant="ghost">
        {formatSalary(job?.salary)}
        </Badge>
      </div>

      <div className="flex items-center gap-3 mt-3">
        <Button
          onClick={() => navigate(`/description/${job?._id}`)}
          variant="outline"
          className="px-3 h-6 py-4  text-sm"
        >
          Details
        </Button>
        <Button className="bg-[#8445ae] px-3 h-6 py-4 text-sm">
          Save For Later
        </Button>
        
      </div>
    </div>
  );
};

export default Job;
