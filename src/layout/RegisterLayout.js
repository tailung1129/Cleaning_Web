// components
import React from "react";
import HomeHeader from "../components/Headers/HomeHeader";
import Footer from "../components/Footer";
import HomeMenu from "../components/Menus/HomeMenu";

const Layout = ({ children }) => {
  return (
    <div>
      <HomeHeader />
      <HomeMenu />
      <main >{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;