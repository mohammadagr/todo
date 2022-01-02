const checkBox = ({todo,items}) => {


    return (
        <div>
            <input type={"checkbox"} checked={items.status} id={todo.id + items.id}/>
            <label htmlFor={items.id + todo.id}> {items.title} </label>
        </div>
    )
}
export default checkBox