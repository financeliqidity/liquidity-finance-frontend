import React from "react";

const Close = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 7L17 17"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 17L17 7"
      stroke="#B7BECB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function AddMedia({ showModal, setShowModal, setTab }) {
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-dark_grey bg-opacity-80">
            <div className="relative w-5/6 my-6 mx-auto max-w-xl md:w-7/12 rounded-3xl">
              <div className="w-full bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg text-gray">
                <div className="flex justify-between items-center">
                  <span className="bg-transparent"></span>
                  <p className="text-center text-primary text-xl font-bold">
                    Add Platform links
                  </p>
                  <button
                    className="p-1 bg-transparent border-0 float-right outline-none focus:outline-none cursor-pointer"
                    onClick={() => setShowModal(false)}
                  >
                    <Close />
                  </button>
                </div>

                <div className="my-8">
                  <p className="text-white text-lg font-semibold mb-3">
                    Website
                  </p>
                  <input
                    type="text"
                    className="bg-tertiary w-full py-3 px-4 rounded-md"
                    placeholder="Enter Website URL"
                  />
                </div>
                <div className="w-full flex-col flex md:flex-row md:justify-between">
                  <div className="flex flex-col w-full md:w-12/25">
                    <span className="text-white text-lg font-semibold mb-3">
                      Social link 1
                    </span>
                    <input
                      type="text"
                      className="bg-tertiary py-3 px-6 block rounded-md"
                      placeholder="Enter token social link url"
                    />
                  </div>
                  <div className="flex flex-col w-full md:w-12/25 p-1">
                    <span className="text-white text-lg font-semibold mb-3">
                      Social link 2
                    </span>
                    <input
                      type="text"
                      className="bg-tertiary py-3 px-6 block rounded-md"
                      placeholder="Enter token social link url"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-8 w-full btn-primary text-2xl font-bold py-2 rounded-lg text-white"
                  onClick={() => {
                    setTab("add");
                    setShowModal(false);
                  }}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default AddMedia;
