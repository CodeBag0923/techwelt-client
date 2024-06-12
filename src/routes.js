import React, { useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Dashboard from "./component/dashboard/Dashboard";
import CommandsSettings from "./component/commads-settings/CommandsSettings";
import Users from "./component/users/Users";
import AddUser from "./component/addUser/AddUser";
import Devices from "./component/devices/Devices";
import AddDevice from "./component/addDevice/AddDevice";
import Alerts from "./component/alerts/Alerts";
import Reports from "./component/reports/Reports";
import Rules from "./component/rules/Rules";
import AddVehicle from "./component/Rule-addVehicle/AddVehicle";
import EditRule from "./component/Rule-edit/EditRule";
import Ticket from "./component/ticket/Ticket";
import Geofance from "./component/geofence/Geofance";
import Login from "./component/login/Login";
import Signup from "./component/signUps/Signup";
import Forgot from "./component/forgot/Forgot";
import ViewUser from "./component/viewUser/ViewUser";
import EditUser from "./component/editUser/EditUser";
import Company from "./component/company/Company";
import ViewDevice from "./component/viewDevice/ViewDevice";
import EditDevice from "./component/editDevice/EditDevice";
import AddCompany from "./component/addCompany/AddCompany";
import ViewCompany from "./component/viewCompany/ViewCompany";
import EditCompany from "./component/editCompany/EditCompany";
import History from "./component/history/History";
import HistoryPlayBack from "./component/history playback/HistoryPlayBack";
import AddRule from "./component/Rule-add/AddRule";
import NewTicket from "./component/newTicket/NewTicket";
import TicketId from "./component/ticket-Id/TicketId";

import "./App.css";

const MainRoutes = () => {
  const location = useLocation();
  const navicate = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      navicate("/login");
    }
  }, []);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/Signup" element={<Signup />} />
      <Route path="/Forgot" element={<Forgot />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/History" element={<History />} />
      <Route path="/HistoryPlayBack" element={<HistoryPlayBack />} />
      <Route path="/CommandsSettings" element={<CommandsSettings />} />
      <Route path="/Users" element={<Users />} />
      <Route path="/AddUser" element={<AddUser />} />
      <Route path="/ViewUser" element={<ViewUser />} />
      <Route path="/EditUser" element={<EditUser />} />
      <Route path="/Devices" element={<Devices />} />
      <Route path="/AddDevice" element={<AddDevice />} />
      <Route path="/ViewDevice" element={<ViewDevice />} />
      <Route path="/EditDevice" element={<EditDevice />} />
      <Route path="/Alerts" element={<Alerts />} />
      <Route path="/Reports" element={<Reports />} />
      <Route path="/Rules" element={<Rules />} />
      <Route path="/AddRule" element={<AddRule />} />
      <Route path="/AddVehicle" element={<AddVehicle />} />
      <Route path="/EditRule" element={<EditRule />} />
      <Route path="/Ticket" element={<Ticket />} />
      <Route path="/NewTicket" element={<NewTicket />} />
      <Route path="/TicketId" element={<TicketId />} />
      <Route path="/Geofance" element={<Geofance />} />
      <Route path="/Company" element={<Company />} />
      <Route path="/AddCompany" element={<AddCompany />} />
      <Route path="/ViewCompany" element={<ViewCompany />} />
      <Route path="/EditCompany" element={<EditCompany />} />
    </Routes>
  );
};

export default MainRoutes;
