import { useState, useEffect } from "react";
import LiquidityRight from "../Cards/LiquidityRight";
import LiquidityLeft from "../Cards/LiquidityLeft";
import AddRemoveLiq from "../Cards/AddRemoveLiq";

function Liquidity({ setPage }) {
  const [asDeveloper, setAsDeveloper] = useState(false);

  const asDevSetter = () => setAsDeveloper(!asDeveloper);

  const [activeLeft, setActiveLeft] = useState("home");

  const tabs = [
    {
      component: (
        <LiquidityLeft
          asDevSetter={asDevSetter}
          asDeveloper={asDeveloper}
          setPage={setPage}
          setTab={setActiveLeft}
        />
      ),
    },
    {
      component: <AddRemoveLiq setActiveLeft={setActiveLeft} />,
    },
  ];

  return (
    <div>
      <div className="bg-grey_70">
        <div className="py-6 md:py-12 md:w-11/12 md:mx-auto text-white">
          <div className="flex flex-col justify-between md:flex-row mb-10 px-4 md:px-0">
            <>{activeLeft === "home" ? tabs[0].component : tabs[1].component}</>

            <LiquidityRight />

            {/* <div className="right w-full md:mt-0 mt-10 md:w-12/25">
              <div className="bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg h-full">
                <span className="text-base font-semibold">My Liquidity</span>
                <div className="w-full mt-5 flex justify-between px-4 py-2 border-1 border-solid border-grey_50 bg-primary rounded-md">
                  <span className="">Pool</span>
                  <span className="">My Liquidity</span>
                  <span className="">Action</span>
                </div>
                <span className="mt-5 block">
                  Your wallet is not connected!{" "}
                  <a href="#con" className="isLink">
                    connect wallet
                  </a>
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
