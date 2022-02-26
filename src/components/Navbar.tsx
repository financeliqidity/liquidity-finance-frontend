import { useRouter } from "next/router";
import Link from "next/link";

const Navbar: React.FC<NavbarProps> = () => {
  const router = useRouter();

  return (
    <div className="px-4 md:px-0">
      <nav className="md:mt-12 mt-20 py-8 md:px-9 px-4 flex text-white bg-grey_70 md:w-11/12 md:mx-auto border border-solid border-grey_50 rounded-xl">
        <div className="w-full grid grid-cols-4 md:grid-cols-7 grid-rows-2 md:grid-rows-1 gap-3">
          <Link href="/dex">
            <div
              className={
                "flex items-center justify-center text-center rounded-lg py-5  uppercase font-bold cursor-pointer " +
                (router.pathname.indexOf("/dex") !== -1
                  ? "btn-primary text-3xl"
                  : "bg-blue_grey")
              }
            >
              DEX
            </div>
          </Link>

          <Link href="/earn">
            <div
              className={
                "flex items-center justify-center text-center rounded-lg py-5 uppercase font-bold cursor-pointer " +
                (router.pathname.indexOf("/earn") !== -1
                  ? "btn-primary text-3xl"
                  : "bg-blue_grey")
              }
            >
              EARN
            </div>
          </Link>

          <div
            className={
              "flex items-center justify-center text-center rounded-lg py-5 uppercase font-bold cursor-pointer " +
              (router.pathname.indexOf("/metaverse") !== -1
                ? "btn-primary text-3xl"
                : "bg-blue_grey")
            }
          >
            METAVERSE
          </div>

          <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold flex items-center justify-center">
            VOTE
          </div>
          <Link href="/iso">
            <div
              className={
                "flex items-center justify-center text-center rounded-lg py-5 uppercase font-bold cursor-pointer " +
                (router.pathname.indexOf("/iso") !== -1
                  ? "btn-primary text-3xl"
                  : "bg-blue_grey")
              }
            >
              IDO
            </div>
          </Link>
          <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold flex items-center justify-center">
            NFT
          </div>
          <div className="text-center rounded-lg py-5 bg-blue_grey uppercase font-bold flex items-center justify-center">
            FAVORITE
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

interface NavbarProps {
  isDarkMode?: boolean;
}
