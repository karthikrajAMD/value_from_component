import React, { useContext, useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import { Context } from "./Context";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === "light"
        ? "rgb(55, 65, 81)"
        : theme.palette.grey[300],
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

function Drawer() {
  const [context, setContext] = useContext(Context);
  const [show, setShow] = useState("block");
  console.log(context);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
              {/* <p >Dashboard</p> */}
              <Link className="main-menu dashboard " to="/">
                <i className="fas fa-tachometer-alt sideicon"></i>
                Dashboard
              </Link>
            </div>

            <hr className="divider" />
            <div className="interface">
              <p className="inter">INTERFACE</p>
              <div className="menu-item">
                <Button
                  className="component_button "
                  to="/"
                  color="inherit"
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                >
                  <i className="fa-sharp fa-solid fa-gear sideicon"></i>
                  Components
                </Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <Link
                    onClick={handleClose}
                    disableRipple
                    to="/profile"
                    className="link"
                  >
                    <FileCopyIcon />
                    Profile
                  </Link>
                </StyledMenu>
              </div>
              <div className="menu-item">
                <Link className="main-menu" to="/facts">
                  <i className="fa-solid fa-wrench sideicon"></i>
                  Facts
                </Link>
              </div>
              <div className="menu-item">
                <Link className="main-menu" to="/chart">
                  <BarChartIcon className="sideicon" />
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
                <Link className="mini-font dashboard " to="/">
                  <i className="fas fa-tachometer-alt sideicon-mini"></i>
                  Dashboard
                </Link>
              </div>

              <hr className="divider-mini" />
              <div className="interface">
                <p className="inter">INTERFACE</p>
                <div className="side-menu">
                  <div
                    className="mini-font mini-comp m-0"
                    color="inherit"
                    onClick={handleClick}
                  >
                    <i className="fa-sharp fa-solid fa-gear sideicon-mini"></i>
                    Components
                    <KeyboardArrowDownIcon />
                  </div>
                  <StyledMenu
                    id="demo-customized-menu"
                    MenuListProps={{
                      "aria-labelledby": "demo-customized-button",
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                  >
                    <Link
                      onClick={handleClose}
                      disableRipple
                      to="/profile"
                      className="link"
                    >
                      <FileCopyIcon />
                      Profile
                    </Link>
                  </StyledMenu>
                </div>
                <div className="side-menu">
                  <Link className="mini-font" to="/facts">
                    <i className="fa-solid fa-wrench sideicon-mini"></i>
                    Facts
                  </Link>
                </div>
                <div className="side-menu">
                  <Link className="mini-font" to="/chart">
                    <BarChartIcon className="sideicon-mini" />
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
