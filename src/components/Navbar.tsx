interface NavbarProps {
  isDarkMode?: boolean;
}

const Navbar: React.FC<NavbarProps> = () => {
  return (
    <nav className="py-8 md:px-9 px-4 flex justify-center text-white mt-12 bg-grey_70 md:w-11/12 md:mx-auto">
      <div className="container flex items-center justify-between w-full overflow-x-scroll md:overflow-auto">
        <div className="btn-primary rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          DEX
        </div>
        <div className="rounded-lg mr-3 py-5 px-10 bg-blue_grey uppercase font-bold">
          POOL
        </div>
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
