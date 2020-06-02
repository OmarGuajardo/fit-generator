import React from 'react'

export default function ClassSelector(props) {
    return(
        <div>
            {/* <div className = "ChoiceSelectorIndicator">Class:</div> */}
            <select  className = "ChoiceSelectorRow" defaultValue = "Class" onChange = {props.handleChangeClass}>
                
               <option disabled value = "Class">Select a Class</option>
               <option key = "Top" value = "Top">Top</option>
               <option key = "Bottom" value = "Bottom">Bottom</option>
               <option key = "Shoes" value = "Shoes">Shoes</option>
            </select>
        </div>
        )
}
