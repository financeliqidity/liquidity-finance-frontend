import React from "react";
import PoolItemGrid from "../Cards/PoolItemGrid";

export default function PoolGrid() {
  return (
    <>
      <div className="flex flex-wrap -mx-3 overflow-hidden sm:-mx-3 md:-mx-4 lg:-mx-4 xl:-mx-4">
        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>

        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>

        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>

        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>

        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>

        <div className="my-3 px-3 w-full overflow-hidden sm:my-3 sm:px-3 sm:w-1/3 md:my-4 md:px-4 md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 xl:my-4 xl:px-4 xl:w-1/3">
          <PoolItemGrid />
        </div>
      </div>
    </>
  );
}
