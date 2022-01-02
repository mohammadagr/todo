import React from "react";
function CheckBox({checked,id,label,onChange,name}){
    return(
        <div>
            <input name={name} type="checkbox" checked={checked} id={id} onChange={onChange}/>

            <label htmlFor={id}> {label} </label>
        </div>
    )
}
export default CheckBox