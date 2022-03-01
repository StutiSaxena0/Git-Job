import { Container, Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import _ from "lodash";
import Topbar from "../Topbar/Topbar";
import Search from "../Search/Search";
import LeftSideBar from "../LeftSideBar/LeftSideBar";

import Pagination from "../Pagination/Pagination";
import Footer from "../Footer/Footer";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { initiateGETJobs } from "../../redux/action/jobs";

import Results from "../../Results";
function Layout(props) {
  const [results, setResults] = useState([]);
  const [errors, setErrors] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [checked, setChecked] = useState("");



  const dispatch = useDispatch();

  useEffect(() => {
    setResults(props.jobs);
  }, [props.jobs]);

  useEffect(() => {
    setErrors(props.errors);
  }, [props.errors]);

  useEffect(() => {
    dispatch(initiateGETJobs());
  }, []);

  

  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Container>
      <Grid item lg={12} xs={12} container>
        <Topbar />
      </Grid>
      <Grid item lg={12} xs={12} container>
        <Search />
        
      </Grid>
      <Grid item lg={12} container spacing={2}>
        <Grid item lg={4} xs={12}>
          <LeftSideBar onChange={handleChange} currentValue={checked} />
        </Grid>
        <Grid item lg={8} xs={12}>
       
          <Results results={results} status={checked} />

          {isLoading && <p className="loading">Loading...</p>}
        </Grid>
        <Grid item lg={12} xs={12} container justifyContent="flex-end">
          {props.jobs.length > 0 ? (
            <Pagination/>
          ) : (
            <h1>No post to display</h1>
          )}
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
  );
}

const mapStateToProps = (state) => ({
  jobs: state.jobs.jobsDetails,
  errors: state.errors,
});

export default connect(mapStateToProps)(Layout);
