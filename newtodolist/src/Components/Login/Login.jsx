import React from "react"
import "./Login.css"
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import {toast} from "react-toastify"
import {useNavigate} from "react-router-dom"

const Login = ()=>{
    const [showPassword, setShowPassword] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   const Nav = useNavigate();

    const handleShowpassword=()=>{
        setShowPassword(!showPassword)
    }

    const handleLogin = async () => {
        try {
          const response = await axios.post('https://taskit-qlv4.onrender.com/login', {
            email,
            password,
          });
          toast.info("login successful"); 
          Nav("/main")
          // Handle the response accordingly
        } catch (error) {
            console.log(error)
          toast.error(error.message);
        }
      };
    
return(
    <>
    <div className="loginHolder">
        <div className="loginWrap">
            <div className="top">
                <h1>TaskIt</h1>
            </div>
            <div className="down">
                <form action="">
                <div className="card">
                    <div className="fields">
                        <div className="high">
                            <div className="inf">
                            <p>Email</p>
                            </div>
                            <div className="topz">
                            <input type="email" placeholder="Email"  required onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            
                        </div>
                        <div className="high">
                            <div className="inf">
                            <p>Password</p>
                            </div>
                            <div className="topz">
                            <input type={showPassword? "text":"password"} placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                            {
                            showPassword?  <FaRegEye onClick={handleShowpassword} style={{fontSize: "12px"}}/>:<FaEyeSlash onClick={handleShowpassword} style={{fontSize: "12px"}}/>
                            }
                            </div>
                        </div>

                        <div className="button">
                                    <button onClick={handleLogin}>Login</button>
                                </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
    
    </>
)

}





export default Login