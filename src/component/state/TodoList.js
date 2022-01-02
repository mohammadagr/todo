import dataState, {idGenerator} from './data-State';
import {TodoContext} from "../Context/TodoContext";
import './state.css'
import TodoCard from "./todoCard/TodoCard";
import {useContext} from "react";
import {faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function TodoList() {
    const {toDoList, setToDoList} = useContext(TodoContext)
    const handleAddTodoList = () => {
        const name = prompt('please enter name')
        const description = prompt('please enter description')
        setToDoList([
            ...toDoList,
            {id: idGenerator(), name, description, item: []}])

    }
    return (
        <div className='TodoList'>
            {
                toDoList.map((todo) => (
                    <TodoCard
                        todo={todo}
                        key={todo.id}
                    />
                ))
            }
            <div className='createIcon'>
                <button onClick={handleAddTodoList}>Create <FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    )
}

export default TodoList