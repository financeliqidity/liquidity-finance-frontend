import styles from "./styles/index.module.css";

const Buy = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.96038 1.76176L6.53844 1.1837C6.78321 0.938931 7.179 0.938931 7.42116 1.1837L12.4831 6.24303C12.7279 6.48779 12.7279 6.88358 12.4831 7.12574L7.42116 12.1877C7.17639 12.4324 6.78061 12.4324 6.53844 12.1877L5.96038 11.6096C5.71302 11.3622 5.71822 10.9586 5.9708 10.7165L9.10847 7.72724H1.62493C1.27861 7.72724 1 7.44862 1 7.10231V6.26907C1 5.92275 1.27861 5.64414 1.62493 5.64414H9.10847L5.9708 2.65489C5.71562 2.41272 5.71041 2.00912 5.96038 1.76176Z"
      fill="#45C581"
    />
  </svg>
);

const Sell = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.87297 11.9241L7.29491 12.5021C7.05015 12.7469 6.65436 12.7469 6.4122 12.5021L1.35026 7.4428C1.1055 7.19803 1.1055 6.80224 1.35026 6.56008L6.4122 1.49815C6.65696 1.25338 7.05275 1.25338 7.29491 1.49815L7.87297 2.07621C8.12034 2.32358 8.11513 2.72718 7.86255 2.96934L4.72488 5.95859H12.2084C12.5547 5.95859 12.8334 6.2372 12.8334 6.58352V7.41676C12.8334 7.76307 12.5547 8.04169 12.2084 8.04169H4.72488L7.86255 11.0309C8.11773 11.2731 8.12294 11.6767 7.87297 11.9241Z"
      fill="#F84239"
    />
  </svg>
);

const HashIn = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33329 1.66679H11.1783L6.70829 6.13676L7.8868 7.31527L12.3333 2.86878V6.66679H14V0.00012207H7.33329V1.66679ZM6.49996 3.33346H2.33329C1.41282 3.33346 0.666626 4.07965 0.666626 5.00012V11.6668C0.666626 12.5873 1.41282 13.3335 2.33329 13.3335H8.99996C9.92043 13.3335 10.6666 12.5873 10.6666 11.6668V7.50012H8.99996V11.6668H2.33329V5.00012H6.49996V3.33346Z"
      fill="#45C581"
    />
  </svg>
);

const HashOut = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 14 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33327 11.6668L3.48831 11.6668L7.95827 7.1968L6.77976 6.01829L2.33327 10.4648V6.66677H0.666607V13.3334L7.33327 13.3334V11.6668ZM8.16661 10.0001H12.3333C13.2537 10.0001 13.9999 9.25391 13.9999 8.33344L13.9999 1.66677C13.9999 0.746294 13.2537 0.000102997 12.3333 0.000102997L5.66661 0.000102997C4.74613 0.000102997 3.99994 0.746294 3.99994 1.66677V5.83344H5.66661V1.66677L12.3333 1.66677L12.3333 8.33344H8.16661V10.0001Z"
      fill="#F84239"
    />
  </svg>
);

export default function index() {
  return (
    <div
      className={`trading-history py-6 md:py-12 px-6 md:px-8 bg-grey_70 ${styles.trading_history}`}
    >
      <div className="table-head bg-dark_grey text-center rounded-lg mb-6">
        <h2 className="text-xl text-white py-8 font-bold">Trading History</h2>
      </div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div
              className="
        shadow
        overflow-hidden
        sm:rounded-lg px-8 bg-blue_grey py-9
      "
            >
              <table className="min-w-full">
                <thead className="">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-semibold grey-10 tracking-wider"
                    >
                      Swap
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-semibold grey-10 tracking-wider"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-semibold grey-10 tracking-wider"
                    >
                      Time
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-lg font-semibold grey-10 tracking-wider flex justify-end"
                    >
                      Trx.Hash
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-transparent">
                  <tr className="py-2 px-3 bg-grey_70 rounded-lg">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-semibold mr-0.5">
                          BNB
                        </span>
                        <Buy />
                        <span className="text-sm font-semibold ml-0.5">
                          LFI
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">1BNB</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">10:30pm</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-end">
                      <span className="text-sm font-semibold mr-0.5">
                        0xf71
                      </span>
                      <HashIn />
                    </td>
                  </tr>
                  <tr className="py-2 px-3 rounded-lg">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-semibold mr-0.5">
                          BNB
                        </span>
                        <Sell />
                        <span className="text-sm font-semibold ml-0.5">
                          LFI
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">1BNB</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">10:30pm</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-end">
                      <span className="text-sm font-semibold mr-0.5">
                        0xf71
                      </span>
                      <HashOut />
                    </td>
                  </tr>
                  <tr className="py-2 px-3 bg-grey_70 rounded-lg">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-sm font-semibold mr-0.5">
                          BNB
                        </span>
                        <Buy />
                        <span className="text-sm font-semibold ml-0.5">
                          LFI
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">1BNB</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-semibold">10:30pm</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-end">
                      <span className="text-sm font-semibold mr-0.5">
                        0xf71
                      </span>
                      <HashIn />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
