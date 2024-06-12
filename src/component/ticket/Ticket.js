import React,{useState,useEffect} from 'react';
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "react-datepicker/dist/react-datepicker.css";
import "./Ticket.css";
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const ticketsData = [
  {
    id: "1",
    reference: "24235843981",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Ayaz",
    company: "delta",
    status:"Resolved"
  },
  {
    id: "2",
    reference: "24235843982",
    subject:"Teltonikas",
    date: "14/04/2023 12.56 PM ",
    user:"Alex",
    company: "deltas",
    status:"Pending"
  },
  {
    id: "3",
    reference: "24235843983",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Andrei",
    company: "deltass",
    status:"Resolved"
  },
  {
    id: "1",
    reference: "24235843981",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Ayaz",
    company: "delta",
    status:"Resolved"
  },
  {
    id: "2",
    reference: "24235843982",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Alex",
    company: "deltas",
    status:"Pending"
  },
  {
    id: "3",
    reference: "24235843983",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Andrei",
    company: "deltass",
    status:"Resolved"
  },
  {
    id: "1",
    reference: "24235843981",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Ayaz",
    company: "delta",
    status:"Resolved"
  },
  {
    id: "2",
    reference: "24235843982",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Alex",
    company: "deltas",
    status:"Pending"
  },
  {
    id: "3",
    reference: "24235843983",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Andrei",
    company: "deltass",
    status:"Resolved"
  },
  {
    id: "1",
    reference: "24235843981",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Ayaz",
    company: "delta",
    status:"Resolved"
  },
  {
    id: "2",
    reference: "24235843982",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Alex",
    company: "deltas",
    status:"Pending"
  },
  {
    id: "3",
    reference: "24235843983",
    subject:"Teltonika",
    date: "14/04/2023 12.56 PM ",
    user:"Andrei",
    company: "deltass",
    status:"Resolved"
  },
];

