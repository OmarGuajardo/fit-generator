import React from 'react';
import './BotHalf.css'
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DropDown from './DropDown'

export default function OutfitHandle(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className = "alertContainer">
      <Button className = "testBtn" variant="outlined"  onClick={handleClickOpen}>
       OUTFIT # {props.number + 1}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">OUTFIT # {props.number + 1}</DialogTitle>
            <DialogContent>
               <DropDown 
               title = "Top"
               info = {props.info.Top}
               />
               <DropDown 
               title = "Bottom"
               info = {props.info.Bottom}
               />
               <DropDown 
               title = "Shoes"
               info = {props.info.Shoe}
               />
            </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}