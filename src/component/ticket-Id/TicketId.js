import React, { useState } from "react";
import { useMediaQuery } from "@mui/material";

import "react-phone-number-input/style.css";
import "./TicketId.css";

const DATA = [
  {
    subject: "mypic.jpeg",
  },
  {
    subject: "Testfile.pdf",
  },
  {
    subject: "myvideo.mp4",
  },
  {
    subject: "1234435345.png",
  },
  {
    subject: "Test.mp4",
  },
];

const DATAS = [
  {
    subject: "mypic.jpeg",
  }
];

const TicketId = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");

  const [formData, setFormData] = useState({
    subject: "FMC130 Output Issue",
    text: "This text is not editable as its the ticket raised by client.",
    text1:"This text is editable as its reply from admin or manager to client"
  });

  const handlData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlSubmit = () => {
    if (formData.text.length === 0) {
      alert("sorry n");
    } else if (formData.subject.length === 0) {
      alert("sorry u");
    }
  };

  return (
    <div className="ticket-id-main w-100">
      <p>Ticket:  20220414001</p>
      <div className="ticket-id-div1 d-flex justify-content-center flex-column p-5 mx-auto bg-white">
        <div className="d-flex flex-column">
          <div className="sub1-subsub1-sub1-ticket-id-div1 d-flex flex-column">
            <label>Subject</label>
            <input
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handlData}
              required
            />
          </div>
          <div className="sub2-subsub1-sub1-ticket-id-div1 d-flex flex-column mt-4">
            <label>Text</label>
            <textarea
              className="w-100"
              name="text"
              type="text"
              value={formData.text}
              onChange={handlData}
              required
            />
          </div>
        </div>
        <div className="d-flex flex-column my-5">
          {DATA.map((item) => {
            return (
              <div className="sub1-left-subsub2-sub1-ticket-id-div1 text-center position-relative my-2">
                <span className="card-p">{item.subject}</span>
              </div>
            );
          })}
        </div>
        <div className="sub1-subsub3-sub1-ticket-id-div1 d-flex flex-column">
          <label>Text</label>
          <textarea
            name="text"
            type="text"
            value={formData.text1}
            onChange={handlData}
            required
          />
        </div>
        <div className={`d-flex w-100 my-5 ${isMobile && 'flex-column gap-5'}`}>
          <div className="col-md-6 d-flex flex-column">
            {DATAS.map((item) => {
              return (
                <div className="sub1-left-subsub4-sub1-ticket-id-div1 text-center position-relative my-2">
                  <span className="card-p">{item.subject}</span>
                  <img className="position-absolute" src="./assets/redCross.svg" alt="none" />
                </div>
              );
            })}
          </div>
          <div className="right-subsub4-sub1-ticket-id-div1 col-md-6 d-flex justify-content-end">
            <div className="sub1-right-subsub4-sub1-ticket-id-div1 position-relative">
              <img src="./assets/file.svg" alt="none" />
              <input className="position-absolute" type="file"/>
            </div>
          </div>
        </div>
        <div className="tab-button d-flex justify-content-evenly align-items-center mx-auto mt-5" onClick={() => handlSubmit()}>
          <img src="./assets/whiteSend.svg" alt="none" />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default TicketId;
