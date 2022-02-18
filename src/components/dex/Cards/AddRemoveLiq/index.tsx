import React, { useState } from "react";
import Barcode from "../../Modals/Barcode";
import AddTrxnSuccess from "../../Modals/AddTrxnSuccess";
import classes from "./styles/index.module.css";
import RemoveTrxnSuccess from "../../Modals/RemovTrxnSuccess";
import SelectPair from "../../Modals/SelectPair";
import LockLiquidity from "../../Modals/LockLiquidity";

function AddRemoveLiq({ setActiveLeft }) {
  const AddLiquidity = ({
    handleAddLiquidity,
    showModal,
    setShowModal,
    showSuccessModal,
    setShowSuccessModal,
  }) => {
    const [showPair, setShowPair] = useState(false);
    const [openMore, setOpenMore] = useState(false);

    const [showLockModal, setShowLockModal] = useState(false);

    return (
      <>
        {showLockModal && (
          <LockLiquidity
            showModal={showLockModal}
            setShowModal={setShowLockModal}
            showSuccessModal={showSuccessModal}
            setShowSuccessModal={setShowSuccessModal}
          />
        )}
        <>
          <div className="flex flex-col mt-8 w-full">
            <div className="self-end text-tertiary">
              Available:<span>5000</span>
            </div>
            <div className="flex w-full justify-between items-center border rounded-md p-3">
              <SelectPair
                setPair={(pair) => console.log(pair)}
                content={
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowModal(true)}
                  >
                    <img src="/assets/icons/usdt.png" alt="USDC" />
                    <span className="mx-3">USDC</span>
                    <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                  </div>
                }
                showModal={showModal}
                setShowModal={setShowModal}
              />

              <span className="font-bold text-base">5000</span>
            </div>
            <div className="flex justify-between mt-3">
              <button className="w-23/100 text-center">
                <div className="w-full h-5 btn-primary mb-2"></div>
                <p className="text-lg text-primary">25%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 btn-primary mb-2"></div>
                <p className="text-lg text-primary">50%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 bg-grey_70 mb-2"></div>
                <p className="text-lg text-grey_20">75%</p>
              </button>
              <button className="w-23/100 text-center">
                <div className="w-full h-5 bg-grey_70 mb-2"></div>
                <p className="text-lg text-grey_20">100%</p>
              </button>
            </div>
          </div>
          <div className="w-full flex justify-center my-5">
            <img className="" src="/assets/icons/plus.svg" alt="Plus" />
          </div>
          <div className="flex flex-col w-full">
            <div className="self-end text-tertiary">
              Available:<span>5000</span>
            </div>
            <div className="flex w-full justify-between items-center border rounded-md p-3">
              <SelectPair
                setPair={(pair) => console.log(pair)}
                content={
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setShowPair(true)}
                  >
                    <img src="/assets/icons/eth.png" alt="ETH" />
                    <span className="mx-3">USDC</span>
                    <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                  </div>
                }
                showModal={showPair}
                setShowModal={setShowPair}
              />

              <span className="font-bold text-base">5000</span>
            </div>
          </div>
          <div className="mt-4 relative">
            <span className="block text-sm mb-2">Set LP fee charge</span>
            <input
              type="text"
              className="py-2 px-4 rounded-lg border border-grey_20 w-full bg-transparent text-xs"
            />
          </div>
          <>
            <div className="mt-5 text-tertiary text-base flex">
              <p className="inline w-2/3">Support single-token supply</p>
              <button
                className="inline w-1/3 text-right pr-2"
                onClick={() => setOpenMore(!openMore)}
              >
                {openMore ? (
                  <>
                    less
                    <img
                      className="inline ml-2"
                      src="/assets/icons/arrow-up.svg"
                      alt="drop-down-icon"
                    />
                  </>
                ) : (
                  <>
                    more
                    <img
                      className="inline ml-2"
                      src="/assets/icons/arrow-down.svg"
                      alt="drop-down-icon"
                    />
                  </>
                )}
              </button>
            </div>
            {openMore && (
              <div className="py-3">
                <p className="text-tertiary mb-1">My Liquidity (share 3.23%)</p>
                <p className="">1000 ETH / 561,2345345 USDC</p>
              </div>
            )}
          </>
          <button
            className="btn-primary w-full p-3 mt-5 rounded-md font-bold"
            onClick={() => setShowLockModal(true)}
          >
            Add liquidity
          </button>
        </>
      </>
    );
  };

  const RemoveLiquid = ({ handleRemoveLiquidity }) => {
    const [showPair, setShowPair] = useState(false);
    return (
      <>
        <div className="flex flex-col mt-8 w-full">
          <div className="self-end text-tertiary">
            Available:<span>5000</span>
          </div>
          <div className="flex w-full justify-between items-center border rounded-md p-3">
            <SelectPair
              setPair={(pair) => console.log(pair)}
              content={
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setShowPair(true)}
                >
                  <img src="/assets/icons/usdt.png" alt="USDC" />
                  <span className="mx-3">USDC</span>
                  <img src="/assets/icons/arrow-down.svg" alt="pop-up" />
                </div>
              }
              showModal={showPair}
              setShowModal={setShowPair}
            />
            <span className="font-bold text-base">5000</span>
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
        <button
          className="btn-primary w-full p-3 mt-5 rounded-md font-bold"
          onClick={() => handleRemoveLiquidity()}
        >
          Remove liquidity
        </button>
        <div className="bg-tertiary p-5 mt-3 rounded-b-lg">
          <p className="text-tertiary text-sm">
            Tokens can be redeemed by removing liquidity. The number of redeemed
            tokens may change due to price fluctuations.
          </p>
        </div>
      </>
    );
  };

  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showSuccessModalRem, setShowSuccessModalRem] = useState(false);
  const [showPairModal, setShowPairModal] = useState(false);

  const handleAddLiquidity = () => setShowSuccessModal(true);
  const handleRemoveLiquidity = () => setShowSuccessModalRem(true);

  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      {showSuccessModal && (
        <AddTrxnSuccess
          showModal={showSuccessModal}
          setShowModal={setShowSuccessModal}
        />
      )}
      {showSuccessModalRem && (
        <RemoveTrxnSuccess
          showModal={showSuccessModalRem}
          setShowModal={setShowSuccessModalRem}
        />
      )}

      <div
        className={`${classes.add_remove} bg-blue_grey px-4 py-3 md:px-8 md:py-12 border-2 border-solid border-grey_50 rounded-lg`}
      >
        <div className="mt-5 flex justify-between items-center">
          <button className="" onClick={() => setActiveLeft("home")}>
            <img src="/assets/icons/arrow-back.svg" alt="back" />
          </button>
          <Barcode
            content={
              <button onClick={() => setShowModal(true)}>
                <img src="/assets/icons/extract.svg" alt="extract" />
              </button>
            }
            showModal={showModal}
            setShowModal={setShowModal}
          />
        </div>
        <div className="w-full flex mt-8 justify-between bg-grey_50 rounded-r-lg">
          <button
            className={`md:py-5 py-3 w-1/2 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base ${
              activeTab === 0 ? "btn-primary" : "bg-grey_50"
            }`}
            onClick={() => setActiveTab(0)}
          >
            Add
          </button>
          <button
            className={`md:py-5 py-3 w-1/2 border-primary border-r border-solid rounded-r-lg font-bold md:text-xl text-base ${
              activeTab === 1 ? "btn-primary" : "bg-grey_50"
            }`}
            onClick={() => setActiveTab(1)}
          >
            Remove
          </button>
        </div>
        <>
          {activeTab === 0 ? (
            <AddLiquidity
              handleAddLiquidity={handleAddLiquidity}
              showModal={showPairModal}
              setShowModal={setShowPairModal}
              showSuccessModal={showSuccessModal}
              setShowSuccessModal={setShowSuccessModal}
            />
          ) : (
            <RemoveLiquid handleRemoveLiquidity={handleRemoveLiquidity} />
          )}
        </>
      </div>
    </>
  );
}
export default AddRemoveLiq;
