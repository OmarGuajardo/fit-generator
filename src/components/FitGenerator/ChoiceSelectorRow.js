import React from 'react'
import SelectComponent from './SelectComponent'
import TextFieldComponent from './TextFieldComponent'

export default function ChoiceSelectorRow(props) {
    if(props.list.length > 0){
        return(
            <div>
                <SelectComponent
                selectedItem = {props.selectedItem}
                handleOnChange = {props.handleOnChange}
                title = {props.name}
                list = {props.list}
                />
            </div>
            )
        }
        else{
            return(
                <div>
                    <TextFieldComponent 
                     selectedItem = {props.selectedItem}
                     handleOnChange = {props.handleOnChange}
                     title = {props.name}
                    />
                </div>
                )
            }
}
