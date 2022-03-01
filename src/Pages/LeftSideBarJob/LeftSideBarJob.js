import React from "react";
import { makeStyles } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import classes from './LeftSideBarJob.module.css'


function LeftSideBarJob(props) {
   
  return (
    <div >
      <Box className={classes.root} >
        <Typography className={classes.paper}>
          <span class="material-icons" style={{color:'#1E86FF'}} >arrow_back</span>
          <Link to="/"style={{marginLeft:'20px', cursor:"pointer" ,color:'#1E86FF'}}>Back to home </Link>
         
          </Typography>
        <div  className={classes.heading} >
          How to Apply
        </div>
        <div  className={classes.emailheading} >
        Please email a copy of your resume and online portfolio to<span>{props.ccemail}</span> & <span>{props.ccmail}</span>
        </div>
      </Box>
    </div>
  );
}
export default LeftSideBarJob