import axios from "axios";
import { GetApiDetails, getApiJobDetails } from "../../Api/Api";
import * as actionType from "./actionTypes";

export const initiateGETJobs = () => {
  return async function (dispatch) {
    return GetApiDetails().then((res) => {
      //console.log('getApiDetails',res)
      dispatch({
        type: actionType.GET_DETAILS,
        payload: res.data,
      });
    });
  };
};

export const searchJobs = (query) => {
  return async function (dispatch) {
    axios
      .get(
        `https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?search=${query}`)
      .then((res) => {
        // console.log(res.data,"search response")
        dispatch({
          type: actionType.GET_DETAILS,
          payload: res.data,
        });
      })
      .catch((err) => {
        //console.log('error', err)
      });
  };
};
export const getJobDetails = (id) => {
  return function (dispatch) {
    axios
      .get(`https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs/${id}`)
      .then((res) => {
        dispatch({
          type: actionType.GET_JOB_DETAILS,
          data:res.data
        });
     
      });
      
  };
};

export const getDetailByRadioBtn =(value)=>{
  return async function (dispatch) {
    axios
      .get(
        `https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?search=${value}`)
      .then((res) => {
        console.log(res.data,"search response")
        dispatch({
          type: actionType.GET_DETAILS_RADIO_BTN,
          payload: res.data,
        });
      })
      .catch((err) => {
        alert('error', err)
      });
  };
}
export const searchCity = (searchData) => {
  return async function (dispatch) {
    axios
      .get(
        `https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?search=${searchData}`)
      .then((res) => {
        // console.log(res.data,"search response")
        dispatch({
          type: actionType.GET_DETAILS,
          payload: res.data,
        });
      })
      .catch((err) => {
        //console.log('error', err)
      });
  };
};
export const setPageData = (page) => {
  return async function (dispatch) {
    axios
      .get(
        `https://620f2f65ec8b2ee2833655ed.mockapi.io/api/v1/jobs?page=${page}&limit=5`)
      .then((res) => {
        console.log(res.data,"search page reaqust")
        dispatch({
          type: actionType.GET_DETAILS,
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log('error', err)
      });
  };
};