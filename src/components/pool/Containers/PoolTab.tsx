import React from "react";
import PoolSort from "../Selectboxes/PoolSort";

const Grid = ({ fill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.28571 13.4286H3.42857C2.63973 13.4286 2 14.0683 2 14.8571V17.7143C2 18.5031 2.63973 19.1429 3.42857 19.1429H6.28571C7.07455 19.1429 7.71429 18.5031 7.71429 17.7143V14.8571C7.71429 14.0683 7.07455 13.4286 6.28571 13.4286ZM13.4286 13.4286H10.5714C9.78259 13.4286 9.14286 14.0683 9.14286 14.8571V17.7143C9.14286 18.5031 9.78259 19.1429 10.5714 19.1429H13.4286C14.2174 19.1429 14.8571 18.5031 14.8571 17.7143V14.8571C14.8571 14.0683 14.2174 13.4286 13.4286 13.4286ZM20.5714 13.4286H17.7143C16.9254 13.4286 16.2857 14.0683 16.2857 14.8571V17.7143C16.2857 18.5031 16.9254 19.1429 17.7143 19.1429H20.5714C21.3603 19.1429 22 18.5031 22 17.7143V14.8571C22 14.0683 21.3603 13.4286 20.5714 13.4286ZM6.28571 4.85715H3.42857C2.63973 4.85715 2 5.49688 2 6.28572V9.14286C2 9.9317 2.63973 10.5714 3.42857 10.5714H6.28571C7.07455 10.5714 7.71429 9.9317 7.71429 9.14286V6.28572C7.71429 5.49688 7.07455 4.85715 6.28571 4.85715ZM13.4286 4.85715H10.5714C9.78259 4.85715 9.14286 5.49688 9.14286 6.28572V9.14286C9.14286 9.9317 9.78259 10.5714 10.5714 10.5714H13.4286C14.2174 10.5714 14.8571 9.9317 14.8571 9.14286V6.28572C14.8571 5.49688 14.2174 4.85715 13.4286 4.85715ZM20.5714 4.85715H17.7143C16.9254 4.85715 16.2857 5.49688 16.2857 6.28572V9.14286C16.2857 9.9317 16.9254 10.5714 17.7143 10.5714H20.5714C21.3603 10.5714 22 9.9317 22 9.14286V6.28572C22 5.49688 21.3603 4.85715 20.5714 4.85715Z"
      fill={`${fill}`}
    />
  </svg>
);
const List = ({ fill }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.125 16.375H2.625C2.45924 16.375 2.30027 16.4408 2.18306 16.5581C2.06585 16.6753 2 16.8342 2 17V19.5C2 19.6658 2.06585 19.8247 2.18306 19.9419C2.30027 20.0592 2.45924 20.125 2.625 20.125H5.125C5.29076 20.125 5.44973 20.0592 5.56694 19.9419C5.68415 19.8247 5.75 19.6658 5.75 19.5V17C5.75 16.8342 5.68415 16.6753 5.56694 16.5581C5.44973 16.4408 5.29076 16.375 5.125 16.375ZM5.125 3.875H2.625C2.45924 3.875 2.30027 3.94085 2.18306 4.05806C2.06585 4.17527 2 4.33424 2 4.5V7C2 7.16576 2.06585 7.32473 2.18306 7.44194C2.30027 7.55915 2.45924 7.625 2.625 7.625H5.125C5.29076 7.625 5.44973 7.55915 5.56694 7.44194C5.68415 7.32473 5.75 7.16576 5.75 7V4.5C5.75 4.33424 5.68415 4.17527 5.56694 4.05806C5.44973 3.94085 5.29076 3.875 5.125 3.875V3.875ZM5.125 10.125H2.625C2.45924 10.125 2.30027 10.1908 2.18306 10.3081C2.06585 10.4253 2 10.5842 2 10.75V13.25C2 13.4158 2.06585 13.5747 2.18306 13.6919C2.30027 13.8092 2.45924 13.875 2.625 13.875H5.125C5.29076 13.875 5.44973 13.8092 5.56694 13.6919C5.68415 13.5747 5.75 13.4158 5.75 13.25V10.75C5.75 10.5842 5.68415 10.4253 5.56694 10.3081C5.44973 10.1908 5.29076 10.125 5.125 10.125ZM21.375 17H8.875C8.70924 17 8.55027 17.0658 8.43306 17.1831C8.31585 17.3003 8.25 17.4592 8.25 17.625V18.875C8.25 19.0408 8.31585 19.1997 8.43306 19.3169C8.55027 19.4342 8.70924 19.5 8.875 19.5H21.375C21.5408 19.5 21.6997 19.4342 21.8169 19.3169C21.9342 19.1997 22 19.0408 22 18.875V17.625C22 17.4592 21.9342 17.3003 21.8169 17.1831C21.6997 17.0658 21.5408 17 21.375 17ZM21.375 4.5H8.875C8.70924 4.5 8.55027 4.56585 8.43306 4.68306C8.31585 4.80027 8.25 4.95924 8.25 5.125V6.375C8.25 6.54076 8.31585 6.69973 8.43306 6.81694C8.55027 6.93415 8.70924 7 8.875 7H21.375C21.5408 7 21.6997 6.93415 21.8169 6.81694C21.9342 6.69973 22 6.54076 22 6.375V5.125C22 4.95924 21.9342 4.80027 21.8169 4.68306C21.6997 4.56585 21.5408 4.5 21.375 4.5V4.5ZM21.375 10.75H8.875C8.70924 10.75 8.55027 10.8158 8.43306 10.9331C8.31585 11.0503 8.25 11.2092 8.25 11.375V12.625C8.25 12.7908 8.31585 12.9497 8.43306 13.0669C8.55027 13.1842 8.70924 13.25 8.875 13.25H21.375C21.5408 13.25 21.6997 13.1842 21.8169 13.0669C21.9342 12.9497 22 12.7908 22 12.625V11.375C22 11.2092 21.9342 11.0503 21.8169 10.9331C21.6997 10.8158 21.5408 10.75 21.375 10.75Z"
      fill={`${fill}`}
    />
  </svg>
);

function PoolTab({ isList, setIsList }) {
  const sortCat = ["Hot", "Earned", "Total"];
  const [currentSort, setCurrentSort] = React.useState(sortCat[0]);

  return (
    <div className="w-full flex flex-col justify-between items-center bg-grey_70 py-5 px-8 rounded-xl lg:flex-row">
      <div className="flex flex-col items-center justify-between w-full lg:w-2/5 mb-3 md:mb-0 md:flex-row">
        <div className="flex justify-start w-full md:w-auto md:items-center mb-2 md:mb-0">
          <button className="mr-6" onClick={() => setIsList(false)}>
            <Grid fill={isList ? "#5A6172" : "#2669F5"} />
          </button>
          <button onClick={() => setIsList(true)}>
            <List fill={isList ? "#2669F5" : "#5A6172"} />
          </button>
        </div>

        <div className="flex justify-between w-full md:w-auto md:items-center">
          <div className="flex items-center">
            <div className="flex justify-center align-center">
              <div className="relative inline-block w-10 align-middle select-none transition duration-200 ease-in">
                <input
                  type="checkbox"
                  name="toggle"
                  id="toggle"
                  className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer"
                />
                <label
                  htmlFor="toggle"
                  className="toggle-label block overflow-hidden h-5 rounded-full bg-gray-300 cursor-pointer"
                ></label>
              </div>
            </div>
            <p className="text-tertiary ml-2 font-bold">Staked only</p>
          </div>
          <div className="ml-6 bg-grey_50 rounded">
            <button className="btn-primary py-2 px-5 rounded text-xs font-bold">
              Live
            </button>
            <button className="bg-grey_50 py-2 px-5 rounded text-xs font-bold">
              Finished
            </button>
          </div>
        </div>
      </div>

      <form className="flex flex-col w-full lg:w-3/5 justify-between md:justify-end md:flex-row">
        <div className="mr-4 md:mb-0 mb-2 lg:w-auto w-full">
          <p className="mb-2">Sort By</p>
          <PoolSort
            options={sortCat}
            selectedOption={currentSort}
            handleChange={(e) => setCurrentSort(e)}
          />
        </div>
        <div className="lg:w-auto w-full">
          <p className="mb-2">Search</p>
          <input
            type="text"
            className="bg-grey_50 text-sm grey-10 p-4 rounded-lg lg:w-auto w-full"
          />
        </div>
      </form>
    </div>
  );
}

export default PoolTab;
