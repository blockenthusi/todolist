import React from "react"
import "./Main.css"
import { IoSettings } from "react-icons/io5";
import { RiTaskFill } from "react-icons/ri";
import { FaCalendarDays } from "react-icons/fa6";
import { FaBell } from "react-icons/fa6";
import { useState } from "react";
import Alltask from "../Alltask/Alltask";
import Calender from "../Calender/Calender";
import { IoInvertModeSharp } from "react-icons/io5";
import Theme from "../Theme/Theme";
import {Link} from "react-router-dom"




const Main = () =>{
 const [alltask, setAllTask] =useState(true)
 const [calender, setCalender] =useState(false)
 const [reminder, setReminder] =useState(false)
 const [setting, setSetting] =useState(false)
 const [theme, setTheme] =useState(false)

 const [active, setActive] =useState("Active")

 const changeStateAlltask=()=>{
    setAllTask(true);
    setCalender(false);
    setReminder(false);
    setSetting(false);
    setTheme(false);
 }

 const changeStatecal=()=>{
    setAllTask(false);
    setCalender(true);
    setReminder(false);
    setSetting(false);
    setTheme(false);

 }
 const changeStateRem=()=>{
    setAllTask(false);
    setCalender(false);
    setReminder(true);
    setSetting(false);
    setTheme(false);

 }
 const changeStateSet=()=>{
    setAllTask(false);
    setCalender(false);
    setReminder(false);
    setSetting(true);
    setTheme(false);
 }

 const changeStateThem=()=>{
    setAllTask(false);
    setCalender(false);
    setReminder(false);
    setSetting(false);
    setTheme(true);


 }
 
 
   
    return(
        
        <div className="mainHolder">
            <div className="mainWrap">
                <div className="sideBar">
                    <div className="topHead">
                    <div className="image">
                        <img src=""  alt="photo"/>
                    </div>
                    <div className="names">
                        <p>Obodo</p>
                    </div>
                    </div>

                    <div className="body" style={{cursor: "pointer"}}>
                        <div className={`Task ${alltask? active: null}`} onClick={changeStateAlltask}>
                        <RiTaskFill />
                        <p>All Tasks</p>
                        </div>
                       <div className={`Task ${calender? active: null}`} onClick={changeStatecal}>
                       <FaCalendarDays />
                       <p>Calender</p>
                       </div>
                       <div className={`Task ${reminder? active: null}`} onClick={changeStateRem}>
                       <FaBell />
                       <p>Reminder</p>
                       </div>
                       <div className={`Task ${setting? active: null}`} onClick={changeStateSet}>
                       <IoSettings />
                       <p>settings</p>
                       </div>

                       <div className={`Task ${theme? active: null}`} onClick={changeStateThem}>
                       <IoInvertModeSharp />
                       <p>Theme</p>
                       </div>
                    </div>
                    
                </div>
            

                <div className="cardHolder">
            {
            alltask? <Alltask/>:
            calender?  <Calender/>:
            reminder?  <Calender/>:
            theme?   <Theme/>:
            null
            }
            
            
            </div>
       </div>
            </div>
        
        
    )
}




export default Main