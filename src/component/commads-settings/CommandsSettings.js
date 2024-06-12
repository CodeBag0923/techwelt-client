import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import SystemParams from "./system params/SystemParams";
import InputOutput from "./input-output/InputOutput";
import Connectivity from "./connectivity/Connectivity";
import Configuration from "./configuration/Configuration";
import Tracking from "./tracking/Tracking"
import Miscellaneous from "./miscellaneous/Miscellaneous"
import Bluetooth from "./bluetooth/Bluetooth"
import Can from "./can/Can";
import Actions from "./actions/Actions";
import CommandsQueue from "./commands-queue/CommandsQueue";
import Accelerometer from "./accelerometer/Accelerometer";

import "./CommandsSettings.css";

const tabs = [
  {
    id: 0,
    label: "Input / Output",
    component: <InputOutput />
  },
  {
    id: 1,
    label: "System Params",
    component: <SystemParams />
  },
  {
    id: 2,
    label: "Connectivity",
    component: <Connectivity />
  },
  {
    id: 3,
    label: "Configuration",
    component: <Configuration />
  },
  {
    id: 4,
    label: "Tracking",
    component: <Tracking />
  },
  {
    id: 5,
    label: "Miscellaneous",
    component: <Miscellaneous />
  },
  {
    id: 6,
    label: "Accelerometer",
    component: <Accelerometer />
  },
  {
    id: 7,
    label: "CAN",
    component: <Can />
  },
  {
    id: 8,
    label: "Bluetooth",
    component: <Bluetooth />
  },
  {
    id: 9,
    label: "Actions",
    component: <Actions />
  },
  {
    id: 10,
    label: "Commands Queue",
    component: <CommandsQueue />
  },
]

const CommandsSettings = () => {
  const getData = useLocation();

  const [selectedTab, setSelectedTab] = useState(0);

  const data = {
    Name: getData?.state?.Name,
    device: getData?.state?.device,
    deviceImei: getData?.state?.deviceImei,
  }

  return (
    <div className="command-setting-main px-4 py-5">
      <div className="sub1-command-setting-div1 d-flex justify-content-center align-items-center py-1">
        <p className="text-center mb-0 text-white">Commands & Settings</p>
      </div>
      <div className="command-setting-div2 w-100 d-flex align-items-center my-4">
        <div className="sub1-command-setting-div2 d-flex flex-column justify-content-evenly p-3 text-white">
          <p className="mb-0">{data.Name}</p>
          <p className="mb-0">Device: {data.device}</p>
          <p className="mb-0">IMEI: {data.deviceImei}</p>
        </div>
        <div className="sub2-command-setting-div2 d-flex justify-content-between w-100 gap-3 px-3">
          {tabs.map((tab) => (
            <div key={tab.id} className="command d-flex justify-content-center cursor-pointer" style={{ backgroundColor: selectedTab == tab.id ? "#1A2678" : "white" }} onClick={() => setSelectedTab(tab.id)}>
              <p style={{ color: selectedTab == tab.id ? "white" : "#005EEC" }}>{tab.label}</p>
            </div>
          ))}
        </div>
      </div>
      {tabs.filter(tab => tab.id === selectedTab)[0].component}
    </div>
  );
};

export default CommandsSettings;
