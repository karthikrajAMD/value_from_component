import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Context } from "./Context";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

function Drawer() {
  const [context, setContext] = useContext(Context);
  const [show, setShow] = useState("block");
  console.log(context);
  const style1 = {
    display: show,
  };
  const style = {
    display: context,
  };
  const [desktop, setDesktop] = useState(window.innerWidth >= 768);
  const update = () => {
    setDesktop(window.innerWidth >= 768);
  };
  useEffect(() => {
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  });
  return (
    <>
      {desktop ? (
        <div className="sidebar" style={style1}>
          <div className="sb-head">
            <i className="fas fa-2x fa-laugh-wink "></i>
            <p className="sb pt-4 ">
              SB ADMIN <sup>2</sup>
            </p>
          </div>
          <hr className="divider" />
          <div className="sidebar-content">
            <div className="dash">
              <i className="fas fa-tachometer-alt sideicon"></i>
              {/* <p >Dashboard</p> */}
              <Link className="main-menu dashboard " to="/">
                Dashboard
              </Link>
            </div>

            <hr className="divider" />
            <div className="interface">
              <p className="inter">INTERFACE</p>
              <div className="menu-item">
                <i className="fa-sharp fa-solid fa-gear sideicon"></i>
                <Link className="main-menu m-0" to="/">
                  Components
                </Link>
              </div>
              <div className="menu-item">
                <i className="fa-solid fa-wrench sideicon"></i>
                <Link className="main-menu" to="/Card">
                  Utilities
                </Link>
              </div>
              <div className="menu-item">
                <BarChartIcon className="sideicon" />
                <Link className="main-menu" to="/chart">
                  Chart
                </Link>
              </div>
            </div>
            <hr className="divider" />
          </div>
        </div>
      ) : (
        <>
          <div className="sidebar-mini" style={style}>
            <i className="fas fa-3x fa-laugh-wink"></i>
            <hr className="divider-mini" />
            <div className="sidebar-content">
              <div className="side-menu">
                <i className="fas fa-tachometer-alt sideicon-mini"></i>

                <Link className="mini-font dashboard " to="/">
                  Dashboard
                </Link>
              </div>

              <hr className="divider-mini" />
              <div className="interface">
                <p className="inter">INTERFACE</p>
                <div className="side-menu">
                  <i className="fa-sharp fa-solid fa-gear sideicon-mini"></i>

                  <Link className="mini-font m-0" to="/">
                    Components
                  </Link>
                </div>
                <div className="side-menu">
                  <i className="fa-solid fa-wrench sideicon-mini"></i>
                  <Link className="mini-font" to="/Card">
                    Utilities
                  </Link>
                </div>
                <div className="side-menu">
                  <BarChartIcon className="sideicon-mini" />
                  <Link className="mini-font" to="/chart">
                    Chart
                  </Link>
                </div>
              </div>
              <hr className="divider-mini" />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Drawer;
