import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SelectComponent(props) {
  const classes = useStyles();
  let data = props.selectedItem[props.title]
  let choice = ''
  if(data !== undefined){
    choice = data
  }



  const handleChange = (event) => {
    // setChoice(event.target.value);
    choice = event.target.value;
    props.handleOnChange(event)
  };



  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">{props.title}</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={choice}
          onChange={handleChange}
          label="choice"
          name = {props.title}
          className = "input-label"
        >
          <MenuItem disabled value="">
            <em>Select a {props.title}</em>
          </MenuItem>
          {props.list.map(item => {
                            return(
                                <MenuItem key = {item} value={item}>{item}</MenuItem>)
                    }
                    )}
        </Select>
      </FormControl>
         </div>
  );
}