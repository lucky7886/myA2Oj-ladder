import { makeStyles } from "@material-ui/core/styles";

const HeaderStyles = makeStyles((theme) => ({
  root1: {
    flexGrow: 1,
    boxShadow: "none",
    backgroundColor: "#141452",
  },
  toolbar: {
    paddingRight: 0,
  },
  home: {
    position: "relative",
  },
  Space: {
    margin: theme.spacing(1),
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
  text1: {
    color: "#ff6633", fontSize: "20px",
  },
  Dialog: {
    backgroundColor: "#000033",
    justifyItems: "center",
  },
  loginTypo: {
    fontSize: "15px", color: "white",
  },
  MARGIN: {
    margin: theme.spacing(1),
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  image: {
  marginTop: "5px", marginLeft: "5px", marginBottom:"5px",
    height: "65px", width: "50px",
  },
  divMargin: {
    marginLeft: "65px",
  },
  div1margin: {
    marginLeft: "12px",
  },
  back: {
    backgroundColor: "#ff6633",
  },

  ee: {
    color: "white",
  },
  Active: {
    fontWeight: "bold",
    color: "#ffb366",
  },

  active: {
    paddingBottom: "10px",
    borderBottom: "3px solid #19A5B8",
  },
  navlink: {
    color: "white",
    textDecoration: "none",
    paddingRight: "5px",
    paddingTop: "15px",
    paddingLeft: "5px",
    fontFamily: "Sans-serif",
  },
  button: {
    color: "#1D9AF2",
    backgroundColor: "#292D3E",
    border: "1px solid #1D9AF2",
    borderRadius: "4px",
    padding: "0 15px",
    cursor: "pointer",
    height: "32px",
    fontSize: "14px",
    transition: "all 0.2s ease-in-out",
    opacity: "0.5",
  },
  "&:hover": {
    transform: "rotateZ(-30 deg)",
  },
}));
export default HeaderStyles;
