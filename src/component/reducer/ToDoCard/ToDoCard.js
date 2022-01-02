import {useContext} from "react";
import {TodoListContext} from "../Context/Context";
import {types} from '../Context/Reducer'
import ToDoItem from "../ToDoItem/ToDoItem";

const TodoCard = ({todo}) => {
    const {dispatch} = useContext(TodoListContext)
    const handleAddTodoItem = (id) => {
        const title = prompt('please enter title')
        dispatch({type: 'addItem', payload: {title, id}})
    }
    const handleDeleteTodoCard = (id) => {
        dispatch({type: 'deleteCard', payload: {id}})
    }
    const handleDeleteTodoItem = (id) => {
        dispatch({type: 'deleteCard', payload: {id}})
    }

    return (
        <div>
            <div className='todoCard' key={todo.id}>
                <div className='header'>
                    <h1>{todo.name}</h1>
                    <button onClick={() => handleDeleteTodoCard(todo.id)}>Delete</button>
                </div>
                <p>{todo.description}</p>

                {
                    todo.item.map(items => (
                        <ToDoItem/>
                    ))
                }
                <button onClick={() => handleAddTodoItem(todo.id)}>Add Item</button>
                <button onClick={() => handleDeleteTodoItem(todo.id)}>Delete Item</button>

            </div>
        </div>
    )
}
export default TodoCard