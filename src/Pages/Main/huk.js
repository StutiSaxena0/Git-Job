import React,{useState,useEffect} from 'react'
import { getJobDetails } from '../../redux/action/jobs';
import axios from 'axios'

export default (props) => {

    const [details, setDetails]= useState({})
    const  getDetailsByJobs = (id) => {
        return axios
        .get(`https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs/${id}`).then((res) => {
             console.log("HUKGetApiDetails", res);
            setDetails(res);
        });
    };
    useEffect(() => {
        getDetailsByJobs(props)
      
    }, []);
     
  return [details]
}
