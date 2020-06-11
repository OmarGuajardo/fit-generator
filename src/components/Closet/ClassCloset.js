import React from "react";
import AlertDialog from "./Alert";
import Button from "@material-ui/core/Button";
export default function ClassCloset(props) {
  return (
    <div className={props.className}>
      <div>
        <Button onClick = {()=>props.toggleClass()}>Go Back</Button>
      </div>
      {props.specificCloset.map(item=>{
          return(
              <AlertDialog
              clotheClass = {props.clotheClass}
              key = {item.Name}
              item = {item}
              handleDeleteItem = {props.handleDeleteItem}
              />
          )
      })}
    </div>
  );
}
