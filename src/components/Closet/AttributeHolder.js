import React from 'react'

export default function AttributeHolder(props) {

    console.log(props.key)
    console.log(props.item)
    if(props.key !== "Name")
    {
      return(<div className = "attributeHolder" key = {props.item[props.key]}><strong>{props.key}: </strong>  {props.item[props.key]}</div>)
    }
    return(null)
}
