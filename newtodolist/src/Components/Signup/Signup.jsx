import React from 'react'
import "./Signup.css"
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import {Link, useNavigate} from "react-router-dom"
import axios from "axios"
import {toast} from "react-toastify"


const Signup = () =>{

    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');



    const handleShowpassword=()=>{
        setShowPassword(!showPassword)
    }

    const Nav = useNavigate();

    const handleSignup = async () => {
        console.log(username, email,password)
        try {
          const response = await axios.post('https://taskit-d9ij.onrender.com/signup', {
            username,
            email,
            password,
          });
          console.log(response.data);
          toast.info("signup successful"); 
          Nav("/login")// Handle the response accordingly
        } catch (error) {
        //   console.error('Error signing up:', error.message);
        toast.error(error.message)
        
        
        }
      };
    
    return(
        <>
        <div className="signupHolder">
            <div className="signWrapper">
                <div className="top">
                    <h1>TaskIt</h1>
                </div>
                <div className="down">
                <form id='marc'>
                        <div className="card">
                            <div className="fields">
                                <div className="input">
                                    <p>Username</p>
                                    <input type="text" placeholder='Username' required onChange={(e) => setUsername(e.target.value)}/>
                                </div>
                                <div className="input">
                                    <p>Email</p>
                                    <input type="email" placeholder='Email' required onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                                <div className="high">
                                    <div className="inf">
                                    <p>Password</p>
                                    </div>
                                    <div className="topz">
                                    <input type={showPassword?"text":"password"} placeholder='Password' required onChange={(e) => setPassword(e.target.value)}/>
                                    {
                            showPassword?  <FaRegEye onClick={handleShowpassword} style={{fontSize: "12px"}}/>:<FaEyeSlash onClick={handleShowpassword} style={{fontSize: "12px"}}/>
                            }
                                    </div>
                                    
                                </div>

                                <div className="button">
                                    <button onClick={handleSignup}>SignUp</button>
                                </div>
                                
                            </div>

                            <div className='footing'>
                           <p>Already have an account?
                            <Link to="/login" style={{color: "white", textDecoration: "none"}}>Login</Link></p>
                           </div>
                        </div>
                        </form>
                       
                </div>
            </div>

        </div>
        </>
    )
}




export default Signup