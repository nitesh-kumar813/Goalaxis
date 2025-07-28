import React, { useState } from "react";
import { Button } from "./ui/button";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import { Filter } from "lucide-react";
import FilterCard from "./FilterCard"; // adjust path if needed

const ResponsiveFilter = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile/Tablet: Show button to open drawer */}
      <div className="lg:hidden flex justify-end px- mb-3">
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerTrigger asChild>
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2 " />
              Filters
            </Button>
          </DrawerTrigger>
          <DrawerContent className="p-4 ">
            <FilterCard />
          </DrawerContent>
        </Drawer>
      </div>

      {/* Desktop: Show FilterCard normally */}
      <div className="hidden lg:block w-full">
        <FilterCard />
      </div>
    </>
  );
};

export default ResponsiveFilter;
