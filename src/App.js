import data from "./data";
import {idGenerator} from "./data";
import './App.css';
import './component/reducer/Reducer.css'
import {useState} from "react";
import StateMethod from "./component/state/TodoList";
import Reducer from "./component/reducer/Context/Reducer";
import ToDoListContainer from "./component/ToDoListContainer/ToDoListContainer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";
import NavBar from "./component/NavBar/NavBar";
import SideBar from "./component/SideBar/SideBar";


function App() {


    return (
        <>
            <NavBar/>

            <div className='app'>
                {/*<StateMethod/>*/}
                {/*<Reducer/>*/}
                <ToDoListContainer/>
            </div>
        </>

    );
}

export default App;
