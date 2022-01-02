import {createContext, useReducer} from "react";
import Reducer from "./Reducer";
import dataReducer from "./data-reducer";
export const TodoListContext=createContext({toDoList:[],dispatch:()=>{}})
const TodoListContextProvider = ({children}) => {
    const [toDoList,dispatch]=useReducer(Reducer,dataReducer)
    return (
        <TodoListContext.Provider value={{toDoList,dispatch}}>
            {children}
        </TodoListContext.Provider>
    )
}
export default TodoListContextProvider