// components
import React from "react";
import LoginHeader from "../components/Headers/LoginHeader";
import Footer from "../components/Footer";

const LoginLayout = ({ children }) => {
  return (
    <div>
      <LoginHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default LoginLayout;