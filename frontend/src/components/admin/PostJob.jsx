import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: 0,
    companyId: "",
  });

  const [loading, setLoading] = useState(false);
  const [salaryError, setSalaryError] = useState("");
  const [experienceError, setExperienceError] = useState("");
  const navigate = useNavigate();
  const { companies } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    const val = e.target.value.trim();
    setInput({ ...input, [e.target.name]: e.target.value });

    if (e.target.name === "salary") {
      if (/^\d+(\.\d+)?$/.test(val) || val === "") {
        setSalaryError("");
      } else {
        setSalaryError("Invalid salary");
      }
    }
    if (e.target.name === "experience") {
      if (/^\d+$/.test(val) || val === "") {
        setExperienceError("");
      } else {
        setExperienceError("Invalid experience");
      }
    }
  };

  const selectChangeHandler = (value) => {
    const selectedCompany = companies.find(
      (company) => company.name.toLowerCase() === value
    );
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (salaryError || experienceError) {
      toast.error("Please fix salary before submitting.");
      return;
    }

    const payload = {
      ...input,
      requirements: input.requirements
        ? input.requirements.split(",").map((req) => req.trim())
        : [],
      experienceLevel: parseInt(input.experience, 10),
      position: parseInt(input.position, 10),
    };

    try {
      console.log("👉 Sending input:", input);

      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`, payload, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });

      console.log("✅ Response:", res.data);

      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center w-full px-4 my-5">
        <form
          onSubmit={submitHandler}
          className="p-6 sm:p-8 w-full max-w-4xl border border-gray-200 shadow-2xl rounded-md sha"
        >
          <h2 className="text-xl font-semibold mb-6 text-center">
            Post New Job
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "Title", name: "title" },
              { label: "Description", name: "description" },
              { label: "Requirements", name: "requirements" },
              { label: "Salary (LPA)", name: "salary" },
              { label: "Location", name: "location" },
              { label: "Job Type", name: "jobType" },
              { label: "Experience Level", name: "experience" },
              { label: "No of Position", name: "position", type: "number" },
            ].map((field) => (
              <div key={field.name}>
                <Label>{field.label}</Label>
                <Input
                  type={field.type || "text"}
                  name={field.name}
                  placeholder={
                    field.name === "salary"
                      ? "e.g. 5"
                      : field.name === "experience"
                      ? "e.g. 3"
                      : ""
                  }
                  value={input[field.name]}
                  onChange={changeEventHandler}
                  className={`my-1 bg-white text-gray-800 placeholder-gray-400 ${
                    field.name === "salary" && salaryError
                      ? "border border-red-500"
                      : ""
                  }`}
                />
                {field.name === "salary" && salaryError && (
                  <p className="text-xs text-red-600 mt-1">{salaryError}</p>
                )}
                {field.name === "experience" && experienceError && (
                  <p className="text-xs text-red-600 mt-1">{experienceError}</p>
                )}
              </div>
            ))}

            {companies.length > 0 && (
              <div className="sm:col-span-2">
                <Label>Select Company</Label>
                <Select onValueChange={selectChangeHandler}>
                  <SelectTrigger className="w-full my-1 bg-white text-gray-800">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem
                          key={company._id}
                          value={company.name.toLowerCase()}
                        >
                          {company.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
          </div>

          {loading ? (
            <Button className="w-full mt-6" disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button type="submit" className="w-full mt-6">
              Post New Job
            </Button>
          )}

          {companies.length === 0 && (
            <p className="text-xs text-red-600 font-bold text-center mt-3">
              * Please register a company first before posting a job
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default PostJob;
