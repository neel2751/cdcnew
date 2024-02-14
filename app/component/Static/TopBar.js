import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Header/navbar";
import { SubMenu } from "../Header/submenu";

const TopBar = ({ children }) => {
  return (
    <>
      <SubMenu>
        <Navbar />
      </SubMenu>
      <div className="">{children}</div>;
      <Footer />
    </>
  );
};

export default TopBar;
