import './App.css';
import Home from "./component/home/home";
import style from "./component/home/style";
import Routes from "./Routing/route";
import ParticleContainer from "../src/component/particleContainer/particleContainer";
import ParticlesBg from 'particles-bg'



function App() {
  const classes= style();
  return (
    <div className={classes.bgColor}>
      <Routes />
      
      <div style={{  backgroundColor:"white", top :"0", left:"0",  height: "100%", width:"100%", zIndex: -1, position:"fixed"}}>
      <ParticlesBg type="circle" bg={true} />
      <ParticleContainer />
      </div>
    </div>
  );
}

export default App;
