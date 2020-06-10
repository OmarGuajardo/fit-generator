import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import LoopIcon from '@material-ui/icons/Loop';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';



export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);
  const [numFits, setNumFits] = React.useState(0);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    props.handleGenerate(numFits)
  };

  function handleChange(e){
      setNumFits(e.target.value)
  }
  return (
    <div>
      <Fab onClick={handleClickOpen} aria-label="add">
       <LoopIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Please enter the number of outfits you want to generate"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          <TextField
          onChange = {handleChange}
          id="standard-number"
          label="Number of Fits"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Generate
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}