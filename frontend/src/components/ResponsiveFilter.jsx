import React, { useState } from "react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Filter } from "lucide-react";
import FilterCard from "./FilterCard";

const ResponsiveFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden flex justify-end px-2 mb-3 ">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </DrawerTrigger>

          <DrawerContent className="p-0">
            
            <div className="flex items-center justify-between px-4 py-2 border-b ">
              <h2 className="text-base font-semibold">Filters</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setOpen(false)}
                className="text-gray-600"
              > ✕ </Button>
            </div>

            <div className="h-[100vh] overflow-y-auto px-2 py-3 scrollbar-hide">
              <FilterCard />
            </div>

            <div className="border-t px-4 py-2 bg-white sticky bottom-0 flex justify-end">
              <Button
                size="sm"
                className="bg-[#7209b7] hover:bg-[#5f32ad] text-white rounded-lg"
                onClick={() => setOpen(false)}
              >
                Apply
              </Button>
            </div>
          </DrawerContent>
        </Drawer>
      </div>

      <div className="hidden lg:block w-full ">
        <FilterCard />
      </div>
    </>
  );
};

export default ResponsiveFilter;
