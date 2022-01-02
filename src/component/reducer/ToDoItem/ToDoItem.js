import {useContext} from "react";
import {TodoListContext} from "../Context/Context";
import {types} from '../Context/Reducer'
import CheckBox from '../../reducer/CheckBox/CheckBox'
const ToDoItem = ({todo,items}) => {


    return (
        <div>
            <ul>
                <li>
                    <CheckBox/>
                </li>
            </ul>

        </div>
    )
}
export default ToDoItem