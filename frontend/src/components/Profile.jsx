import React, { useState } from "react";
import Navbar from "./shared/Navbar";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Contact, Mail, Pen } from "lucide-react";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import AppliedJobTable from "./AppliedJobTable";
import UpdateProfileDialog from "./UpdateProfileDialog";
import { useSelector } from "react-redux";
import useGetAppliedJobs from "@/hooks/useGetAppliedJobs";

const isResume = true;

const Profile = () => {
  useGetAppliedJobs();
  const [open, setOpen] = useState(false);
  const { user } = useSelector((store) => store.auth);

  return (
    <div className="min-h-screen flex flex-col bg-[conic-gradient(at_top_left,_#fbc2eb,_#a18cd1,_#fcb69f,_#fbc2eb)] ">
      <Navbar />
      <div className="flex-1">

      {/* Profile Card */}
      <div className="max-w-4xl mx-6 lg:mx-auto bg-white border border-gray-200 rounded-2xl my-6 px-4 sm:px-6 py-6 ">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
          {/* Avatar & Info */}
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Avatar className="h-24 w-24">
              <AvatarImage
                src={
                  user?.profile?.profilePhoto?.trim()
                    ? user.profile.profilePhoto
                    : "https://cdn-icons-png.flaticon.com/512/149/149071.png"
                }
                alt="User"
              />
            </Avatar>
            <div className="text-center sm:text-left">
              <h1 className="font-medium text-xl">{user?.fullname}</h1>
              <p className="text-sm text-gray-600">{user?.profile?.bio}</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="flex justify-end">
            <Button onClick={() => setOpen(true)} variant="outline" size="sm">
              <Pen className="w-4 h-4 mr-2" />
              Edit
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="my-5 space-y-2">
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4" />
            <span className="text-sm">{user?.email}</span>
          </div>
          <div className="flex items-center gap-3">
            <Contact className="w-4 h-4" />
            <span className="text-sm">{user?.phoneNumber}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="my-5">
          <h2 className="font-semibold text-md mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user?.profile?.skills.length !== 0 ? (
              user?.profile?.skills.map((item, index) => (
                <Badge key={index}>{item}</Badge>
              ))
            ) : (
              <span className="text-sm">NA</span>
            )}
          </div>
        </div>

        {/* Resume */}
        <div className="mt-4">
          <Label className="text-md font-bold">Resume</Label>
          {isResume ? (
            <a
              href={user?.profile?.resume}
              target="_blank"
              rel="noreferrer"
              className="block text-blue-500 hover:underline text-sm mt-1"
            >
              {user?.profile?.resumeOriginalName}
            </a>
          ) : (
            <span className="text-sm">NA</span>
          )}
        </div>
      </div>

      {/* Applied Jobs */}
      <div className="max-w-4xl mx-6 lg:mx-auto bg-white rounded-2xl mb-6 pb-6 px-4 sm:px-6 py-6">
        <h1 className="font-bold text-lg mb-4">Applied Jobs</h1>
        <AppliedJobTable />
        </div>
        </div>

      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
