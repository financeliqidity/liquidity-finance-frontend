import React from 'react'

function ManageLiquidity() {

    const addLiquidity = () => (
        <>
            <div className="flex flex-col mt-8 w-full">
                <div className="self-end text-tertiary">Available:<span>5000</span></div>
                <div className="flex w-full justify-start  border rounded-md p-3">
                    <img src="/assets/icons/usdt.png" alt="USDC" />
                    <span className="mx-3">USDC</span>
                    <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                    <span className="justify-self-center ml-80">5000</span>
                </div>
            </div>
            <div className="w-full flex justify-center my-5">
                <img className="" src="/assets/icons/plus.svg" alt="Plus" />
            </div>
            <div className="flex flex-col w-full">
                <div className="self-end text-tertiary">Available:<span>5000</span></div>
                <div className="flex w-full justify-start  border rounded-md p-3">
                    <img src="/assets/icons/eth.png" alt="ETH" />
                    <span className="mx-3">ETH</span>
                    <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                    <span className="justify-self-center ml-80">5000</span>
                </div>
            </div>
            <>
                <div className="mt-5 text-tertiary text-base flex">
                    <p className="inline w-2/3">Support single-token supply</p>
                    <button className="inline w-1/3">more 
                    {/* <img className="inline ml-2" src="/assets/icons/arrow-down.svg" alt="drop-down-icon" /> */}
                    <img className="inline ml-2" src="/assets/icons/arrow-up.svg" alt="drop-down-icon" />
                    </button>
                </div>
                <div className="py-3">
                    <p className="text-tertiary mb-1">My Liquidity (share 3.23%)</p>
                    <p className="">1000 ETH / 561,2345345 USDC</p>
                </div>
            </>
            <button className="btn-primary w-full p-3 mt-5 rounded-md">
                Enter Amount
            </button>
        </>
    )

    const removeLiquid = () => (
        <>
            <div className="flex flex-col mt-8 w-full">
                <div className="self-end text-tertiary">Available:<span>5000</span></div>
                <div className="flex w-full justify-start  border rounded-md p-3">
                    <img src="/assets/icons/usdt.png" alt="USDC" />
                    <span className="mx-3">USDC</span>
                    <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                    <span className="justify-self-center ml-80">5000</span>
                </div>
            </div>
            <div className="flex flex-col mt-8">
                <p className="text-tertiary mb-1">Pool</p>
                <div className="flex">
                    <span className="">0x6c1..ee21</span>
                    <img src="/assets/icons/extract.svg" alt="extract-icon" />
                </div>
                <p className="my-1 text-tertiary">Total Liquidity</p>
                <p className="">7000 ETH / 861,223.4345 USDC</p>
            </div>
            <button className="btn-primary w-full p-3 mt-5 rounded-md">
                Enter Amount
            </button>
            <div className="bg-tertiary p-5 mt-3 rounded-b-lg">
                <p className="w-3/4 text-tertiary">
                Tokens can be redeemed by removing liquidity.
                The number of redeemed tokens may change due
                to price fluctuations.
                </p>
            </div>
        </>
    )
    return (
        <div className="left w-full md:w-12/25 bg-blue_grey px-4 py-3 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg">
            <div className="mt-5 flex justify-between items-center">
                <button className="">
                    <img src="/assets/icons/arrow-back.svg" alt="back" />
                </button>
                <button className="">
                    <img src="/assets/icons/extract.svg" alt="extract" />
                </button>
            </div>
            <div className="w-full flex mt-8 justify-between bg-grey_50 rounded-r-lg">
                <button className="md:py-5 py-3 w-1/2 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base btn-primary">
                                Add
                </button>
                <button className="md:py-5 py-3 w-1/2 bg-grey_50 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base">
                                Remove
                </button>
            </div>
            { addLiquidity() }
        </div>
    )
}

export default ManageLiquidity
