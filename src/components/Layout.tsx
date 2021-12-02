import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const Layout: React.FC<any> = ({ children }) => {
<<<<<<< HEAD
    return (
        <div className="flex justify-center align-start">
           <Header />
           { children }
        </div>
    )
}
=======
  return (
    <>
      <div className="bg-dark_grey min-h-screen">
        <div className="py-8">
          <Header />
          <Navbar />
        </div>
        {children}
      </div>
    </>
  );
};
>>>>>>> 112b5524b2d0acee824b38e61cb0e6f91e8ab049

export default Layout;
