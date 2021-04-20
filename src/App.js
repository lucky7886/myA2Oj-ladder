import logo from './logo.svg';
import './App.css';
import Home from "./component/home/home";
import Table from "./component/Table/table";
import style from "./component/home/style";
import Routes from "./Routing/route";

function App() {
  const classes= style();
  return (
    <div className={classes.bgColor} >
      <Routes />
    </div>
  );
}

export default App;
