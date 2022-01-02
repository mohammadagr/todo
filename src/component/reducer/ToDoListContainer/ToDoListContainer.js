import TodoListContextProvider, {TodoListContext} from "../Context/Context";
import TodoList from "../../state/TodoList";
import {useContext} from "react";

function ToDoListContainer() {
    const {dispatch} = useContext(TodoListContext)
    return (
        <TodoListContextProvider>
            <TodoList/>
        </TodoListContextProvider>
    )
}

export default ToDoListContainer