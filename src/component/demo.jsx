import React, { useEffect } from 'react';
import {SetTheme} from "../redux/reducer/theme";
import { useSelector, useDispatch } from "react-redux";
import {Button} from "@material-ui/core";

function Demo() {
  const dispatch =useDispatch();
  let darken= useSelector((state)=> state.theme.dark);

 // console.log("hey " , darken)
//  useEffect(()=>{
//    dispatch(SetTheme());
//  },[dispatch]);
  
  return (
    <div>
      {console.log("hey " , darken)}

      <Button   color="primary" variant="contained" onClick={()=>{

        dispatch(SetTheme());

      }} > click here</Button>
    </div>
  );
}

export default Demo;