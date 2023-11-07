import React from "react";
import { Outlet } from "react-router-dom";
import * as MC from "../style/StyledEle.js";
import Navbar from "./Navbar.jsx";
import Sidebar from "./Sidebar.jsx";

const MainContainer = ({ profileInfoOpen }) => {
  return (
    <>
      <MC.MainContainer className="maincontainer">
        {!profileInfoOpen && <Sidebar />}
        {/* <Sidebar /> */}
        <MC.InnerContainer className="mcinner">
          <Navbar />
          <MC.OutletPages className="mcouter">
            <Outlet />
          </MC.OutletPages>
        </MC.InnerContainer>
      </MC.MainContainer>
    </>
  );
};

export default MainContainer;
