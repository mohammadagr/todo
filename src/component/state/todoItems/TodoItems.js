import React, {useContext, useState} from "react";
import CheckBox from "../../CheckBox/CheckBox";
import {TodoContext} from "../../Context/TodoContext";
import {faEdit, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const TodoItems = ({todo}) => {
    const {toDoList, setToDoList} = useContext(TodoContext)
    const handleTodoItemStatus = (todoID, itemId, e) => {
        setToDoList(toDoList.map((todo) =>
            todo.id === todoID
                ?
                {
                    ...todo,
                    item: todo.item.map((item) =>
                        item.id === itemId
                            ?
                            {...item, status: e.target.checked} : item
                    )
                } : todo
        ))
    }
    const handleDeleteToDoItem = (todoID, itemId) => {
        setToDoList(toDoList.map((todo) =>
            todo.id === todoID
                ?
                {
                    ...todo,
                    item: todo.item.filter((item) => item.id !== itemId)
                }
                :
                todo
        ))
    }
    const handleEditing=(todoID,oldItem)=>{
        const name=prompt('item',oldItem)
        setToDoList(toDoList.map((todo) =>
            todo.id === todoID
                ?
                {
                    ...todo,
                    item: todo.item.map(element=>element.id===oldItem.id?{...oldItem,name}:element)
                }
                :
                todo
        ))
    }
    return (
        <ul>
            {
                todo.item.map((element) => (
                    <li key={`${todo.id}-${element.id}`}>
                        <div className='items'>
                            <label className='container'>
                                {element.title}
                            <input
                                onChange={(e) => handleTodoItemStatus(todo.id, element.id, e)}
                                id={`${todo.id}-${element.id}`}
                                checked={element.status}
                                type='checkbox'
                            />
                                <span className="checkmark"></span>
                            </label>
                            <div className='c'>
                            <div className='b'>
                            <button onClick={()=>handleEditing(todo.id,element.title)}><FontAwesomeIcon icon={faEdit} /></button>
                            </div>
                            <div className='a'>
                            <button onClick={() => handleDeleteToDoItem(todo.id, element.id)}><FontAwesomeIcon icon={faTimes} /></button>
                            </div>
                            </div>
                        </div>



                    </li>
                ))
            }
        </ul>
    )
}
export default TodoItems