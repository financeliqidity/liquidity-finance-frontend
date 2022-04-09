import React from "react";
import Image from "next/image";

import Layout from "../../components/Layout";
import VoteTab from "../../components/vote/VoteTab";

export default function Vote() {
  return (
    <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
      <VoteTab isList={false} setIsList={() => {}} />
      <div className="bg-grey_70 mt-8 py-12 px-8">
        <div className="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-8 bg-grey_60 rounded-[14px]">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-grey_50 sm:w-32 sm:h-32">
                <Image
                  src="/assets/images/LFI-LOGO.svg"
                  width="64"
                  height="64"
                  alt="..."
                />
              </div>
              <h6 className="mb-3 font-bold leading-10 text-3xl">
                Liquidity Finance
              </h6>
              <p className="mb-3 text-sm grey-10 font-bold">2.3K Members</p>
              <button className="py-1 px-6 rounded-lg bg-grey_50 font-bold">
                Join
              </button>
            </div>
          </div>
          <div className="p-8 bg-grey_60 rounded-[14px]">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-grey_50 sm:w-32 sm:h-32">
                <Image
                  src="/assets/images/UNISWAP-LOGO.svg"
                  width="64"
                  height="64"
                  alt="..."
                />
              </div>
              <h6 className="mb-3 font-bold leading-10 text-3xl">Uniswap</h6>
              <p className="mb-3 text-sm grey-10 font-bold">2.3K Members</p>
              <button className="py-1 px-6 rounded-lg bg-grey_50 font-bold">
                Join
              </button>
            </div>
          </div>
          <div className="p-8 bg-grey_60 rounded-[14px]">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-grey_50 sm:w-32 sm:h-32">
                <Image
                  src="/assets/images/LFI-LOGO.svg"
                  width="64"
                  height="64"
                  alt="..."
                />
              </div>
              <h6 className="mb-3 font-bold leading-10 text-3xl">
                Liquidity Finance
              </h6>
              <p className="mb-3 text-sm grey-10 font-bold">2.3K Members</p>
              <button className="py-1 px-6 rounded-lg bg-grey_50 font-bold">
                Join
              </button>
            </div>
          </div>
          <div className="p-8 bg-grey_60 rounded-[14px]">
            <div className="max-w-md text-center">
              <div className="flex items-center justify-center w-32 h-32 mx-auto mb-4 rounded-full bg-grey_50 sm:w-32 sm:h-32">
                <Image
                  src="/assets/images/LFI-LOGO.svg"
                  width="64"
                  height="64"
                  alt="..."
                />
              </div>
              <h6 className="mb-3 font-bold leading-10 text-3xl">
                Liquidity Finance
              </h6>
              <p className="mb-3 text-sm grey-10 font-bold">2.3K Members</p>
              <button className="py-1 px-6 rounded-lg bg-grey_50 font-bold">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Vote.layout = Layout;
