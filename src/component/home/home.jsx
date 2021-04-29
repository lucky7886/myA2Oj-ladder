import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import cardStyle from "./style";
import Cards from "../Card/card";
import problemA from "../../assest/probleA.png";
import problem2 from "../../assest/problem2.png";
import problem3 from "../../assest/problemB.jpg";
import problemD from "../../assest/problemD.png";
import BFS from "../../assest/BFS.png";
import DSU from "../../assest/DFS.png";
import MST from "../../assest/MST.jpg";
import DP from "../../assest/DP.png";
import Footer from "../footer/footer";
import Tilt from 'react-tilt';
import Header from "../Header/index";
import { Typography } from '@material-ui/core';
import Particles from 'react-particles-js';


const Home = () => {
  const classes = cardStyle();

  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let time= h + ":" + m + ":" + s;
  const [cTime, setTime]=useState(time)

  const Time =()=>{
    
  let d = new Date();
  let s = d.getSeconds();
  let m = d.getMinutes();
  let h = d.getHours();
  let time= h + ":" + m + ":" + s;
    setTime(time);
    
  }
  setInterval(Time,1000); 
  console.log("");
  return (
    <>
   
     
    <div className={classes.bgColor} >
      <Header />
      <br />
      <Grid container style={{ marginTop: "100px" }} spacing={0}>
        

        <Grid item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"Problems A"} subheader={"Rated 700-1000"}
              image={problemA} type={"A"} link={"/problemA"} contain={"codeforces"}
            />
          </Tilt>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"Problems B"} subheader={"Rated 900-1200"}
              image={problem3} type={"B"} link={"/problemB"} contain={"codeforces"}
            />
          </Tilt>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"Problems C"} subheader={"Rated 1100-1400"}
              image={problem2} type={"C"} link={"/problemC"} contain={"codeforces"}
            />
          </Tilt>
        </Grid>

        <Grid item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"Problems D"} subheader={"Rated 1400-1600"}
              image={problemD} type={"D"} link={"/problemD"} contain={"codeforces"}
            />
          </Tilt>
        </Grid>
        <Grid   className={classes.MA} item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"BFS"} subheader={"Practice Set "}
              image={BFS} type={"Graph"} link={"/BFS"} contain={"Leetcode/ codeForces/ Codechef/ other"}
            />
          </Tilt>
        </Grid>

        <Grid   className={classes.MA} item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"DSU/DFS"} subheader={"Practice Set"}
              image={DSU} type={"Graph"} link={"/DSU/DFS"} contain={"Leetcode/ codeForces/ Codechef/ other"}
            />
          </Tilt>
        </Grid>

        <Grid   className={classes.MA} item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"MST"} subheader={"Practice Set"}
              image={MST} type={"GRAPH"} link={"/MST"} contain={"Leetcode/ codeForces/ Codechef/ other"}
            />
          </Tilt>
        </Grid>

        <Grid   className={classes.MA} item xs={3} sm={3} md={3}>
          <Tilt className="Tilt" options={{ max: 35 }}
          >
            <Cards title={"Dynamic Programming"} subheader={"Practice Set"}
              image={DP} type={"DP"} link={"/DP"} contain={"Leetcode/ codeForces/ Codechef/ other"}
            />
          </Tilt>
        </Grid>


      </Grid>
      <div style={{ marginTop: "75px", marginLeft: "490px" }} >
        <Footer />
        {/* <div><Typography>
          Date {cTime}
          </Typography></div> */}
        <div style={{ marginTop: "195px" }}>
          <h9 style={{ fontSize: "0px" }}>g</h9>
        </div>

      </div>


    </div>

    </>
  );
}

export default Home;