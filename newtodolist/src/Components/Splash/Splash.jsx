import React from 'react'
import './Splash.css'
import { useNavigate} from "react-router-dom"


const Splash = () =>{

    const Nav = useNavigate();
    return(
        <>
        <div className="splashHolder">
            <div className="splashWrapper">
                <div className="splashHeader">
                    <div className="splashHeaderWrapper">
                    <div className='logo'>
                        <h1>TaskIt</h1>
                    </div>
                    <div className='login'>
                        <button className='btnLogin' onClick={()=> Nav("/login")}>Login</button>
                    </div>
                    </div>
                </div>

                <div className="splashBody">
                    <div className="splashBodyWrapper">
                        <div className="splashBodyLeft">
                            <img src="" alt="mockup"/>
                        </div>
                        <div className="splashBodyRight">
                           <div className="splashBodyRightUp">
                           Easily manage your personal tasks, 
                           and team’s work all in one place.
                           </div>
                           <div className="splashBodyRightDown">
                            <button className="btnStartedGet" onClick={() =>Nav("/signup")}>Get Started For Free</button>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    )
}




export default Splash