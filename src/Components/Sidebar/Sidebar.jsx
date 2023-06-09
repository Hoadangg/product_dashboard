import React from "react";
import "./Sidebar.css";
import logo from "../../Assets/logo.png";
import { AiOutlinePieChart } from "react-icons/ai";
import {BsCalendarDate, BsFolderSymlink, BsChatDots } from "react-icons/bs";
import {FiBatteryCharging} from "react-icons/fi";
import {GiComputerFan} from "react-icons/gi";
import {GoSettings} from "react-icons/go";




const Sidebar = () => {  
  return (
    <div className="sideBar">
      <div className="logoDiv flex">
        <img src={logo} alt=":Logo IMgae" />
      </div>
      <div className="menu"> 
        <div className="navItem">
          <li className="navList">
            <AiOutlinePieChart className="icon" />
          </li>
          <li className="navList">
            <BsCalendarDate className="icon" />
          </li>
          <li className="navList">
            <BsFolderSymlink className="icon" />
          </li>
          <li className="navList">
            <FiBatteryCharging className="icon" />
          </li>
          <li className="navList">
            <BsChatDots className="icon" />
          </li>
          <li className="navList">
            <GiComputerFan className="icon" />
          </li>
          <li className="navList">
            <GoSettings className="icon" />
          </li>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
