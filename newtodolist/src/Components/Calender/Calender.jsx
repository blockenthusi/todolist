import React, {useEffect, useState} from "react"
import { gapi } from "gapi-script"

// import "./Calender.css"
// import { GrNext } from "react-icons/gr";
// import { FcPrevious } from "react-icons/fc";




const Calender = ()=>{
  
    const calenderID = process.env.REACT_APP_CALENDER_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const accessToken = process.envREACT_APP_GOOGLE_ACCESS_TOKEN;

    const getEvents = (calenderID, apiKey) =>{
        function initiate() {
            gapi.client
            .init({
                apiKey: apiKey,
            })
            .then(function (){
                return gapi.client.request({
                    path: `http://www.googleapis.com/calender/v3/calenders/${calenderID}/events`
                });
            })
            .then(
                (response) =>{
                    let events = response.result.items;
                    setEvents(events)
                },
                function (err) {
                    return [false, err];
                }
            )
        }
        gapi.load("client", initiate)
    };

    useEffect(() => {
        const events = getEvents(calenderID, apiKey);
        setEvents(events);
    }, []);

    return(
        <div className="Holder">
            <h1>Reminder
            <ul>
                {events?.map((event)=>(
                    <li key={event.id} className="">
                        <Event description={event.summary}/>
                    </li>
                ))}
            </ul>
            </h1>

    
        </div>
    )

    

    //      { <div className="CalenderHold">
    //         <div className="calenderWrap">
    //             <div className="calheader">
    //                 <h1>Reminder</h1>
    //             </div>

    //         <div className="calbody">
    //               <div className="left">
    //                   <p>Date</p>
    //                     <div className="title">
    //                         <p>20.01.24</p>
    //                     </div>
    //                 </div>

    //                <div className="right">
    //                    <p>Time</p>
    //                    <div className="title">
    //                        <p>09: 30 Am</p>
    //                    </div>
    //                </div>
    //            </div>

    //            <div className="calbodys">
    //                <div className="leftt">
    //                 <h1>January 2024</h1>
    //                 </div>
    //                 <div className="rightt">
    //                 <FcPrevious style={{color: "blue"}} />
    //                <GrNext style={{color: "blue"}} />
    //                </div>
    //            </div>

    //         <div className="callbody">
    //             <div className="leftt">
    //                <p style={{fontWeight:"700"}}>Days of the week </p>
    //                 </div>

    //                  <div className="rightz">
    //                      <div className="div">
    //                         <p>Tomorrow</p>
    //                     </div>
    //                     <div className="div">
    //                     <p>Later Today</p>
    //                    </div>
    //                    <div className="div">
    //                     <p>Next Week</p>
    //                     </div>
    //                 </div>
                    
    //             </div>

    //             <div className="calldown">
    //                 <div className="left">
    //                     <p>Cancel</p>
    //                 </div>
    //                 <div className="right">
    //                     <p>Set</p>
    //                 </div>
    //             </div>
    //         </div>
    //    </div> }
        
 }



export default Calender