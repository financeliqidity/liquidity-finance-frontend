import React from "react";

const RefreshIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.778 14.766L18.5987 17.9454C18.3027 18.2413 17.8229 18.2413 17.5269 17.9454L14.3475 14.766C14.0516 14.47 14.0516 13.9902 14.3475 13.6943L14.6893 13.3525C14.9912 13.0506 15.4829 13.0576 15.7761 13.368L17.0523 14.7193V8.96854H11.1301C10.9291 8.96853 10.7363 8.8887 10.5942 8.74659L10.089 8.24136C9.61155 7.76391 9.94968 6.94762 10.6249 6.94762H18.3154C18.7339 6.94762 19.0732 7.28691 19.0732 7.70547V14.7193L20.3494 13.368C20.6426 13.0576 21.1343 13.0506 21.4363 13.3525L21.7781 13.6943C22.074 13.9902 22.074 14.4701 21.778 14.766ZM13.4058 15.2533C13.3354 15.1829 13.2519 15.1271 13.1599 15.089C13.068 15.0509 12.9694 15.0313 12.8699 15.0313H6.94769V9.28056L8.2239 10.6318C8.51713 10.9422 9.00878 10.9493 9.31075 10.6473L9.65247 10.3056C9.94844 10.0096 9.94844 9.52976 9.65247 9.23382L6.47312 6.0545C6.17715 5.75853 5.6973 5.75853 5.40137 6.0545L2.22198 9.23385C1.92601 9.52982 1.92601 10.0097 2.22198 10.3056L2.5637 10.6473C2.86564 10.9493 3.35733 10.9423 3.65055 10.6318L4.92676 9.28056V16.2944C4.92676 16.7129 5.26606 17.0522 5.68461 17.0522H13.3751C14.0503 17.0522 14.3884 16.2359 13.911 15.7585L13.4058 15.2533Z"
      fill="#B7BECB"
    />
  </svg>
);
const ConfigIcon = () => (
  <svg
    width="35"
    height="35"
    viewBox="0 0 35 35"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M31.1722 24.7916H12.0316V23.8801C12.0316 23.3788 11.6214 22.9687 11.1201 22.9687H9.2972C8.7959 22.9687 8.38574 23.3788 8.38574 23.8801V24.7916H3.82845C3.32715 24.7916 2.91699 25.2017 2.91699 25.703V27.526C2.91699 28.0273 3.32715 28.4374 3.82845 28.4374H8.38574V29.3489C8.38574 29.8502 8.7959 30.2603 9.2972 30.2603H11.1201C11.6214 30.2603 12.0316 29.8502 12.0316 29.3489V28.4374H31.1722C31.6735 28.4374 32.0837 28.0273 32.0837 27.526V25.703C32.0837 25.2017 31.6735 24.7916 31.1722 24.7916ZM31.1722 15.677H26.6149V14.7655C26.6149 14.2642 26.2048 13.8541 25.7035 13.8541H23.8805C23.3792 13.8541 22.9691 14.2642 22.9691 14.7655V15.677H3.82845C3.32715 15.677 2.91699 16.0872 2.91699 16.5885V18.4114C2.91699 18.9127 3.32715 19.3228 3.82845 19.3228H22.9691V20.2343C22.9691 20.7356 23.3792 21.1458 23.8805 21.1458H25.7035C26.2048 21.1458 26.6149 20.7356 26.6149 20.2343V19.3228H31.1722C31.6735 19.3228 32.0837 18.9127 32.0837 18.4114V16.5885C32.0837 16.0872 31.6735 15.677 31.1722 15.677ZM31.1722 6.56242H19.3232V5.65096C19.3232 5.14966 18.9131 4.7395 18.4118 4.7395H16.5889C16.0876 4.7395 15.6774 5.14966 15.6774 5.65096V6.56242H3.82845C3.32715 6.56242 2.91699 6.97257 2.91699 7.47388V9.29679C2.91699 9.7981 3.32715 10.2083 3.82845 10.2083H15.6774V11.1197C15.6774 11.621 16.0876 12.0312 16.5889 12.0312H18.4118C18.9131 12.0312 19.3232 11.621 19.3232 11.1197V10.2083H31.1722C31.6735 10.2083 32.0837 9.7981 32.0837 9.29679V7.47388C32.0837 6.97257 31.6735 6.56242 31.1722 6.56242Z"
      fill="#B7BECB"
    />
  </svg>
);

export default function PoolDetailsRight() {
  return (
    <div className="md:w-7/12 w-full bg-blue_grey rounded-2xl border border-grey_50 py-8 md:px-8 px-4">
      <h2 className="text-base font-bold">
        <span className="text-primary mr-1">Create a Pool for free</span> /
        0x45ef2...ae21
      </h2>
      <div className="mt-8">
        <div className="flex relative z-10">
          <span
            className={`pb-5 font-bold mr-4 md:mr-8 cursor-pointer ${"border-primary border-b-2 text-primary border-solid"}`}
          >
            Line Chart
          </span>
          <span className={`pb-5 font-bold cursor-pointer mr-4 md:mr-8`}>
            Volume
          </span>
          <span className={`pb-5 font-bold cursor-pointer mr-4 md:mr-8`}>
            Fee Returns
          </span>
          <span className={`pb-5 font-bold cursor-pointer`}>Traders</span>
        </div>
        <hr
          className="relative z-0 mb-3"
          style={{
            backgroundColor: "#B7BECB",
            marginTop: "-1px",
            height: "1.5px",
          }}
        />
      </div>
      <div className="mt-10">
        <div className="flex justify-between items-center">
          <div className="flex">
            <div className="flex">
              <img
                src="/assets/images/BTC_logo.png"
                alt="..."
                className="w-9 h-9 rounded-full"
              ></img>
              <img
                src="/assets/images/USDT_logo.png"
                alt="..."
                className="w-9 h-9 rounded-full -ml-4 max-w-none"
              ></img>
            </div>
            <div className="ml-6">
              <span className="block font-bold mb-2.5">BTC - USDT LP</span>
              <p className="flex items-center">
                <span className="text-sm mr-4">1BTC = $50,000 USDT</span>
                <RefreshIcon />
              </p>
            </div>
          </div>
          <button className="p-3 bg-grey_50 rounded-lg">
            <ConfigIcon />
          </button>
        </div>
      </div>
      <div className="mt-10">
        <img src="/assets/images/chart.png" alt="..." className="w-full" />
      </div>
    </div>
  );
}
