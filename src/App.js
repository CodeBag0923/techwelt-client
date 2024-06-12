import React from "react";
import { BrowserRouter } from "react-router-dom";

import SideBar from "./component/side bar/SideBar";
import Header from "./component/header/Header";
import Routes from "./routes";

import "./App.css";

const App = () => {
  return (
    <div className="app d-flex">
      <BrowserRouter>
        <SideBar />
        <div className="d-flex flex-column w-100 right-layout">
          <Header />
          <Routes />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
