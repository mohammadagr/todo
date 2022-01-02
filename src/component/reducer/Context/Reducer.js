// import {useContext} from "react";
// import {idGenerator} from '../../state/data-State';
// import '../Reducer.css'
// import {createContext} from "react";
// import dataReducer from "./data-reducer";
// import {TodoListContext} from "./Context";
// import TodoCard from "../ToDoCard/ToDoCard";
// function reducer(state, action) {
//     const {toDoList,dispatch}=useContext(TodoListContext)
//     const {type, payload} = action
//     switch (type) {
//         case 'addCard':
//             return (
//                 [...state, {
//                     id: idGenerator(), name: payload.name, description: payload.description, item: []
//                 }]
//             )
//         case 'deleteCard':
//             return state.filter(item => item.id !== payload.id)
//         case 'addItem':
//             return (
//                 state.map(item => item.id === payload.id ? {
//                     ...item, item: [...item.item, {id: idGenerator(), title: payload.title, status: false}]
//                 } : item)
//             )
//         case 'deleteItem':
//             return (state.map(item => item.id === payload.id ? {
//                 ...item,item:item.item.filter(element=>element.id!==payload.id)
//             } : item))
//     }
//
// }
//
// function ReducerMethod() {
//     // const [toDoList, dispatch] = useReducer(reducer, dataReducer)
//
//     const handleAddTodoCard = () => {
//         const name = prompt('please enter name')
//         const description = prompt('please enter description')
//         dispatch({type: 'addCard', payload: {name, description}})
//     }
//
//     return (
//         <div className='ReducerMethod'>
//             {
//                 toDoList.map(todo => (
//                     <TodoCard key={todo.id} todo={todo}/>
//                 ))
//             }
//             <div>
//                 <button onClick={handleAddTodoCard}>Add</button>
//             </div>
//
//         </div>
//     )
// }
//
// export default ReducerMethod