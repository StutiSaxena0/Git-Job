import React, { useState } from "react";
import { Paper, Button, InputBase } from "@material-ui/core";
import classes from "./Search.module.css";
import { useDispatch, useSelector } from "react-redux";
import { initiateGETJobs,searchJobs } from "../../redux/action/jobs";
import Cards from "../Card/Card";

function Search(props) {
 
  const [query, setQuery]= useState('')
  const dispatch = useDispatch();


  // const [state, setState] = useState({
  //   desc: "",
  //   company: "",
  //   full_time: false,
  // });
  // const dispatch = useDispatch();
  // const getData = useSelector((state) => state.jobs.jobsDetails);
  // console.log("search-getData", getData);

  // const handleInputChange = (event) => {
  //   dispatch(initiateGETJobs());
  //   const { name, value } = event.target;
  //   setState({ desc: event.target.value });

  //   const filteredJobs = getData.filter((job) => {
  //     if (job.desc == "" || job.desc == null) {
  //       return job;
  //     } else {
  //       return job.desc.toLowerCase().includes(state.desc.toLowerCase());
  //     }
  //   });
  // };

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchJobs(query))
    // props.onSearch(state);
  };

  // const results = getData.map((jobs, index) => {
  //   // console.log(jobs.id, "iddddd")
  //   <Cards key={jobs.id} {...jobs} index={index} />;
  // });

  return (
    <form className={classes["search-box"]} onSubmit={handleSearch}>
      <Paper elevation={3} className={classes.Paper}>
        <span className="material-icons" sx={{}}>
          work_outline
        </span>
        <InputBase
          placeholder="Title, companies, expertise or benefits"
          inputProps={{ "aria-label": "search google maps" }}
          name="description"
          value={query}
          className={classes.input}
          onChange={(e)=>setQuery(e.target.value)}
        />
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.SearchButton}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}

export default Search;
