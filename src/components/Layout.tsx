import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout: React.FC<any> = ({ children }) => {
  return (
    <>
      <div className="bg-dark_grey min-h-screen" style={{ zoom: "88%" }}>
        <div className="py-8">
          <Header />
          <Navbar />
        </div>
        {children}
      </div>
    </>
  );
};

export default Layout;
