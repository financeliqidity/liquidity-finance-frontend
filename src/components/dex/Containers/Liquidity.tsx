import TokenSelectbox from "../../shared/Selectboxes/TokenSelectbox";
import SelectPair from "../Modals/SelectPair";

function Liquidity({ pay, currentPay }) {
  return (
    <div>
      <div className="bg-grey_70">
        <div className="md:py-12 md:w-11/12 md:mx-auto text-white">
          <div className="flex flex-col justify-between md:flex-row mb-10">
            <div className="left w-full md:w-12/25 bg-blue_grey px-4 py-5 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg">
              <div className="w-full flex justify-between bg-grey_50 rounded-r-lg">
                <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                  Swap
                </button>
                <button className="md:py-5 py-3 w-1/3 btn-primary border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                  Liquidity
                </button>
                <button className="md:py-5 py-3 w-1/3 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                  Loan
                </button>
              </div>
              <div className="mt-9 flex justify-between items-center">
                <span className="md:text-xl text-base">
                  Add Liquidity to receive LP tokens
                </span>
                <div className="">
                  <button className="p-2.5 bg-grey_50 rounded-lg">
                    <img src="/assets/icons/settings.svg" alt="settings" />
                  </button>
                  <button className="p-2.5 bg-grey_50 rounded-lg ml-1">
                    <img src="/assets/icons/refresh.svg" alt="refresh" />
                  </button>
                </div>
              </div>
              <SelectPair />
              <div className="select-pair mt-3">
                <span className="text-xs text-tertiary mb-3">
                  Select a pair
                </span>
                <div className="flex justify-between w-full">
                  <TokenSelectbox
                    options={pay}
                    selectedOption={currentPay}
                    handleChange={() => console.log("wow")}
                  />
                  <img src="/assets/icons/plus.svg" alt="+" className="mx-2" />
                  <TokenSelectbox
                    options={pay}
                    selectedOption={currentPay}
                    handleChange={() => console.log("wow")}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="select-a-pool text-tertiary flex w-full justify-between align-center">
                  <span>Select a pool</span>
                  <a href="#createpool" className="isLink">
                    Create a pool
                  </a>
                </div>
                <div className="">
                  <select
                    name="pool"
                    id="pool"
                    className="cursor-default relative py-2  transition ease-in-out duration-150 px-2 bg-tertiary rounded-md text-sm focus:outline-none w-full  text-white"
                  >
                    <option value="a" className="p-3">
                      ox56e..ee21
                    </option>
                    <option value="b" className="p-3">
                      ox56e..ee22
                    </option>
                    <option value="c" className="p-3">
                      ox56e..ee23
                    </option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <div className="flex justify-between">
                  <span className="text-xs font-semibold text-tertiary">
                    Total Liquidity
                  </span>
                  <div className="flex flex-col">
                    <div className="flex">
                      <span className="">10,674.1234</span>
                      {/* <img src="" alt="" /> */}
                    </div>
                    <div className="flex">
                      <span className="">12,234,123.672</span>
                      {/* <img src="" alt="" className="" /> */}
                    </div>
                  </div>
                </div>
                <div className="flex justify-between mt-8">
                  <div className="flex text-tertiary">
                    <input type="checkbox" className="" />
                    <span className="">
                      Lock Liquidity,{" "}
                      <a href="#e" className="isLink">
                        Learn more
                      </a>
                    </span>
                  </div>
                  <div className="flex justify-center align-center h-5">
                    <span className="text-tertiary">Add as a developer</span>
                    <input type="radio" className="" />
                  </div>
                </div>
              </div>
              <>
                <button
                  type="submit"
                  disabled={true}
                  className="mt-8 w-full bg-tertiary text-grey-50 text-md font-light py-2 rounded-lg"
                >
                  Connect Wallet to continue
                </button>
              </>
              <div className="mt-8 p-3 w-full bg-tertiary rounded-md">
                <p className="w-4/5 pl-2 py-2 text-sm font-light text-gray-50 ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eaque, maxime labore, repellendus incidunt nesciunt veniam
                  quis voluptatibus praesentium, tenetur similique repellat
                  voluptate alias autem iure et! Facilis distinctio cumque
                  voluptatem!
                </p>
              </div>
            </div>

            <div className="right w-full md:mt-0 mt-10 md:w-12/25">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
