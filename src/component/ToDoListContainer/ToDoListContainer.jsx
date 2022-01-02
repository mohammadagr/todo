import TodoList from "../state/TodoList";
import TodoContextProvider from "../Context/TodoContext";
import NavBar from "../NavBar/NavBar";
function ToDoListContainer(){
    return(
       <TodoContextProvider>
           <TodoList/>
       </TodoContextProvider>
    )
}
export default ToDoListContainer