import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div
        style={{ width: "100%", backgroundColor: "darkgray", padding: "5px" }}
      >
        <h1 className="m-2">Todo App</h1>
        <Navbar />
      </div>
      {children}
    </>
  );
};

export default Layout;
