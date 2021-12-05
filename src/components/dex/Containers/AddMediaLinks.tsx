import React from "react";

function AddMedia() {
  return (
    <div
      className="w-full md:w-12/25 bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg text-gray"
      style={{ width: "40.5%" }}
    >
      <p className="text-center text-blue-500">Add Platform links</p>
      <div className="my-8">
        <p className="mb-2">Website</p>
        <input
          type="text"
          className="bg-tertiary w-full py-2 px-5 rounded-md"
          placeholder="Enter Website URL"
        />
      </div>
      <div className="w-full flex">
        <div className="flex flex-col  w-1/2 p-1">
          <span className="">Social link 1</span>
          <input
            type="text"
            className="bg-tertiary py-2 px-5 block rounded-md"
            placeholder="Enter token social link url"
          />
        </div>
        <div className="flex flex-col  w-1/2 p-1">
          <span className="">Social link 2</span>
          <input
            type="text"
            className="bg-tertiary py-2 px-5 block rounded-md"
            placeholder="Enter token social link url"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 w-full btn-primary text-grey-50 text-md font-light py-2 rounded-lg"
      >
        Continue
      </button>
    </div>
  );
}

export default AddMedia;
