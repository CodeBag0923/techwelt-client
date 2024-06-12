import React,{useState,useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import { CSVLink } from "react-csv";
import { useMediaQuery } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import CountryData from "../../CountryData.json"

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.bundle.min";
import "./Company.css";

const CompanyData = [
  {
    id: "1",
    img: "./assets/uber.svg",
    companyName: "Uber",
    username:"abc",
    owner: "Daniel",
    email: "test@gmail.com1",
    mobile: "+97 6730753792",
    noVehicle: "24",
    country_name: "Pakistan",
    status: "Deactivated",
    address:"abc"
  },
  {
    id: "2",
    img: "./assets/uber.svg",
    companyName: "Uber",
    username:"abc",
    owner: "Daniel",
    email: "test@gmail.com1",
    mobile: "+97 6730753792",
    noVehicle: "24",
    country_name: "Pakistan",
    status: "Active",
    address:"abc"

  },
  {
    id: "3",
    img: "./assets/uber.svg",
    companyName: "Uber",
    username:"abc",
    owner: "Daniel",
    email: "test@gmail.com",
    mobile: "+97 6730753792",
    noVehicle: "23",
    country_name: "Pakistan",
    status: "Active",
    address:"abc"

  },
  {
    id: "4",
    img: "./assets/uber.svg",
    companyName: "Uber",
    username:"abc",
    owner: "Daniel",
    email: "test@gmail.com",
    mobile: "+97 6730753792",
    noVehicle: "23",
    country_name: "India",
    status: "Deactivated",
    address:"abc"

  },

];

const Company = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [companyStatus, setCompanyStatus] = useState("");
  const [stateColor, setStateColor] = useState("#7A7D8B");
  const [searchCompanyNameText, setSearchCompanyNameText] = useState("");
  const [searchOwnerText, setSearchOwnerText] = useState("");
  const [searchCountryText, setSearchCountryText] = useState("Country");
  const [searchEmailText, setSearchEmailText] = useState("");
  const [searchStatusText, setSearchStatusText] = useState("");
  const [companyRemove, setCompanyRemove] = useState("none");
  const [companyRemoveId, setCompanyRemoveId] = useState("");
  const [data, setData] = useState(CompanyData);
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setData(
      CompanyData.filter((item)=>{
        return (!searchCompanyNameText || item.companyName.toLocaleLowerCase().includes(searchCompanyNameText.toLocaleLowerCase())) 
          && (!searchOwnerText || item.owner.toLocaleLowerCase().includes(searchOwnerText.toLocaleLowerCase())) 
          && (!searchEmailText || item.email.toLocaleLowerCase().includes(searchEmailText.toLocaleLowerCase())) 
          && (searchStatusText=="Status"?item.status : (!searchStatusText || item.status===searchStatusText)) 
          && (searchCountryText=="Country"?item.country_name : (!searchCountryText || item.country_name===searchCountryText));
      })
    )
  }, [searchCompanyNameText,searchOwnerText,searchEmailText,searchStatusText,searchCountryText])

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

  const handleCompanyName = (event) => {
    const val = event.target.value;
    setSearchCompanyNameText(val);
  };

  const handleOwner = (event) => {
    const val = event.target.value;
    setSearchOwnerText(val);
  };

  const handleEmail = (event) => {
    const val = event.target.value;
    setSearchEmailText(val);
  };

  const handleCountry = (event) => {
    const val = event.target.value;
    setSearchCountryText(val);
  };

  const handleViewCompany = (
    companyName,
    username,
    email,
    mobile,
    country_name,
    address,
    img
  ) => {
    navigate("/ViewCompany", {
      state: {
        companyName:companyName,
        username:username,
        email:email,
        mobile:mobile,
        country_name:country_name,
        address:address,
        img:img,
      },
    });
  };

  const handleEditCompany = (
    companyName,
    username,
    email,
    mobile,
    country_name,
    address,
    img
  ) => {
    navigate("/EditCompany", {
      state: {
        companyName:companyName,
        username:username,
        email:email,
        mobile:mobile,
        country_name:country_name,
        address:address,
        img:img,
      },
    });
  };

  const handleRemoveCompany = (id) => {
    setCompanyRemoveId(id);
    setCompanyRemove("block");
    setTimeout(() => {
      setCompanyRemoveId("");
      setCompanyRemove("none");
    }, 2000);
  };

  const handleCompanyStatus = (status) => {
    if (status == "Active") {
      setCompanyStatus("Deactivated");
    } else {
      setCompanyStatus("Active");
    }
  };

  const handleDialogBoxCompanyState=(data)=>{
  }

  const handleClear=()=>{
    setSearchCompanyNameText("")
    setSearchOwnerText("")
    setSearchEmailText("")
    setSearchCountryText("Country")
    setSearchStatusText("")
    setStateColor("grey")
    setData(CompanyData);
  }

  return (
    <div className="company-main">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <p className="px-5 text-white d-flex justify-content-center align-items-center">
              Total companies <span className='ml-3'>{data?.length}</span>
            </p>
            <div className="d-flex position-relative">
              <CSVLink
                data={CompanyData}
                filename="companys"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1" style={{width: "15rem"}}>
                <img src="./assets/addbtn.svg" alt="none" />
                <button onClick={() => navigate("/AddCompany")}>
                  Add Company
                </button>
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
                <span>Search company</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <input
                  className="field-input"
                  type="text"
                  placeholder="Company Name"
                  value={searchCompanyNameText}
                  onChange={handleCompanyName}
                />
                <input
                  className="field-input"
                  type="text"
                  placeholder="Owner"
                  value={searchOwnerText}
                  onChange={handleOwner}
                />
                <input
                  className="field-input"
                  type="mail"
                  placeholder="Email"
                  value={searchEmailText}
                  onChange={handleEmail}
                />
                <select
                  className="field-select"
                  value={searchCountryText}
                  onChange={handleCountry}
                  style={{color:searchCountryText=="Country"?"#7A7D8B":"black"}}
                >
                  <option value="Country" >
                    Select Country
                  </option>
                  {CountryData.map((item,index)=>{
                    return(
                      <option value={item.country_name} key={index} style={{color:"black",backgroundColor:"white"}}>{item.country_name}</option>
                    );
                  })}
                </select>
                <select
                  className="field-select"
                  style={{ color: stateColor }}
                  onChange={handleStateColor}
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
                  onClick={()=>handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-company-div2 py-3">
                <p className='mb-0 text-center'></p>
                <p className='mb-0 text-center'>Company Name</p>
                <p className='mb-0 text-center'>Owner</p>
                <p className='mb-0 text-center'>Email</p>
                <p className='mb-0 text-center'>Mobile No.</p>
                <p className='mb-0 text-center'>No. of Vehicles</p>
                <p className='mb-0 text-center'>Country</p>
                <p className='mb-0 text-center'>Status</p>
                <p className='mb-0 text-center'></p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index) => {
                  return (
                    <div key={index} id="import-company">
                      <p id="sub1-import-company">{item.id}</p>
                      <div className="subsub1-sub2-company-div2">
                        <div className='item'>
                          <img className="person item" src={item.img} alt="none" />
                        </div>
                        <p className='item'>{item.companyName}</p>
                        <p className='item'>{item.owner}</p>
                        <p className='item'>{item.email}</p>
                        <p className='item'>{item.mobile}</p>
                        <p className='item'>{item.noVehicle}</p>
                        <p className='item'>{item.country_name}</p>
                        <p className='item' style={{color: item.status == "Active" ? "#63D16E" : "#FF3062"}}>
                          {item.status}
                        </p>
                        <div className="company-dropdown item d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle company-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => handleCompanyStatus(item.status)}
                          />
                          <div className="dropdown-menu company-dropdown-div">
                            <div className="sub1-company-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() =>
                                  handleViewCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p className='mb-0 ml-2'>View</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() =>
                                  handleEditCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Edit</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveCompany(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Remove</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{
                                  width:
                                    companyStatus == "Active" ? "7.4rem" : "10.5rem",
                                }}
                                onClick={()=>handleDialogBoxCompanyState(companyStatus)}
                              >
                                <img
                                  src={
                                    companyStatus == "Deactivated"
                                      ? "./assets/deactivate.svg"
                                      : "./assets/Activate.svg"
                                  }
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>{companyStatus}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="company-remove" style={{ display: companyRemove }}>
                <h1>Id {companyRemoveId} User has been Removed</h1>
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
              style={{color: "white", backgroundColor: "#1A2678", borderRadius: "30px"}}
            >
              <div className="d-flex content align-items-center">
                <FontAwesomeIcon className="mr-4" icon={faBuilding} />
                Companies
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0" style={{width: "16rem"}}>
              Total companies <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex position-relative">
              <CSVLink
                data={CompanyData}
                filename="companys"
                style={{ textDecoration: "none" }}
              >
                <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                  <img src="./assets/export.svg" alt="none" />
                  <button>Export</button>
                </div>
              </CSVLink>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/addbtn.svg" alt="none" />
                <button className='ml-0' onClick={() => navigate("/AddCompany")}>
                  Add Company
                </button>
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
              <span>Search company</span>
              <img className="ml-auto accordion" style={!searchFold ? {transform: 'rotate(180deg)'} : {transform: 'none'}} src="./assets/arrow-down.png" alt="Arrow Down" onClick={() => setSearchFold(!searchFold)} />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Company Name"
                      value={searchCompanyNameText}
                      onChange={handleCompanyName}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder="Owner"
                      value={searchOwnerText}
                      onChange={handleOwner}
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
                    <select
                      className="field-select"
                      value={searchCountryText}
                      onChange={handleCountry}
                      style={{color:searchCountryText=="Country"?"#7A7D8B":"black"}}
                    >
                      <option value="Country" >
                        Select Country
                      </option>
                      {CountryData.map((item,index)=>{
                        return(
                          <option value={item.country_name} key={index} style={{color:"black",backgroundColor:"white"}}>{item.country_name}</option>
                        );
                      })}
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      style={{ color: stateColor }}
                      onChange={handleStateColor}
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
                <div className="tab-button d-flex justify-content-center align-items-center px-4 ml-auto py-1" onClick={() => handleClear()}>
                  <img src="./assets/clear.svg" alt="none" />
                  <button>Clear</button>
                </div>
              </div>
            )}
          </div>
          <div className={`sub2-div2 d-flex flex-column px-4 w-100 overflow-auto ml-0 ${searchFold && 'folded'}`}>
            {data?.map((item, index) => {
              return (
                <div id="import-company" key={index}>
                  <p id="sub1-import-company">{index + 1}</p>
                  <div className="subsub1-sub2-company-div2 d-flex flex-column align-items-center py-2 px-3">
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Company Name</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.companyName}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Owner</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.owner}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Email</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.email}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Mobile No.</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.mobile}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">No. of Vehicles</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.noVehicle}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Country</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.country_name}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Status</p>
                      <div className="mb-0 px-2 col-8 item justify-content-between">
                        <p className='item mb-0 justify-content-start' style={{color: item.status == "Active" ? "#63D16E" : "#FF3062"}}>
                          {item.status}
                        </p>
                        <div className="company-dropdown d-flex position-relative justify-content-end">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle company-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            onClick={() => handleCompanyStatus(item.status)}
                          />
                          <div className="dropdown-menu company-dropdown-div">
                            <div className="sub1-company-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() =>
                                  handleViewCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/view.svg"
                                  alt="none"
                                  style={{ width: "1.5rem", height: "2rem" }}
                                />
                                <p className='mb-0 ml-2'>View</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() =>
                                  handleEditCompany(
                                    item.companyName,
                                    item.username,
                                    item.email,
                                    item.mobile,
                                    item.country_name,
                                    item.address,
                                    item.img
                                  )
                                }
                              >
                                <img
                                  src="./assets/edit.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Edit</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveCompany(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Remove</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{
                                  width:
                                    companyStatus == "Active" ? "7.4rem" : "10.5rem",
                                }}
                                onClick={()=>handleDialogBoxCompanyState(companyStatus)}
                              >
                                <img
                                  src={
                                    companyStatus == "Deactivated"
                                      ? "./assets/deactivate.svg"
                                      : "./assets/Activate.svg"
                                  }
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>{companyStatus}</p>
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

export default Company