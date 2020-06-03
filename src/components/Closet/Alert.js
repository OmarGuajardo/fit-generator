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

  return (
    <div className = "alertContainer">
      <Button className = "testBtn" variant="outlined" color="primary" onClick={handleClickOpen}>
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
        {Object.keys(props.item).map(key =>
            <p key = {props.item[key]}>{key}:   {props.item[key]}</p>
            )}
          {/* <DialogContentText id="alert-dialog-description">
          {Object.keys(props.item).map(key =>
            <p key = {props.item[key]}>{key}:   {props.item[key]}</p>
            )}
          </DialogContentText> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Delete
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Edit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}