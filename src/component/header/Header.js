import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import {
  faEnvelope,
  faChartPie,
  faUser,
  faMicrochip,
  faBell,
  faFileContract,
  faFileCircleCheck,
  faMapLocationDot,
  faBuilding,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import { getUser } from "../../services/axios";
import {
  LOG_OUT,
  SWITCH_MENU_VISIBLE,
  SWITCH_SIDEBAR_VISIBLE,
  TOGGLE_MAP_MODE,
} from "../../redux/store/types.js";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Header.css";

const tabs = [
  {
    to: "/Dashboard",
    icon: faChartPie,
    label: "Dashboard",
    onlyAdmin: false,
  },
  {
    to: "/Users",
    icon: faUser,
    label: "Users",
    onlyAdmin: true,
  },
  {
    to: "/Devices",
    icon: faMicrochip,
    label: "Devices",
    onlyAdmin: false,
  },
  {
    to: "/Alerts",
    icon: faBell,
    label: "Alerts",
    onlyAdmin: false,
  },
  {
    to: "/Reports",
    icon: faFileContract,
    label: "Reports",
    onlyAdmin: false,
  },
  {
    to: "/Rules",
    icon: faFileCircleCheck,
    label: "Rules",
    onlyAdmin: false,
  },
  {
    to: "/Geofance",
    icon: faMapLocationDot,
    label: "Geofence",
    onlyAdmin: false,
  },
  {
    to: "/Company",
    icon: faBuilding,
    label: "Company",
    onlyAdmin: false,
  },
  {
    to: "/Ticket",
    icon: faTriangleExclamation,
    label: "Tickets",
    onlyAdmin: false,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const showMenu = useSelector((state) => state.global.showMenu);
  const mapMode = useSelector((state) => state.global.mapMode);

  const [anchorEl, setAnchorEl] = useState();
  const [anchorMapSelectEl, setAnchorMapSelectEl] = useState();
  const [activeState, setActiveState] = useState("active");
  const [data, setData] = useState([]);

  const open = Boolean(anchorEl);
  const openMapSelect = Boolean(anchorMapSelectEl);
  let AlertCount = 5;

  const handleLogout = () => {
    dispatch({ type: LOG_OUT });
    localStorage.removeItem("token");
    navigate("/login");
  };

  const toggleMapMode = (mode) => {
    dispatch({ type: TOGGLE_MAP_MODE, payload: mode });
    setAnchorMapSelectEl(null);
  };

  const handleMobileSidebarControlClick = () => {
    dispatch({ type: SWITCH_MENU_VISIBLE, payload: !showMenu });
    dispatch({ type: SWITCH_SIDEBAR_VISIBLE, payload: false });
  };

  if (!isAuthenticated) {
    return <></>;
  }

  return (
    <div>
      {isMobile ? (
        <>
          {showMenu && (
            <div className="d-flex flex-column position-absolute menu-mobile">
              <div className="logo-mobile d-flex align-items-center justify-content-center">
                <img
                  src="./assets/logo.png"
                  alt="none"
                  onClick={() => navigate("/Dashboard")}
                />
                <p className="ml-3 mb-0">TECHWELT</p>
              </div>
              <div className="d-flex flex-column main">
                <div className="d-flex flex-column px-4 py-3">
                  <p className="text-white" style={{ fontSize: "2.25rem" }}>
                    {user?.fname}
                  </p>
                  <Button
                    className="ml-auto"
                    id="basic-button"
                    aria-controls={open ? "basic-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? "true" : undefined}
                    onClick={(event) => setAnchorEl(event.currentTarget)}
                  >
                    <div>
                      <img
                        src="./assets/common_user.png"
                        alt="none"
                        className="person-icon"
                      />
                      <img
                        src="./assets/polygon.png"
                        alt="none"
                        className="polygon-header mr-0"
                      />
                    </div>
                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={() => setAnchorEl(null)}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                  >
                    <MenuItem onClick={() => setAnchorEl(null)}>
                      <span style={{ fontSize: "14px" }}>Profile</span>
                    </MenuItem>
                    <MenuItem onClick={() => setAnchorEl(null)}>
                      <span style={{ fontSize: "14px" }}>My account</span>
                    </MenuItem>
                    <MenuItem onClick={handleLogout}>
                      <span style={{ fontSize: "14px" }}>Logout</span>
                    </MenuItem>
                  </Menu>
                </div>
                <div className="horizontal-bar" />
                <div className="d-flex flex-column px-5 py-3">
                  {tabs
                    .filter((tab) =>
                      user.role === "Admin" ? true : !tab.onlyAdmin
                    )
                    .map((tab, index) => (
                      <div key={index} className="tab my-4">
                        <NavLink
                          aria-current="page"
                          to={tab.to}
                          onClick={() =>
                            dispatch({
                              type: SWITCH_MENU_VISIBLE,
                              payload: false,
                            })
                          }
                          className="px-3 d-flex justify-content-start py-2"
                          style={({ isActive }) => ({
                            color: isActive ? "#FFFFFF" : "#005EEC",
                            backgroundColor: isActive ? "#1A2678" : "#FFFFFF",
                            borderRadius: "30px",
                          })}
                        >
                          <div className="d-flex content align-items-center">
                            <FontAwesomeIcon className="mr-4" icon={tab.icon} />
                            {tab.label}
                          </div>
                        </NavLink>
                      </div>
                    ))}
                </div>
                <div
                  className="d-flex mt-auto text-white ml-auto mr-5 mb-4 align-items-center"
                  onClick={handleLogout}
                >
                  <p
                    className="mb-0"
                    style={{ fontSize: "1.6rem", fontFamily: "rmedium" }}
                  >
                    Log Out
                  </p>
                  <img className="ml-3" src="./assets/Logout.svg" alt="none" />
                </div>
              </div>
            </div>
          )}
          <div
            className="position-absolute sidebar-icon d-flex justify-content-center align-items-center cursor-pointer"
            style={showMenu ? { left: "22.3rem" } : { left: "0.3rem" }}
            onClick={handleMobileSidebarControlClick}
          >
            <img
              src={
                showMenu
                  ? "./assets/hambuger_select.svg"
                  : "./assets/hambuger.svg"
              }
              alt="none"
            />
          </div>
          <div className="position-absolute noti-icon cursor-pointer d-flex justify-content-center py-3">
            <img width={20} src="./assets/Bell.svg" alt="none" />
            <span className="text-center text-white">{AlertCount}</span>
          </div>
        </>
      ) : (
        <div className="header">
          <div className="upper py-1">
            <Button
              id="map-select-button"
              aria-controls={openMapSelect ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={openMapSelect ? "true" : undefined}
              onClick={(event) => setAnchorMapSelectEl(event.currentTarget)}
            >
              <div>
                <img
                  src={
                    mapMode === 1 ? "./assets/gmap.svg" : "./assets/mapbox.svg"
                  }
                  alt="none"
                  className={mapMode === 1 ? "mx-4" : "mapbox-icon px-2"}
                />
                <img src="./assets/polygon.png" alt="none" className="mx-2" />
              </div>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorMapSelectEl}
              open={openMapSelect}
              onClose={() => setAnchorMapSelectEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => toggleMapMode(1)}>
                <img src="./assets/gmap.svg" alt="none" className="mx-auto" />
              </MenuItem>
              <div className="mx-3 horizontal-bar"></div>
              <MenuItem onClick={() => toggleMapMode(2)}>
                <img
                  src="./assets/mapbox.svg"
                  alt="none"
                  className="mapbox-icon px-2"
                />
              </MenuItem>
            </Menu>
            <div className="notifications-icon">
              <img width={20} src="./assets/Bell.svg" alt="none" />
              <div className="position-absolute text-center text-white">
                {AlertCount}
              </div>
            </div>
            <p>{user?.fname}</p>
            <Button
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={(event) => setAnchorEl(event.currentTarget)}
            >
              <div>
                <img
                  src="./assets/common_user.png"
                  alt="none"
                  className="person-icon"
                />
                <img
                  src="./assets/polygon.png"
                  alt="none"
                  className="polygon-header"
                />
              </div>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={() => setAnchorEl(null)}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => setAnchorEl(null)}>
                <span style={{ fontSize: "14px" }}>Profile</span>
              </MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}>
                <span style={{ fontSize: "14px" }}>My account</span>
              </MenuItem>
              <MenuItem onClick={handleLogout}>
                <span style={{ fontSize: "14px" }}>Logout</span>
              </MenuItem>
            </Menu>
          </div>
          <div className="lower w-100 justify-content-between d-flex px-4 py-2">
            {tabs
              .filter((tab) => (user.role === "Admin" ? true : !tab.onlyAdmin))
              .map((tab, index) => (
                <div key={index} className="tab">
                  <NavLink
                    aria-current="page"
                    to={tab.to}
                    className="px-3 d-flex justify-content-center py-2"
                    style={({ isActive }) => ({
                      color: isActive ? "#FFFFFF" : "#005EEC",
                      backgroundColor: isActive ? "#1A2678" : "#FFFFFF",
                      borderRadius: "30px",
                    })}
                  >
                    <div className="d-flex content align-items-center">
                      <FontAwesomeIcon className="mr-4" icon={tab.icon} />
                      {tab.label}
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default Header;
