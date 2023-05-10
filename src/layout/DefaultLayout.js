import React from "react";
import Navbar from "../components/Navbar";

const DefaultLayout = ({ children }) => {
  return (
    <>
      <div className="overflow-x-hidden min-h-screen">
        <Navbar />
        <div className="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultLayout;
