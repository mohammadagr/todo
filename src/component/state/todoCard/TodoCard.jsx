import TodoItems from "../todoItems/TodoItems";
import {TodoContext} from "../../Context/TodoContext";
import {useContext} from "react";
import {idGenerator} from "../data-State";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {faPlus} from "@fortawesome/free-solid-svg-icons/faPlus";

const TodoCard = ({todo}) => {
    const {toDoList, setToDoList} = useContext(TodoContext)
    const handleDeleteToDoList = (id) => {
        setToDoList(toDoList.filter((item) => item.id !== id))
    }
    const handleAddTodoItem = (id) => {
        const title = prompt('please enter title')
        setToDoList(toDoList.map((item) => item.id === id ?
            {
                ...item, item: [...item.item, {id: idGenerator(), title, status:false}]
            }
            :
            item))
    }
    return (
        <div className='todoCard' key={todo.id}>
            <div className='header'>
                <h1>{todo.name}</h1>
                <button onClick={() => handleDeleteToDoList(todo.id)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
            <p>{todo.description}</p>
            <TodoItems todo={todo}/>
            <div className='AddTodoItem'>
                <button onClick={() => handleAddTodoItem(todo.id)}>Add New Item<FontAwesomeIcon className='handleAddTodoItem' icon={faPlus} /></button>
            </div>
        </div>
    )
}
export default TodoCard