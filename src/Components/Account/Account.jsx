import React from 'react'
import "./Account.css"
import {BiChevronRight} from 'react-icons/bi'
import {BsThreeDots} from "react-icons/bs"
import {BiEdit} from "react-icons/bi"
const Account = () => {
  return (
   <div className="account">
    <div className="icons flex">
      <BiChevronRight className='icon'/>
      <BsThreeDots className='icon'/>

    </div>


    <div className="accountDetails">

      <div className="imageDiv">
        <img src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/7914927/man-icon-md.png" alt="" />
        <span className="name">Jack Ma</span>
        <span className="position">Private Sector Emloyee</span>
        <button className="btn flex">
          <BiEdit className="icon" />
          Edit Profile
        </button>
      </div>


      <div className="hoursDiv">
        <span className="title">Working Hours</span>
      <div className="hoursCard flex">
        <div className="right bg">
          <span>Work Starts</span>
          <h6>09:00 AM</h6>
        </div>

        <div className="left noBg">
          <span>Work Ends</span>
          <h6>05:00 PM</h6>
        </div>
      </div>
      
      </div>
      <h1 className='city'>Ho Chi Minh City</h1>
      <span className="region">Thong Nhat, Go Vap, GMT+8</span>
    </div>
   </div>
  )
}

export default Account