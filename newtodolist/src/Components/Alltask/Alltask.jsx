import React from "react"
import "./Alltask.css"
import { RiTaskFill } from "react-icons/ri";
import { MdOutlineEditLocation } from "react-icons/md";
import { TiDeleteOutline } from "react-icons/ti";
import { HiOutlineDotsVertical } from "react-icons/hi";
import { FaBell } from "react-icons/fa6";
import { MdAdd } from "react-icons/md";
import 'animate.css';
import { useState } from "react";
import { FaRegCircle } from "react-icons/fa6";
import { FaRegCircleCheck } from "react-icons/fa6";
import {toast} from "react-toastify"


const Alltask =()=>{

    const [popShow, setPopShow] = useState(false)
    const [completed, setCompleted] = useState(false)
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [date, setDate] = useState('');


 const handleComplete = () =>{
    setCompleted(true)
 }

 const handleNewTask = async () => {
    try {
      const response = await axios.post('https://taskit-qlv4.onrender.com/newTodo/65ab2754aa309c3e7b309e94', {
        title,
        content,
        date,
      });
      toast.info("New Task Added")// Handle the response accordingly
    } catch (error) {
      toast.error(error.message);
    }
  };


    return(
        <>
        <div className="allTaskHolder">
            <div className="allTaskFrame" style={{cursor: "pointer"}}>
                <div className="header">
                    <div className="lefts">
                        <div className="butHolder">
                            <RiTaskFill  style={{fontSize: "20px"}}/>
                            <p>All My Task</p>
                        </div>
                    </div>
                    {/* <div className="rights">
                        <div className="remind">
                        <FaBell />
                            <p>Remind Me</p>
                        </div>
                    </div> */}
                </div>

                <div className="TaskCard">
                    <div className="taskCard">
                        <div className="text">
                            {
                                completed? <FaRegCircleCheck onClick={handleComplete}/>: <FaRegCircle  onClick={handleComplete}/>
                            } 
                             
                            <p>Call victor by 2pm</p>
                        </div>
                        <MdOutlineEditLocation style={{fontSize: "20px", color: "blue"}}/>
                        <HiOutlineDotsVertical style={{fontSize: "20px"}}/>
                        <TiDeleteOutline  style={{color: "red", fontSize: "20px"}}/>
                    </div>
                    
                    
                   
                    {
                    popShow ?(
                        <div className='RegisterPop'>
                        <div className='PopCard'>
                        <div className='ClosePop'><span onClick={()=>setPopShow(false)}>X</span></div>
                        <input type="text"  placeholder="title" className="inputt" onChange={(e) => setTitle(e.target.value)}/>
                        <input type="text"  placeholder="type here" className="inputt" onChange={(e) => setContent(e.target.value)}/>

                        <button className="butz" onClick={handleNewTask}>Add</button>
                        
                        </div>
                     </div>
                    ): null
                }

                    <div className="taskCards">
                        <MdAdd  style={{fontSize: "14px", color: "blue"}} onClick={()=>setPopShow(true)}/>
                        <p style={{fontSize: "14px", color: "blue"}}>Add A Task</p>
                        
                    </div>
                </div>

            </div>

           
        </div>
        </>
    )
}



export default Alltask