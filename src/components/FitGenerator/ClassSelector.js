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

export default function ClassSelector(props) {
  const classes = useStyles();
  let data = props.selectedItem
  let choice = ''
  if(data !== undefined){
    choice = data
  }



  const handleChange = (event) => {
    choice = event.target.value;
    props.handleChangeClass(event)
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Class</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={choice}
          onChange={handleChange}
          label="choice"
          name = "Class"
          className = "input-label"
        >
          <MenuItem  disabled value="">
            <em>Select a Class</em>
          </MenuItem>
          <MenuItem key = "Top" value="Top">Top</MenuItem>)
          <MenuItem key = "Bottom" value="Bottom">Bottom</MenuItem>)
          <MenuItem key = "Shoes" value="Shoes">Shoes</MenuItem>)
        </Select>
      </FormControl>
         </div>
  );
}