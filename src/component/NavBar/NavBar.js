import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faTimes} from "@fortawesome/free-solid-svg-icons";
import '../NavBar/NavBar.css'
import {useContext, useState} from "react";
import {TodoContext} from "../Context/TodoContext";
// import '../SideBar/SideBar.css'
export default function NavBar() {
    const [show,setShow]=useState(false)
    const toDoList=useContext(TodoContext)
    console.log(toDoList)


    return (
        <>
        <div>
            <nav className="navbar">

                <span>To Do</span>

            </nav>
        </div>
            {/*{show &&*/}
            {/*<div id="mySidebar" className="sidebar">*/}
            {/*    <button onClick={() => setShow(false)}><FontAwesomeIcon icon={faTimes}/></button>*/}
            {/*    {toDoList.map(item=><p>{item.name}</p>)}*/}
            {/*</div>*/}
            {/*}*/}
            <div id="main">

            </div>

            </>
    )
}