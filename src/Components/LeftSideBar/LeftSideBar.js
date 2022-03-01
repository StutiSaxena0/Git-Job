import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
  Paper,
  InputBase,
  Checkbox,
  FormGroup,
} from "@material-ui/core";
import classes from "./LeftSideBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { searchJobs,searchCity } from "../../redux/action/jobs";
import Results from '../../Results';

function Leftbar(props) {
  
  const [state, setState] = useState("");
  const [searchData, setSearchData] = useState("");

  const dispatch = useDispatch();
  const radioData = useSelector((state) => state.jobs.jobsDetials);
 

  
   const handleSubmit=(event)=>{
    setSearchData(event.target.value)
   dispatch(searchCity(searchData))
   }
  
  return (
    <>
    {/* <Results status={checked}/> */}
    <FormControl >
      {/* <FormGroup className={classes.formGroup} onSubmit={handleChange} >
        <FormControlLabel
          control={<Checkbox color="default" checked={value} />}
          label="Full time"
        />
      </FormGroup> */}
        <FormControlLabel
        label="Full-Time"
        control={
      <Checkbox
      checked={props.currentValue}
      onChange={props.onChange}
      inputProps={{ 'aria-label': 'controlled' }}
      color="primary"/>
    }
    />
      <FormLabel className={classes.formLabel}>Location</FormLabel>
      <Paper elevation={2} className={classes["leftbar-search"]}>
        {/* <IconButton sx={{ p: '10px' }} aria-label="menu">
        <PublicIcon/>
        </IconButton> */}
        <InputBase
          placeholder="City, state,zip code or country" value={searchData}
         onChange={handleSubmit}
        />
      </Paper>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        // value={value}
      
      >
        <FormControlLabel
          value="Guinea-Bissau"
          control={<Radio color="primary" />}
          label="Guinea-Bissau"
        />
        <FormControlLabel
          value="Amsterdam"
          control={<Radio color="primary" />}
          label="Amsterdam"
        />
        <FormControlLabel
          value="New York"
          control={<Radio color="primary" />}
          label="New York"
        />
        <FormControlLabel
          value="Berlin"
          control={<Radio color="primary" />}
          label="Berlin"
        />
      </RadioGroup>
    </FormControl>
    </>
  );
}

export default Leftbar;
