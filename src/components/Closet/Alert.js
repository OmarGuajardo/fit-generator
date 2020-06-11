import React from 'react';
import './Alert.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleDelete(){
    props.handleDeleteItem(props.clotheClass,props.item.ID)
  }

  return (
    <div className = "alertContainer">
      <Button className = "testBtn" variant="outlined"  onClick={handleClickOpen}>
        {props.item.Name}
      </Button>
      <Dialog
      
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{props.item.Name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          {Object.keys(props.item).map(key =>{
            if(key !== "Name" && key !== "ID")
            {
              return(<div className = "attributeHolder" key = {props.item[key]}><strong>{key}: </strong>  {props.item[key]}</div>)
            }
            return(null)

          })}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleDelete} color="primary" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}