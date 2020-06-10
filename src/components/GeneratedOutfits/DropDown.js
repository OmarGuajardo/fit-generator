import React from 'react'
import './BotHalf.css'

export default function DropDown(props) {

    const [closed,setClosed] = React.useState("true")

    function togggleClosed(){
        setClosed(!closed)
    }
    return (
        <div className = "dropdown-container">
            <div onClick = {() => togggleClosed()} className="dropdown-btn">{props.title}</div>
            <div  className={closed ? "dropdown-content closed" : "dropdown-content"}>
            {Object.keys(props.info).map(key =>{
              return(<div key = {props.info[key]}><strong>{key}: </strong>  {props.info[key]}</div>)


                })}
                {/* <div>{props.info.Name}</div> */}
                {/* <div>INFO</div> */}
            </div>
        </div>
    )
}

