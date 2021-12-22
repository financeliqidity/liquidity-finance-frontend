import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <nav className="md:mt-12 mt-16 py-8 md:px-9 px-4 flex text-white bg-grey_70 md:w-11/12 md:mx-auto border border-solid border-grey_50 rounded-xl">
      <div className="w-full grid grid-cols-4 md:grid-cols-7 grid-rows-2 md:grid-rows-1 gap-3">
        <Link href="/dex">
          <div
            className={
              "text-center rounded-lg py-5  uppercase font-bold cursor-pointer " +
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
              "text-center rounded-lg py-5 uppercase font-bold cursor-pointer " +
              (router.pathname.indexOf("/pool") !== -1
                ? "btn-primary"
                : "bg-blue_grey")
            }
          >
            POOL
          </div>
        </Link>

        <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold">
          FARM
        </div>
        <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold">
          VOTE
        </div>
        <Link href="/iso">
          <div
            className={
              "text-center rounded-lg py-5 uppercase font-bold cursor-pointer " +
              (router.pathname.indexOf("/iso") !== -1
                ? "btn-primary"
                : "bg-blue_grey")
            }
          >
            ISO
          </div>
        </Link>
        <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold">
          NFT
        </div>
        <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold">
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
