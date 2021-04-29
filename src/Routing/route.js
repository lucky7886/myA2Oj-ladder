import React from 'react';
import {
  Switch, Route,
} from "react-router-dom";
import Home from "../component/home/home";
import ProblemsA from "../Container/NavBar/problemA/problemA";
import ProblemsB from "../Container/NavBar/problemB/problemB";
import ProblemsC from "../Container/NavBar/problemC/problemC";
import ProblemsD from "../Container/NavBar/problemD/problemD";
import BFS from "../Container/NavBar/bfs/BFS";
import DSU from "../Container/NavBar/dsu/DSU";
import MST from "../Container/NavBar/mst/MST";
import DP from "../Container/NavBar/dp/DP";

const Routes = () => {
  return (
    <>
    <>
    <Switch>
        <Route exact path="/problemA" component={ProblemsA} />
        <Route exact path="/problemB" component={ProblemsB} />
        <Route exact path="/problemC" component={ProblemsC} />
        <Route exact path="/problemD" component={ProblemsD} />
        <Route exact path="/BFS" component={BFS} />
        <Route exact path="/DSU/DFS" component={DSU} />
        <Route exact path="/MST" component={MST} />
        <Route exact path="/DP" component={DP} />
        
        <Route exact path="/" component={Home} />
        <Route exact path="/myA2Oj-ladder" component={Home} />
        <Route exact path="/Home" component={Home} />
      </Switch>
      </>
     
    </>
  );
}

export default Routes;