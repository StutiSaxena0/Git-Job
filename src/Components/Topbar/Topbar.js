import React from 'react'
import {Toolbar, Button,makeStyles, Typography} from '@material-ui/core'
import classes from './Topbar.module.css'


function Top() {
    
  return (
    <Toolbar>
        <span className={classes.heading}>Github</span>
        <span className={classes.jobs}>Jobs</span>
      </Toolbar>
  )
}

export default Top;