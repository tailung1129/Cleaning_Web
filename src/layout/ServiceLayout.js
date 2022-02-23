// components
import React from "react";
import ServiceHeader from "../components/Headers/ServiceHeader";


const ServiceLayout = ({ children }) => {
  return (
    <div>
      <ServiceHeader />
      <main>{children}</main>
    </div>
  );
};

export default ServiceLayout;
