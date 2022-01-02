import React from "react";
import {createContext,useState} from "react";
import dataState from "../state/data-State";
export const TodoContext=createContext({toDoList:[], setToDoList:(input)=>{}})
function TodoContextProvider({children}){
    const [toDoList, setToDoList]=useState(dataState)
    return(
        <TodoContext.Provider value={{toDoList, setToDoList}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider