import React from "react";
import Topbar from "../../Components/Topbar/Topbar";
import { Container, Grid } from "@material-ui/core";
import Footer from "../../Components/Footer/Footer";
import LeftSideJobBar from "../LeftSideBarJob/LeftSideBarJob";
import RightSideBarJob from "../RightSideBar/RightSideBarJob";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getApiJobDetails } from "../../Api/Api";
import { useParams } from "react-router-dom";
import getDetailsByJobs from "./huk";
import { getJobDetails } from "../../redux/action/jobs";

const Main = () => {

  // window.location.reload(false)
  const { id } = useParams();
  // console.log("Main",id)
  const dispatch = useDispatch();

  const getData = useSelector((state) => state.jobs.data);
 
  const {city,country,desc,name,ccmail,ccemail,state,position,type,createdAt,company} = getData

  useEffect(() => {
    dispatch(getJobDetails(id));
   

    
  }, [id]);

  return (
    <React.Fragment>
      <Container>
        <Grid item lg={12} xs={12} container>
          <Topbar />
        </Grid>
        <Grid item lg={12} container spacing={2}>
          <Grid item lg={4} xs={12}>
            <LeftSideJobBar ccmail={ccmail} ccemail={ccemail}/>
          </Grid>
          <Grid item lg={8} xs={12}>
            <RightSideBarJob city={city} country={country} desc={desc} createdAt={createdAt} poistion={position} company={company}/>
          </Grid>
        </Grid>

        <Grid
          item
          lg={12}
          xs={12}
          container
          spacing={0}
          alignItems="center"
          justify="center"
        >
          <Footer />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Main;
