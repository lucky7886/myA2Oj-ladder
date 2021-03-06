import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    height:"auto",
    marginLeft: "30px",
    backgroundColor: "grey",
    borderRadius:"20px",
    flexGrow: 1,
  },
  media: {
    height: "auto",
    paddingTop: '56.25%', // 16:9
  },
  MA:{
    marginTop:"50px",
  },
  Typo: {
    fontSize:"20px",
    color:"white",
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: "blue[500]",

  },
  Placebet: {
    marginTop: "10px", marginBottom: "20px", width: "250px", height: "25px", marginLeft: "35px",
  },
}));

export default useStyles;