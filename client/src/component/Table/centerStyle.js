import { makeStyles } from "@material-ui/core/styles";

const CenterStyles = makeStyles(() => ({
  root1: {
    marginTop: "5px",
    marginLeft: "5px",
  },
  media: {
    paddingTop: "26.25%", // 16:9
  },
  card: {
    marginLeft: "5px",
    marginRight: "5px",
    marginTop: "5px",
    position: "relative",
    borderRadius: "20px",
    backgroundColor: "#141452",
  },
  buttons: {
    backgroundColor: "#4CAF50", /* Green */
    color: "white",
    padding: "15px 32px",
    textAlign: "center",
    
    display: "inlineBlock",
    fontSize: "16px",
    borderRadius:"12px",
  },
  overlay: {
    position: "absolute",
    top: "100px",
    left: "20px",
    color: "White",
  },
  NavL: {
    color: "red",
  },
  colorchange: {
    transition: "all 0.5s ease",
    "&:hover": {
      backgroundColor: "#19A5B8",
    },
  },
  TextTypo: {
    color: "white", marginLeft: "15px", marginTop: "5px",
  },
  TextTypo1: {
    color: "#ff6633", marginTop: "25px", marginLeft: "2px",
  },
  Typo3: {
    textDecoration: "none",
    color: "white",
    fontSize: "15px",
  },
  image: {
    marginRight: "5px",
    marginTop: "10px",
  },
  Typo: {
    color: "white", marginLeft: "15px", marginTop: "5px",
  },
  CardStyle: {
    color: "white", borderRadius: "25px",
  },
  tableStyle: {
    color: "white",
  },
  Typo1: {
    color: "white", marginLeft: "15px", marginTop: "15px", fontSize: "20px",
  },
  seperator: {
    color: "white",
    marginLeft: "30px",
    marginTop: "10px",
    fontSize: "20px",
  },
}));

export default CenterStyles;
