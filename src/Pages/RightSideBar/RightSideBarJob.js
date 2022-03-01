import React from "react";
import Box from "@material-ui/core/Box";
import classes from "./RightSideBarJob.module.css";
import { Button } from "@material-ui/core";
import moment from 'moment';

 const RightSideBarJob = (props) => {
   console.log(props)
  return (
    <Box>
      <div className={classes.main}>
        <h1 className={classes.heading1}>{props.poistion}</h1>
        <Button variant="outlined" color="primary"className={classes.btn}>
          FullTime
        </Button>
      </div>
      <div className={classes.innerblock}>
        <span  class="material-icons">schedule</span>
        <p  className={classes.innerblockpar}> Posted at {moment(new Date(props.createdAt)).fromNow()}</p>
      </div>
      <div className={classes.innermain}>
      <img
        src="https://kasisto.com/wp-content/themes/kasisto/img/client-logo.png"
        className={classes.img}
      ></img>
      <p className={classes.titleheading}>{props.company}</p>
      <div className={classes.innerblocksecond}>
        <span  class="material-icons">public</span>
        <p  className={classes.innerblocksecondpar}>{props.country}</p>
      </div>
      </div>
    <p className={classes.mainparagraph}>
      {props.desc}
    </p>
    </Box>
  );
};
export default RightSideBarJob