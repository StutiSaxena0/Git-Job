import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  CardMedia,
  Box,
} from "@material-ui/core";
import classes from "./Card.module.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import {useDispatch }from 'react-redux'
import {getJobDetails}from '../../redux/action/jobs'
import {Link}from "react-router-dom"

function Cards(props) {
  const { id, position, createdAt, company, country, title, index } = props;
// const dispatch = useDispatch()
//   // console.log(props, "cardss")
//   let navigate = useNavigate();
//   const redirectHandler = (id) => {
//     navigate("/main");

//     dispatch(getJobDetails(id))
    
//   };

  return (
    <Card className={classes.card} key={id}>
      <CardMedia
        image="https://kasisto.com/wp-content/themes/kasisto/img/client-logo.png"
        // alt="company logo"
        className={classes["c-img"]}
      />
      <Box className={classes.Box}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            {company}
          </Typography>
          <Typography variant="h6" component="h4">
            {position}
          </Typography>
        </CardContent>
        <CardActions className={classes["cardAction-Btn"]}>
          <Button
            className={classes["btn-full"]}
            variant="outlined"
            color="default"
            
          ><Link to={`/main/${id}`}>Full time</Link>
            
          </Button>
        </CardActions>
      </Box>
      <Box
        className={classes["box-icon-line"]}
        sx={{ display: "flex", flexDirection: "row" }}
      >
        <Typography component="span" className={classes["icon-line"]}>
          {country}
        </Typography>
        <Typography component="span" className={classes["icon-line-two"]}>
          {moment(new Date(createdAt)).fromNow()}
        </Typography>
      </Box>
    </Card>
  );
}

export default Cards;
