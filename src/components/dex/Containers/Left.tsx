import React from 'react'

function Left() {
    return (
        <>
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
                                <span className="md:text-xl text-base">Add Liquidity to receive LP tokens</span>
                                <div className="">
                                    <button className="p-2.5 bg-grey_50 rounded-lg">
                                        <img src="/assets/icons/settings.svg" alt="settings" />
                                    </button>
                                    <button className="p-2.5 bg-grey_50 rounded-lg ml-1">
                                        <img src="/assets/icons/refresh.svg" alt="refresh" />
                                    </button>
                                </div>
                            </div>
                            <div className="select-pair mt-3">
                                <span className="text-xs text-tertiary mb-3">Select a pair</span>
                                <div className="flex justify-between w-full mt-2">
                                    <TokenSelectbox 
                                      options={pay}
                                      selectedOption={currentPay}
                                      handleChange={() => console.log("wow")
                                      }
                                    />
                                        <img src="/assets/icons/plus.svg" alt="+" className="mx-2" />
                                    <TokenSelectbox 
                                      options={pay}
                                      selectedOption={currentPay}
                                      handleChange={() => console.log("wow")
                                      }
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col mt-8">
                              <div className="select-a-pool text-tertiary text-xs flex w-full justify-between align-center">
                                  <span>Select a pool</span>
                                  <a href="#createpool" className="isLink">Create a pool</a>
                              </div>
                              <div className="mt-2">
                                  <select name="pool" id="pool" className="cursor-default relative py-2  transition ease-in-out duration-150 px-2 bg-tertiary rounded-md text-sm focus:outline-none w-full  text-white">
                                      <option value="a" className="p-3">ox56e..ee21</option>
                                      <option value="b" className="p-3">ox56e..ee22</option>
                                      <option value="c" className="p-3">ox56e..ee23</option>
                                  </select>
                              </div>
                            </div>
                            <div className="flex flex-col mt-8">
                                <div className="flex justify-between">
                                    <span className="text-xs font-semibold text-tertiary">Total Liquidity</span>
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
                                    <input type="checkbox" className="form-checkbox h-4 w-4 self-center rounded-md bg-transparent mr-1 " />
                                        <span className="text-xs">Lock Liquidity, <a href="#e" className="isLink">Learn more</a></span>
                                    </div>
                                    <div className="flex justify-center align-center h-5">
                                        <span className="text-tertiary text-xs">Add as a developer</span>
                                        <div className="relative inline-block w-10 ml-2 align-middle select-none transition duration-200 ease-in">
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
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, maxime labore, repellendus incidunt nesciunt veniam quis voluptatibus praesentium, tenetur similique repellat voluptate alias autem iure et! Facilis distinctio cumque voluptatem!
                                </p>
                            </div>
                            <div className="mt-8 bg-primary w-full rounded-md p-2 flex flex-col items-center justify-center">
                                <div className="bg-tertiary w-5/6 flex justify-between rounded-md p-2">
                                    <p className="">Social Links</p>
                                    {/* <img src="/assets/icons/arrow-down.svg" alt="arrow-down" /> */}
                                    <img src="/assets/icons/arrow-up.svg" alt="arrow-up" />
                                </div>
                                <div className="flex flex-col justify-center items-center w-5/6 p-3 rounded-lg mt-2 bg-tertiary border border-solid border-gray">
                                    <p className="text-tertiary">Website <a href="#website" className="isLink">www.clever.i0</a></p>
                                    <p className="text-tertiary">Social Link 1 <a href="#social1" className="isLink"> https://t.me/c/1234456780528/411</a></p>
                                    <p className="text-tertiary">Social Link 2 <a href="#social2" className="isLink"> https://twitter/c/1234456780528/411</a></p>
                                </div>
                            </div>
                        </div>
        </>
    )
}

export default Left
