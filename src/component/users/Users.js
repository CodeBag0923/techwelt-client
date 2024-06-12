import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { useSelector } from "react-redux";
import { useMediaQuery } from "@mui/material";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { activateUser, getResponse } from "../../services/axios";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./Users.css";

const Users = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const deviceListData = useSelector((state) => state.devicesList);
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [userList, setUserList] = useState([]);
  const [userStatus, setUserStatus] = useState("");
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchNameText, setSearchNameText] = useState("");
  const [searchUserNameText, setSearchUserNameText] = useState("");
  const [searchEmailText, setSearchEmailText] = useState("");
  const [searchStatusText, setSearchStatusText] = useState("");
  const userRemove = useState("none");
  const userRemoveId = useState("");
  const [data, setData] = useState([]);
  const [searchRoleText, setSearchRoleText] = useState("");
  const [searchFold, setSearchFold] = useState(true);

  const { token } = deviceListData;

  useEffect(() => {
    if (user?.role?.toUpperCase() !== "ADMIN" || !isAuthenticated) {
      navigate("/login");
    }

    const getData = async () => {
      var res = await getResponse("/api/users/list", "get");
      if (res.status === 200) {
        setUserList(res?.data?.users);
      }
    };

    getData();
  }, [isAuthenticated]);

  useEffect(() => {
    setData(
      userList?.filter((item) => {
        return (
          (!searchNameText ||
            item.fname
              .toLocaleLowerCase()
              .includes(searchNameText.toLocaleLowerCase())) &&
          (!searchUserNameText ||
            item.lname
              .toLocaleLowerCase()
              .includes(searchUserNameText.toLocaleLowerCase())) &&
          (!searchRoleText ||
            item.role.toLocaleLowerCase() ===
              searchRoleText.toLocaleLowerCase()) &&
          (!searchEmailText ||
            item.email
              .toLocaleLowerCase()
              .includes(searchEmailText.toLocaleLowerCase())) &&
          (!searchStatusText ||
            searchStatusText === "Status" ||
            (searchStatusText === "Active" && item.verified) ||
            (searchStatusText === "Deactivated" && !item.verified))
        );
      })
    );
  }, [
    searchNameText,
    searchUserNameText,
    searchEmailText,
    searchStatusText,
    userList,
    searchRoleText,
  ]);

  const handleStateColor = (event) => {
    const val = event.target.value;
    setSearchStatusText(val);
    if (val === "Active") {
      setStateColor("#63D16E");
    } else if (val === "Deactivated") {
      setStateColor("#FF3062");
    } else {
      setStateColor("#7A7D8B");
    }
  };

  const handleName = (event) => {
    const val = event.target.value;
    setSearchNameText(val);
  };

  const handleUseName = (event) => {
    const val = event.target.value;
    setSearchUserNameText(val);
  };

  const handleEmail = (event) => {
    const val = event.target.value;
    setSearchEmailText(val);
  };

  const handlViewUser = (
    address,
    fname,
    lname,
    email,
    phone,
    company,
    role,
    country,
    img
  ) => {
    navigate("/ViewUser", {
      state: {
        address: address,
        name: fname,
        username: lname,
        email: email,
        mobile: phone,
        country: country,
        company: company,
        role: role,
        img: img,
      },
    });
  };

  const handleEditUser = (
    address,
    fname,
    lname,
    email,
    phone,
    company,
    role,
    country,
    image
  ) => {
    navigate("/EditUser", {
      state: {
        address: address,
        name: fname,
        username: lname,
        email: email,
        mobile: phone,
        country: country,
        company: company,
        role: role,
        image: image,
      },
    });
  };

  const handleRemoveUser = async (email) => {
    const removeData = {
      email: email,
    };
    var res = await getResponse("/api/users/removeUser", "post", removeData);
    if (res?.status) {
      var userRes = await getResponse("/api/users/list", "get");
      if (userRes.status === 200) {
        setData(userRes?.data?.users);
      }
      alert("User removed successfully!");
    } else {
      alert("Something went wrong!");
    }
  };

  const handleUserStatus = (status) => {
    if (status === "Active") {
      setUserStatus("Deactivated");
    } else {
      setUserStatus("Activate");
    }
  };

  const handleRoleChange = (e) => {
    setSearchRoleText(e.target.value);
  };

  const handleDialogBoxUserState = async (data, email) => {
    const sendData = {
      token: token,
      email: email,
      activate: "Activate" === data ? true : false,
    };
    let res = await activateUser(sendData);
    if (res.status === 200) {
      let res = await getResponse("/api/users/list", "get");
      if (res.status === 200) {
        setUserList(res?.data?.users);
        setData(res?.users);
      }
    }
  };

  const handleClear = () => {
    setSearchNameText("");
    setSearchUserNameText("");
    setSearchEmailText("");
    setSearchStatusText("");
    setSearchRoleText("");
    setStateColor("grey");
  };

  return (
    <div className="users-main w-100 h-100">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <p className="px-5 text-white d-flex justify-content-evenly align-items-center">
              Total users <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <CSVLink
                data={data}
                filename="Users"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly mx-1 align-items-center">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={() => navigate("/AddUser")}
              >
                <img src="./assets/addbtn.svg" alt="none" />
                <button>Add User</button>
              </div>
            </div>
          </div>
          <div className="sub2-div1 d-flex flex-column justify-content-end align-items-end w-100">
            <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 w-100">
              <div className="sub1-subsub1-sub2-div1 d-flex align-items-center my-2">
                <img
                  src="./assets/searchwithperson.svg"
                  alt="none"
                  className="search-icon-content"
                />
                <span>Search user</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Name"
                  value={searchNameText}
                  onChange={handleName}
                />
                <input
                  className="field-input"
                  type="text"
                  placeholder="Username"
                  value={searchUserNameText}
                  onChange={handleUseName}
                />
                <input
                  className="field-input"
                  type="mail"
                  placeholder="Email"
                  value={searchEmailText}
                  onChange={handleEmail}
                />
                <select className="field-select">
                  <option disabled selected>
                    Company
                  </option>
                  <option></option>
                  <option></option>
                </select>
                <select
                  className="field-select"
                  onChange={handleRoleChange}
                  value={searchRoleText}
                >
                  <option selected value="Role">
                    Role
                  </option>
                  <option value="Super Admin">Super Admin</option>
                  <option value="Admin">Admin</option>
                  <option value="Client">Client</option>
                </select>
                <select
                  className="field-select"
                  style={{ color: stateColor }}
                  onChange={handleStateColor}
                  value={searchStatusText}
                >
                  <option selected value="Status">
                    Status
                  </option>
                  <option style={{ color: "#63D16E" }} value="Active">
                    Active
                  </option>
                  <option style={{ color: "#FF3062" }} value="Deactivated">
                    Deactivated
                  </option>
                </select>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-4"
                  onClick={() => handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-users-div2 py-3">
                <p className="mb-0 text-center"></p>
                <p className="mb-0 text-center">Name</p>
                <p className="mb-0 text-center">Username</p>
                <p className="mb-0 text-center">Email</p>
                <p className="mb-0 text-center">Mobile No.</p>
                <p className="mb-0 text-center">Company</p>
                <p className="mb-0 text-center">Role</p>
                <p className="mb-0 text-center">Country</p>
                <p className="mb-0 text-center">Status</p>
                <p className="mb-0 text-center"></p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data?.map((item, index) => {
                  return (
                    <div id="import-users" key={index}>
                      <p id="sub1-import-users">{index + 1}</p>
                      <div className="subsub1-sub2-users-div2">
                        <div className="item">
                          <img
                            style={{ borderRadius: "30rem" }}
                            crossOrigin="*"
                            src={
                              item.image
                                ? process.env.REACT_APP_URL + "/" + item.image
                                : "./assets/common_user.png"
                            }
                            alt="none"
                            className="person object-fit-cover item"
                          />
                        </div>
                        <p className="item">{item?.fname}</p>
                        <p className="item">{item?.lname}</p>
                        <p className="item">{item?.email}</p>
                        <p className="item">{item?.phone}</p>
                        <p className="item">{item?.company}</p>
                        <p className="item">{item?.role}</p>
                        <p className="item">{item?.country}</p>
                        <p
                          className="item"
                          style={{
                            color:
                              item?.verified === true ? "#63D16E" : "#FF3062",
                          }}
                        >
                          {item?.verified === true
                            ? "Activated"
                            : "Deactivated"}
                        </p>
                        <div className="users-dropdown item d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle users-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => handleUserStatus(item.verified)}
                          />
                          <div className="dropdown-menu users-dropdown-div">
                            <div className="sub1-users-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() =>
                                  handlViewUser(
                                    item?.address,
                                    item?.fname,
                                    item?.lname,
                                    item?.email,
                                    item?.phone,
                                    item?.company,
                                    item?.role,
                                    item?.country,
                                    item?.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p className="mb-0 ml-2">View</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => {
                                  handleEditUser(
                                    item?.address,
                                    item.fname,
                                    item.lname,
                                    item.email,
                                    item.phone,
                                    item.company,
                                    item.role,
                                    item.country,
                                    item.image
                                  );
                                }}
                              >
                                <img src="./assets/edit.svg" alt="none" />
                                <p className="mb-0 ml-2">Edit</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveUser(item?.email)}
                              >
                                <img src="./assets/remove.svg" alt="none" />
                                <p className="mb-0 ml-2">Remove</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{
                                  width:
                                    userStatus === "Active"
                                      ? "7.4rem"
                                      : "10.5rem",
                                }}
                                onClick={() =>
                                  handleDialogBoxUserState(
                                    userStatus,
                                    item?.email
                                  )
                                }
                              >
                                <img
                                  src={
                                    item.verified === false
                                      ? "./assets/Activate.svg"
                                      : "./assets/deactive.svg"
                                  }
                                  alt="none"
                                />
                                <p className="mb-0 ml-2">
                                  {item.verified === true
                                    ? "Deactivate"
                                    : "Active"}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="remove" style={{ display: userRemove }}>
                <h1>Id {userRemoveId} User has been Removed</h1>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="tab mobile-title mb-4">
            <div
              aria-current="page"
              className="px-3 d-flex justify-content-center py-2"
              style={{
                color: "white",
                backgroundColor: "#1A2678",
                borderRadius: "30px",
              }}
            >
              <div className="d-flex content align-items-center">
                <FontAwesomeIcon className="mr-4" icon={faUser} />
                Users
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total users <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <CSVLink
                data={data}
                filename="Users"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly mx-1 align-items-center">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={() => navigate("/AddUser")}
              >
                <img src="./assets/addbtn.svg" alt="none" />
                <button>Add User</button>
              </div>
            </div>
          </div>
          <div className="subsub1-sub2-div1 bg-white d-flex flex-column py-2 px-4 w-100">
            <div className="sub1-subsub1-sub2-div1 d-flex align-items-center p-2">
              <img
                src="./assets/searchwithperson.svg"
                alt="none"
                className="search-icon-content"
              />
              <span>Search user</span>
              <img
                className="ml-auto accordion"
                style={
                  !searchFold
                    ? { transform: "rotate(180deg)" }
                    : { transform: "none" }
                }
                src="./assets/arrow-down.png"
                alt="Arrow Down"
                onClick={() => setSearchFold(!searchFold)}
              />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Name"
                      value={searchNameText}
                      onChange={handleName}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Username"
                      value={searchUserNameText}
                      onChange={handleUseName}
                    />
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="mail"
                      placeholder="Email"
                      value={searchEmailText}
                      onChange={handleEmail}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <select className="field-select">
                      <option disabled selected>
                        Company
                      </option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      onChange={handleRoleChange}
                      value={searchRoleText}
                    >
                      <option selected value="Role">
                        Role
                      </option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="Admin">Admin</option>
                      <option value="Client">Client</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      style={{ color: stateColor }}
                      onChange={handleStateColor}
                      value={searchStatusText}
                    >
                      <option selected value="Status">
                        Status
                      </option>
                      <option style={{ color: "#63D16E" }} value="Active">
                        Active
                      </option>
                      <option style={{ color: "#FF3062" }} value="Deactivated">
                        Deactivated
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-auto py-1"
                  onClick={() => handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            )}
          </div>
          <div
            className={`sub2-div2 d-flex flex-column px-4 w-100 overflow-auto ml-0 ${
              searchFold && "folded"
            }`}
          >
            {data?.map((item, index) => {
              return (
                <div id="import-users" key={index}>
                  <p id="sub1-import-users">{index + 1}</p>
                  <div className="subsub1-sub2-users-div2 d-flex align-items-center py-2">
                    <div className="item col-2 align-items-start px-1">
                      <img
                        crossOrigin="*"
                        src={
                          item.image
                            ? process.env.REACT_APP_URL + "/" + item.image
                            : "./assets/common_user.png"
                        }
                        alt="none"
                        className="person item object-fit-cover"
                      />
                    </div>
                    <div className="d-flex flex-column col-10 px-2">
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Name</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.fname}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Username</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.lname}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Email</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.email}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Mobile No.</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.phone}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Company</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.company}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Role</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.role}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Country</p>
                        <p className="mb-0 px-2 col-8 item justify-content-start">
                          {item?.country}
                        </p>
                      </div>
                      <div className="d-flex">
                        <p className="mb-0 px-2 col-4 text-white">Status</p>
                        <div className="mb-0 px-2 col-8 item justify-content-between">
                          <p
                            className="item mb-0 justify-content-start"
                            style={{
                              color:
                                item?.verified === true ? "#63D16E" : "#FF3062",
                            }}
                          >
                            {item?.verified === true
                              ? "Activated"
                              : "Deactivated"}
                          </p>
                          <div className="users-dropdown d-flex position-relative">
                            <img
                              src="./assets/Settings.svg"
                              alt="none"
                              className="dropdown-toggle users-dropdown-img px-3"
                              href="#"
                              data-bs-toggle="dropdown"
                              aria-expanded="false"
                              onClick={() => handleUserStatus(item.verified)}
                            />
                            <div className="dropdown-menu users-dropdown-div">
                              <div className="sub1-users-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                                <div
                                  className="d-flex align-items-center cursor-pointer"
                                  onClick={() =>
                                    handlViewUser(
                                      item?.address,
                                      item?.fname,
                                      item?.lname,
                                      item?.email,
                                      item?.phone,
                                      item?.company,
                                      item?.role,
                                      item?.country,
                                      item?.img
                                    )
                                  }
                                >
                                  <img
                                    src="./assets/view.svg"
                                    alt="none"
                                    style={{ width: "1.5rem", height: "2rem" }}
                                  />
                                  <p className="mb-0 ml-2">View</p>
                                </div>
                                <div
                                  className="d-flex align-items-center cursor-pointer"
                                  onClick={() => {
                                    handleEditUser(
                                      item?.address,
                                      item.fname,
                                      item.lname,
                                      item.email,
                                      item.phone,
                                      item.company,
                                      item.role,
                                      item.country,
                                      item.image
                                    );
                                  }}
                                >
                                  <img src="./assets/edit.svg" alt="none" />
                                  <p className="mb-0 ml-2">Edit</p>
                                </div>
                                <div
                                  className="d-flex align-items-center cursor-pointer"
                                  onClick={() => handleRemoveUser(item?.email)}
                                >
                                  <img src="./assets/remove.svg" alt="none" />
                                  <p className="mb-0 ml-2">Remove</p>
                                </div>
                                <div
                                  className="d-flex align-items-center cursor-pointer"
                                  style={{
                                    width:
                                      userStatus === "Active"
                                        ? "7.4rem"
                                        : "10.5rem",
                                  }}
                                  onClick={() =>
                                    handleDialogBoxUserState(
                                      userStatus,
                                      item?.email
                                    )
                                  }
                                >
                                  <img
                                    src={
                                      item.verified === false
                                        ? "./assets/Activate.svg"
                                        : "./assets/deactive.svg"
                                    }
                                    alt="none"
                                  />
                                  <p className="mb-0 ml-2">
                                    {item.verified === true
                                      ? "Deactivate"
                                      : "Active"}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
