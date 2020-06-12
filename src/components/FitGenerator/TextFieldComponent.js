import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '17ch',
    },
  },
}));

export default function TextFieldComponent(props) {
  const classes = useStyles();

  let data = props.selectedItem[props.title]
  let choice = ''
  if(data !== undefined){
    choice = data
  }
  return (
    <form  className={classes.root} noValidate autoComplete="off">
      <TextField 
      value = {choice}
      name = {props.title} 
      onChange = {props.handleOnChange}
      id="outlined-basic" 
      label={props.title}
      variant="outlined" />
    </form>
  );
}