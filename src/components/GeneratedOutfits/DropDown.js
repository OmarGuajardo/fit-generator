import React from 'react'
import './BotHalf.css'

export default function DropDown(props) {
    return (
        <div className = "dropdown-container">
            <div className="dropdown-btn">{props.title}</div>
            <div  className="dropdown-content">
            {Object.keys(props.info).map(key =>{
                if(key !== "ID"){
                    return(<div key = {props.info[key]}><strong>{key}: </strong>  {props.info[key]}</div>)
                }
                else
                {
                    return(null)
                }
                })}
            </div>
        </div>
    )
}

