import React from "react";
import PoolDetailsLeft from "../Cards/PoolDetailsLeft";
import PoolDetailsRight from "../Cards/PoolDetailsRight";
import PoolDetailsTable from "../Tables/PoolDetailsTable";

export default function PoolDetails() {
  return (
    <div className="text-white mt-6">
      <div className="md:w-11/12 md:mx-auto">
        <div className="flex flex-col md:justify-between md:flex-row mb-12 md:px-0 px-4">
          <PoolDetailsLeft />
          <PoolDetailsRight />
        </div>

        <div className="px-4 md:px-0">
          <PoolDetailsTable />
        </div>
      </div>
    </div>
  );
}
