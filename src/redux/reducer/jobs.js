import * as actionTypes from '../action/actionTypes';
const initialState ={
  jobsDetails:[],
  jobDetail:[],
  data:[],
  isResponse:false
}

const jobReducers = (state=initialState, action)=>{
  switch(action.type){
      case actionTypes.GET_DETAILS:
          return {
            ...state,
            jobsDetails:action.payload
          }
       case actionTypes.GET_JOB_DETAILS:
       return {
         ...state,
         data:action.data
        }

      case actionTypes.GET_DETAILS_RADIO_BTN:
        return {
          ...state,
          jobDetail:action.payload
          }

      // case actionTypes.LOAD_MORE_JOBS:
      //     return [...state,...action.jobs];
      default:
          return state;
  }
}




export default jobReducers;
