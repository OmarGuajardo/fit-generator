import React from 'react'

export default function ChoiceSelectorRow(props) {
    if(props.list.length > 0){
        return(
            <div>
            {/* <div className = "ChoiceSelectorIndicator">{props.name}:</div> */}

                <select className = "ChoiceSelectorRow" defaultValue = {props.name} name = {props.name} onChange = {props.handleOnChange}>
                <option  disabled value = {props.name}>Select a {props.name}</option>
                    {props.list.map(item => {
                            return(<option  key = {item} value = {item}>{item}</option>)
                    }
                    )}
        
                </select>
            </div>
            )
        }
        else{
            return(
                <div>
                 {/* <div className = "ChoiceSelectorIndicator">{props.name}:</div> */}
                    <input className = "ChoiceSelectorRow Input" name = {props.name}type="text" onChange = {props.handleOnChange} placeholder = {props.name}/>
                </div>
                )
            }
}