const Ticket = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [data, setData] = useState(ticketsData);
  const [searchRefText, setSearchRefText] = useState("");
  const [searchSubjectText, setSearchSubjectText] = useState("");
  const [searchUserText, setSearchUserText] = useState("User");
  const [searchCompanyText, setSearchCompanyText] = useState("Company");
  const [ticketStatus, setTicketStatus] = useState("");
  const [ticketRemove, setTicketRemove] = useState("none");
  const [ticketRemoveId, setTicketRemoveId] = useState("");
  const [searchFold, setSearchFold] = useState(true);

  useEffect(() => {
    setData(
      ticketsData.filter((item)=>{
        return (!searchRefText || item.reference.toLocaleLowerCase().includes(searchRefText.toLocaleLowerCase())) 
          && (!searchSubjectText || item.subject.toLocaleLowerCase().includes(searchSubjectText.toLocaleLowerCase()))
          && (searchUserText=="User" ? item.user : (!searchUserText || item.user===searchUserText))
          && (searchCompanyText=="Company" ? item.company : (!searchCompanyText || item.company===searchCompanyText));
      })
    )
  }, [searchRefText,searchSubjectText,searchUserText,searchCompanyText]) 

  const handleRef = (event) => {
    const val = event.target.value;
    setSearchRefText(val);
  }; 

  const handleSubject = (event) => {
    const val = event.target.value;
    setSearchSubjectText(val);
  }; 

  const handleUser = (event) => {
    const val = event.target.value;
    setSearchUserText(val);
  }; 

  const handleCompany = (event) => {
    const val = event.target.value;
    setSearchCompanyText(val);
  };

  const handleClear=()=>{
    setSearchRefText("")
    setSearchSubjectText("")
    setSearchUserText("User")
    setSearchCompanyText("Company")
    setData(ticketsData);
  }

  const handleDialogBoxTicketState=(data)=>{
  };

  const handleTicketStatus = (status) => {
    if (status === "Resolved") {
      setTicketStatus("Pending");
    } else {
      setTicketStatus("Resolved");
    }
  };

  const handleRemoveTicket = (id) => {
    setTicketRemoveId(id);
    setTicketRemove("block");
    setTimeout(() => {
      setTicketRemoveId("");
      setTicketRemove("none");
    }, 2000);
  };

  const handleChange=(e)=>{
    const {name,checked}=e.target;
    if(name==="allSelect"){
      let tewmpUser=data.map((da)=>{return{...da,isChecked:checked}});
      setData(tewmpUser)
    }else{
      let tewmpUser = data.map((da)=>da.reference===name?{...da,isChecked:checked}:da);
      setData(tewmpUser)
    }
  }

  return (
    <div className="ticket-main">
      {!isMobile ? (
        <div className="d-flex flex-column justify-content-center align-items-center">
          <div className="sub1-div1 d-flex justify-content-between align-items-center w-100">
            <div className="all-ticket-div1 h-100 d-flex justify-content-between">
              <p className="px-5 text-white d-flex justify-content-center align-items-center">
                Total tickets <span className='ml-3'>{data.length}</span>
              </p>
              <p className="px-5 text-white d-flex justify-content-center align-items-center">
                Pending <span className='ml-3'>{data?.filter(item => item.status === "Pending").length}</span>
              </p>
              <p className="px-5 text-white d-flex justify-content-center align-items-center">
                Resolved <span className='ml-3'>{data?.filter(item => item.status === "Resolved").length}</span>
              </p>
            </div>
            <div className="d-flex">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={()=>navigate("/NewTicket")}
              >
                <img src="./assets/Ticket.svg" alt="none"/>
                <button>Create</button>
              </div>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/delete.svg" alt="none"/>
                <button >Delete</button>
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
                <span>Search ticket</span>
              </div>
              <div className="sub2-subsub1-sub2-div1 d-flex justify-content-between align-items-center">
                <input
                  className="field-input"
                  type="text"
                  placeholder='Ref No.'
                  value={searchRefText}
                  onChange={handleRef}
                />
                <input
                  className="field-input"
                  type="text"
                  placeholder='Subject'
                  value={searchSubjectText}
                  onChange={handleSubject}
                />
                <select
                  className="field-select"
                  value={searchUserText}
                  onChange={handleUser}
                  style={{color:searchUserText=="User"?"#7A7D8B":"black"}}
                >
                  <option>User</option>
                  <option style={{color:"black"}}>Alex</option>
                  <option style={{color:"black"}}>Ayaz</option>
                  <option style={{color:"black"}}>Andrei</option>
                </select>
                <select
                  className="field-select"
                  value={searchCompanyText}
                  onChange={handleCompany}
                  style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                >
                  <option>Company</option>
                  <option style={{color:"black"}}>delta</option>
                  <option style={{color:"black"}}>deltas</option>
                  <option style={{color:"black"}}>deltass</option>
                </select>
                <div className="field-input">
                  <DatePicker
                    selected={startDate}
                    calendarClassName="rasta-stripes"
                    placeholderText="From"
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    // timeInputLabel="Time:"
                    // dateFormat="dd/MM/yyyy h:mm aa"
                    // showTimeInput
                  />
                </div>
                <div className="field-input">
                  <DatePicker
                    calendarClassName="rasta-stripes"
                    selected={endDate}
                    placeholderText="To"
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    // timeInputLabel="Time:"
                    // dateFormat="dd/MM/yyyy h:mm aa"
                    // showTimeInput
                  />
                </div>
                <div
                  className="tab-button d-flex justify-content-center align-items-center px-4 ml-4"
                  onClick={()=>handleClear()}
                >
                  <img src="./assets/clear.svg" alt="none"/>
                  <button>Clear</button>
                </div>
              </div>
            </div>
            <div className="div2">
              <div className="subsub1-sub1-ticket-div2 py-3">
                <div className="mb-0 d-flex justify-content-center align-items-center">
                  <input
                    type='checkbox'
                    onChange={handleChange}
                    name='allSelect'
                    checked={data.filter(da=>da?.isChecked !== true).length < 1}
                  />
                </div>
                <p className='mb-0 text-center'>Reference No.</p>
                <p className='mb-0 text-center'>Subject</p>
                <p className='mb-0 text-center'>Date Time</p>
                <p className='mb-0 text-center'>User</p>
                <p className='mb-0 text-center'>Company</p>
                <p className='mb-0 text-center'>Status</p>
                <p className='mb-0 text-center'></p>
              </div>
              <div className="sub2-div2 overflow-auto">
                {data.map((item, index)=>{
                  return(
                    <div key={index} id="import-ticket">
                      <p id="sub1-import-ticket">{item.id}</p>
                      <div className="subsub1-sub2-ticket-div2">
                        <div className='item'>
                          <input
                            type='checkbox'
                            name={item.reference}
                            onChange={handleChange}
                            checked={item?.isChecked || false}
                          />
                        </div>
                        <p className='item'>{item.reference}</p>
                        <p className='item'>{item.subject}</p>
                        <p className='item'>{item.date}</p>
                        <p className='item'>{item.user}</p>
                        <p className='item'>{item.company}</p>
                        <p className='item' style={{color:item.status=="Resolved" ? "#63D16E" : "#FF3062"}}>{item.status}</p>
                        <div className="ticket-dropdown item d-flex position-relative">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle ticket-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            onClick={() => handleTicketStatus(item.status)}
                          />  
                          <div className="dropdown-menu ticket-dropdown-div">
                            <div className="sub1-company-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{width: ticketStatus === "Pending" ? "9.5rem" : "10rem"}}
                                onClick={()=>handleDialogBoxTicketState(ticketStatus)}
                              >
                                <img
                                  src={ticketStatus === "Resolved" ? "./assets/Add.svg" : "./assets/deactivate.svg"}
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>{ticketStatus}</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveTicket(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Delete</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="ticket-remove" style={{ display: ticketRemove }}>
                <h1>Id {ticketRemoveId} User has been Removed</h1>
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
                <FontAwesomeIcon className="mr-4" icon={faTriangleExclamation} />
                Ticket
              </div>
            </div>
          </div>
          <div className="sub1-div1 d-flex justify-content-between align-items-end w-100 p-0 my-3">
            <p className="px-3 text-white d-flex justify-content-evenly align-items-center mb-0">
              Total tickets <span className="ml-3">{data?.length}</span>
            </p>
            <div className="d-flex">
              <div
                className="tab-button d-flex justify-content-evenly align-items-center mx-1"
                onClick={()=>navigate("/NewTicket")}
              >
                <img src="./assets/Ticket.svg" alt="none"/>
                <button>Create</button>
              </div>
              <div className="tab-button d-flex justify-content-evenly align-items-center mx-1">
                <img src="./assets/delete.svg" alt="none"/>
                <button >Delete</button>
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
              <span>Search ticket</span>
              <img className="ml-auto accordion" style={!searchFold ? {transform: 'rotate(180deg)'} : {transform: 'none'}} src="./assets/arrow-down.png" alt="Arrow Down" onClick={() => setSearchFold(!searchFold)} />
            </div>
            {!searchFold && (
              <div className="sub2-subsub1-sub2-div1 d-flex flex-column px-0">
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder='Ref No.'
                      value={searchRefText}
                      onChange={handleRef}
                    />
                  </div>
                  <div className="col-6 px-1">
                    <input
                      className="field-input"
                      type="text"
                      placeholder='Subject'
                      value={searchSubjectText}
                      onChange={handleSubject}
                    />
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchUserText}
                      onChange={handleUser}
                      style={{color:searchUserText=="User"?"#7A7D8B":"black"}}
                    >
                      <option>User</option>
                      <option style={{color:"black"}}>Alex</option>
                      <option style={{color:"black"}}>Ayaz</option>
                      <option style={{color:"black"}}>Andrei</option>
                    </select>
                  </div>
                  <div className="col-6 px-1">
                    <select
                      className="field-select"
                      value={searchCompanyText}
                      onChange={handleCompany}
                      style={{color:searchCompanyText=="Company"?"#7A7D8B":"black"}}
                    >
                      <option>Company</option>
                      <option style={{color:"black"}}>delta</option>
                      <option style={{color:"black"}}>deltas</option>
                      <option style={{color:"black"}}>deltass</option>
                    </select>
                  </div>
                </div>
                <div className="d-flex w-100">
                  <div className="col-6 px-1">
                    <div className="field-input">
                      <DatePicker
                        selected={startDate}
                        calendarClassName="rasta-stripes"
                        placeholderText="From"
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        // timeInputLabel="Time:"
                        // dateFormat="dd/MM/yyyy h:mm aa"
                        // showTimeInput
                      />
                    </div>
                  </div>
                  <div className="col-6 px-1">
                    <div className="field-input">
                      <DatePicker
                        calendarClassName="rasta-stripes"
                        selected={endDate}
                        placeholderText="To"
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        // timeInputLabel="Time:"
                        // dateFormat="dd/MM/yyyy h:mm aa"
                        // showTimeInput
                      />
                    </div>
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
                <div id="import-ticket" key={index}>
                  <p id="sub1-import-ticket">{index + 1}</p>
                  <div className="subsub1-sub2-ticket-div2 d-flex flex-column align-items-center py-2 px-3">
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Reference No.</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.reference}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Subject</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.subject}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Date Time</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.date}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">User</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.user}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Company</p>
                      <p className="mb-0 px-2 col-8 item justify-content-start">{item?.company}</p>
                    </div>
                    <div className="d-flex w-100">
                      <p className="mb-0 px-2 col-4 text-white">Status</p>
                      <div className="mb-0 px-2 col-8 item justify-content-between">
                        <p className='item mb-0 justify-content-start' style={{color:item.status=="Resolved" ? "#63D16E" : "#FF3062"}}>{item.status}</p>
                        <div className="ticket-dropdown d-flex position-relative justify-content-end">
                          <img
                            src="./assets/Settings.svg"
                            alt="none"
                            className="dropdown-toggle ticket-dropdown-img px-3"
                            href="#"
                            data-bs-toggle="dropdown"
                            onClick={() => handleTicketStatus(item.status)}
                          />
                          <div className="dropdown-menu ticket-dropdown-div">
                            <div className="sub1-company-dropdown-div mx-4 d-flex flex-column justify-content-evenly h-100">
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                style={{width: ticketStatus === "Pending" ? "9.5rem" : "10rem"}}
                                onClick={()=>handleDialogBoxTicketState(ticketStatus)}
                              >
                                <img
                                  src={ticketStatus === "Resolved" ? "./assets/Add.svg" : "./assets/deactivate.svg"}
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>{ticketStatus}</p>
                              </div>
                              <div
                                className="d-flex align-items-center cursor-pointer"
                                onClick={() => handleRemoveTicket(item.id)}
                              >
                                <img
                                  src="./assets/remove.svg"
                                  alt="none"
                                />
                                <p className='mb-0 ml-2'>Delete</p>
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
  )
}

export default Ticket;
