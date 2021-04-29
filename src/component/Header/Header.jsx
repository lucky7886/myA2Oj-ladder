/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";
import {
  AppBar, Toolbar, Button, withStyles, Typography,
} from "@material-ui/core";
import { blue, green } from "@material-ui/core/colors";
import { NavLink } from "react-router-dom";
// import clsx from "clsx";
//import pedmax from "../../assets/Pedmax.svg";
import headerStyles from "./style";
import goku from "../../assest/goku.jpg";
import code from  "../../assest/codeforces.png"
import HomeIcon from '@material-ui/icons/Home';
import Prakhar from "../../assest/prakhar.jpg"
import  TotProblem from "../totProblems/allProblems";

 let  totCount=0 ;
const Header = () => {
 totCount= <TotProblem />
 console.log("hey", {totCount});
  const classes = headerStyles();

  return (
    <AppBar position="sticky" className={classes.root1}>

      <Toolbar  style={{backgroundColor:" #404040", height:"10px"}}className={classes.customizeToolbar}>
        <img width="60px" height="50px"  className={classes.imgg} src={goku} alt="Prakhar" />

        <div className={classes.divMargin}>
          <div><HomeIcon/></div>
        
          <NavLink
            exact
            to="/Home"
              activeStyle={{
              fontWeight: "bold",
              color: "#ffb366",
            }}
            className={classes.navlink}
          >
            Home
          </NavLink>
        </div>

        <div style={{marginLeft:"67px"}}>

          <img
          src={code}
            alt="c"
            width="22px"
            height="22px"
            style={{backgroundColor:"blue"}}
          />
          <a href="https://codeforces.com/"><Typography style={{color:"white"}}>codeForces</Typography></a>
        </div>
        <>
        <div style={{marginLeft:"auto"}}>
          Total Problems<Typography style={{fontFamily: "serif", fontSize:"20px", color:"Highlight", marginLeft: "40px"}}>{totCount}</Typography> 
          </div>
        <img 
        src={Prakhar}
        alt="p"
        width="50px%"
        height="50px%"
        style={{marginLeft:"auto", borderRadius:"20px"}}/>
        <a  href="https://www.linkedin.com/in/prakhar-tiwari-3bb245183/">
        <Typography style={{marginLeft:"15px", color:"white"}} > Created By Prakhar Tiwari</Typography></a>
        </>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
