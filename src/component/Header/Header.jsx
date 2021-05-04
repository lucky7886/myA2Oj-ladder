/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Button, withStyles, Typography,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });
  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

   const displayDesktop= ()=> {
     return (
       <Toolbar className={classes.toolbar}>

         <div style={{margin: "0px"}}>
        <img width="60px" height="50px"  className={classes.imgg} src={goku} alt="Prakhar" />
       </div>

       {menus()}

       </Toolbar>
     )
   }
   const menus = () => {
   console.log("hey");
    return (
      <div style={{display:"flex", justifyContent:"space-between"}}>

      <div style={{
         display: "flex",
          marginLeft: "3vw",
          marginTop: "1.5vh"}}>
        <HomeIcon/>

          <div> 
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
          </div>
        
         <div style={{
         display: "flex",
         justifyContent:"space-between",
          marginLeft: "3vw",
          marginTop: "1.5vh"}}>
         <img
          src={code}
            alt="c"
            width="22px"
            height="22px"
            style={{backgroundColor:"blue"}}
          />
         <div>
         <a style={{textDecoration:"none"}}  href="https://codeforces.com/"><Typography style={{color:"white", textDecoration:"none", marginLeft:"1vw"}}>codeForces</Typography></a>
         </div>
         </div>

  
        <div style={{
         display: "flex",
          marginLeft: "20vw",
          marginTop: "1vh"}}>
          <div>
          <Typography style={{fontFamily: "serif", fontSize:"20px", color:"ThreeDHighlight"}}>Total problems- </Typography>
          </div>
          <div>
          <Typography style={{fontFamily: "serif", fontSize:"20px", color:"Highlight", marginLeft: "1vh"}}>{totCount}</Typography>
          </div>
          </div>

          <div style={{
          display: "flex",
          marginLeft:"30vw",
          }}>

        <img 
        src={Prakhar}
        alt="p"
        width="50px"
        height="50px"
        style={{marginLeft:"auto", borderRadius:"20px"}}/>

        <a   style={{textDecoration:"none"}} href="https://www.linkedin.com/in/prakhar-tiwari-3bb245183/">
        <Typography style={{marginLeft:"5px", marginTop:"2vh", color:"white"}} > Created By Prakhar Tiwari</Typography></a>


          </div>

          </div>
        

    )
          }
  //   return headersData.map(({ label, href }) => {
  //     return (
  //       <Button
  //         {...{
  //           key: label,
  //           color: "inherit",
  //           to: href,
  //           component: RouterLink,
  //           className: menuButton,
  //         }}
  //       >
  //         {label}
  //       </Button>
  //     );
  //   });
  // };

   const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

      return (
      <Toolbar className={classes.toolbar}>
        <IconButton

          {
            ...{
              edge: "start",
              color: "inherit",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }
          }
          >
          <MenuIcon />
        </IconButton>
        <Drawer
          { ...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>
          {getDrawerChoices()}
          </div>
        </Drawer>
     </Toolbar>
      )
   }


   const getDrawerChoices = () => {
    return(
    <div>
    <MenuItem >
    <NavLink
            exact
            to="/Home"
              activeStyle={{
              fontWeight: "bold",
              color: "#ffb366",
            }}
            className={classes.navlink}
          >
             <div style={{display:"inline-block"}}><HomeIcon/></div>
            Home
          </NavLink>
          </MenuItem>
          
          <MenuItem >
          <>
          <div style={{display:"inline-block"}}>
         <img
          src={code}
            alt="c"
            width="22px"
            height="22px"
            style={{backgroundColor:"blue"}}
          />
         </div>
         <div style={{display:"inline-block"}}>
         <a style={{textDecoration:"none"}}  href="https://codeforces.com/"><Typography style={{color:"white", marginLeft: "3px", textDecoration:"none"}}>codeForces</Typography></a>
         </div>
         </>

          </MenuItem >

          <MenuItem>

          <div style={{ display:"inline-block", marginTop:"10vh"}}>
          <Typography style={{fontFamily: "serif", fontSize:"15px", color:"ThreeDHighlight"}}>Total problems-- </Typography>
          </div>
          <div style={{display:"inline-block", marginTop:"10vh"}}>
          <Typography style={{fontFamily: "serif", fontSize:"15px", color:"Highlight", marginLeft: "1vh"}}>{totCount}</Typography>
          </div>
          </MenuItem>
    </div>
    )
};
  //   headersData.map(({ label, href }) => {
  //     return (
  //       <Link
  //         { ...{
  //           component: RouterLink,
  //           to: href,
  //           color: "inherit",
  //           style: { textDecoration: "none" },
  //           key: label,
  //         }}
  //       >
  //         <MenuItem>{label}</MenuItem>
  //       </Link>
  //     );
  //   });
  // };

      



  return (
    <AppBar position="sticky" className={classes.root1}>
      {mobileView ? displayMobile() : displayDesktop()}
{/* 
      <Toolbar  style={{backgroundColor:" #404040", height:"10px"}}className={classes.customizeToolbar}>
        <img width="60px" height="50px"  className={classes.imgg} src={goku} alt="Prakhar" />

        <div className={classes.divMargin}>
          <div style={{display:"inline-block"}}><HomeIcon/></div>
          <div style={{display:"inline-block"}}> <NavLink
            exact
            to="/Home"
              activeStyle={{
              fontWeight: "bold",
              color: "#ffb366",
            }}
            className={classes.navlink}
          >
            Home
          </NavLink></div>
        
          
        </div>
         <>
         <div style={{display:"inline-block", marginLeft: "4vh"}}>
         <img
          src={code}
            alt="c"
            width="22px"
            height="22px"
            style={{backgroundColor:"blue"}}
          />
         </div>
         <div style={{display:"inline-block", marginLeft:"1vh"}}>
         <a style={{textDecoration:"none"}}  href="https://codeforces.com/"><Typography style={{color:"white", textDecoration:"none"}}>codeForces</Typography></a>
         </div>
         </>
        <>
        <div style={{ display:"inline-block", marginLeft:"auto"}}>
          <Typography style={{fontFamily: "serif", fontSize:"20px", color:"ThreeDHighlight"}}>Total problems-- </Typography>
          </div>
          <div style={{display:"inline-block"}}>
          <Typography style={{fontFamily: "serif", fontSize:"20px", color:"Highlight", marginLeft: "1vh"}}>{totCount}</Typography>
          </div>
        <img 
        src={Prakhar}
        alt="p"
        width="50px%"
        height="50px%"
        style={{marginLeft:"auto", borderRadius:"20px"}}/>
        <a   style={{textDecoration:"none"}} href="https://www.linkedin.com/in/prakhar-tiwari-3bb245183/">
        <Typography style={{marginLeft:"15px", color:"white"}} > Created By Prakhar Tiwari</Typography></a>
        </>
      </Toolbar> */}

    </AppBar>
  );
};

export default Header;
