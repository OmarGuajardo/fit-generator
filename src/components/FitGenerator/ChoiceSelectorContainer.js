import React from 'react'
import ChoiceSelectorRow from './ChoiceSelectorRow'

export default function ChoiceSelectorContainer(props) {
    return(
        <div>
            {props.atts.map(item => <ChoiceSelectorRow 
            key = {Object.keys(item)[0]} 
            name = {Object.keys(item)[0]} 
            list = {Object.values(item)[0]}
            handleOnChange = {props.handleOnChange}
            />)}
        </div>
        )
}
