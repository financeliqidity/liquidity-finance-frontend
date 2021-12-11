import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <nav className="md:mt-12 mt-16 py-8 md:px-9 px-4 flex text-white bg-grey_70 md:w-11/12 md:mx-auto border border-solid border-grey_50 rounded-xl">
      <div className="flex items-center justify-between w-full overflow-x-scroll md:overflow-auto md:w-full">
        <Link href="/dex">
          <div
            className={
              "rounded-lg mr-3 py-5 px-10  uppercase font-bold cursor-pointer " +
              (router.pathname.indexOf("/dex") !== -1
                ? "btn-primary"
                : "bg-blue_grey")
            }
          >
            DEX
          </div>
        </Link>

        <Link href="/pool">
          <div
            className={
              "rounded-lg mr-3 py-5 px-10 uppercase font-bold cursor-pointer " +
              (router.pathname.indexOf("/pool") !== -1
                ? "btn-primary"
                : "bg-blue_grey")
            }
          >
            POOL
          </div>
        </Link>

        <div className="rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          FARM
        </div>
        <div className="rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          VOTE
        </div>
        <div className="rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          ISO
        </div>
        <div className="rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          NFT
        </div>
        <div className="rounded-lg mr-0 py-5 px-10 bg-blue_grey uppercase font-bold">
          FAVORITE
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

interface NavbarProps {
  isDarkMode?: boolean;
}
