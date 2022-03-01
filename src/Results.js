import React from 'react';
import Cardss  from './Components/Card/Card'
import { useSelector } from 'react-redux';
import './Results.css'
const Results = ({ results, status }) => {

  

    const cityData = useSelector(state=>state.jobs.jobsDetails)
    //console.log(results)
    const resultsBaba = results ? results.map((job, index) => (
      <Cardss key={job.id} {...job} index={index} />
    ))
    : results.filter(jobs=>jobs.state === cityData.state || jobs.country === cityData.country || jobs.zipcode === cityData.zipcode || jobs.city === cityData.city).map((job, index) => (
      <Cardss key={job.id} {...job} index={index} />
    ))
  return (
    <div className="search-results">
 {/* results.filter(jobs=>jobs.id <= 5 ||jobs.state === cityData.state || jobs.country === cityData.country || jobs.zipcode === cityData.zipcode || jobs.city === cityData.city).map((job, index) => (
      <Cardss key={job.id} {...job} index={index} />
    ))
     */}
      {status === true ? resultsBaba :<h1 className='heading'>Sorry we have only Full-Times Jobs available. Please select the Full-Time option</h1> }
    </div>
  );
};

export default Results;