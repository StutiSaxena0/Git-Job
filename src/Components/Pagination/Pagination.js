import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import {setPageData}from '../../redux/action/jobs'



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(10),
      marginBottom: theme.spacing(20),
      marginLeft: theme.spacing(2)
    },
  },
}));



export default function PaginationRounded() {
  const classes = useStyles();
  const [page , setPage]= useState(1)
  const dispatch = useDispatch();


  const handlePage=(e, value)=>{
  setPage(value)
  dispatch(setPageData(page))

}
  return (
    <div className={classes.root}>
      
      <Pagination count={10} variant="outlined" shape="rounded" value={page} onChange={handlePage}/>
    </div>
  );
}