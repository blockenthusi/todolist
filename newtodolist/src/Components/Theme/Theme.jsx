import React from "react"
import "./Theme.css"
import { GrFormPreviousLink } from "react-icons/gr";
import {Link} from "react-router-dom"


const Theme =()=>{
    return(
        <>
        <div className="themeHold">
            <div className="themeWrap">

            <div className="account1">
            <Link to="/main"><GrFormPreviousLink /></Link>
                    <h3>Theme</h3>
                    </div>
                <div className="account">
                    <h3>Auto</h3>
                    <hr/>
                </div>

                <div className="account">
                    <h3>Light</h3>
                    <hr/>
                </div>

                <div className="account">
                    <h3>Dark</h3>
                    <hr/>
                </div>
            </div>
        </div>
        </>
    )
}



export default Theme