import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangalore", "Hyderabad", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer","Graphic Designer","Data Scientist"],
  },
  {
    filterType: "Salary",
    array: ["0-2LPA", "2LPA-5LPA", "5LPA-8LPA", "8LPA-15LPA"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full  p-3 bg-[#E8E3E3] rounded-md mb-4 lg:mb-0 h-120 flex flex-col shadow-xl border-gray-100">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-2" />

      <RadioGroup
        value={selectedValue}
        onValueChange={changeHandler}
        className=" overflow-y-auto flex-1 rounded-md w-full"
        style={{
          scrollbarWidth: "thin",
          scrollbarColor: "#9ca3af #f3f4f6",
        }}
      >
        <div className="flex items-center space-x-2 mt-3 ">
          <RadioGroupItem value="" id="all-jobs"  />
          <Label htmlFor="all-jobs">All Jobs</Label>
        </div>

        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-medium ">{data.filterType}</h1>
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <div key={itemId} className="flex items-center space-x-2 my-2 ">
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId}>{item}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;

