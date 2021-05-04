import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import cardStyle from "./style";

const Cards = ({ title, subheader, image, type, link ,contain}) => {
  const classes = cardStyle();
  return (
    <div>
      <Card className={classes.root}>
        <CardHeader
          className={classes.typo}
          title={title}
          subheader={subheader} />

        <CardMedia
          className={classes.media}
          image={image}
        />

        <CardContent>
          <Typography className={classes.Typo} variant="body2" color="textSecondary" component="p">
            Contains Atleast  50-60 ques for Problem {type} of {contain}..
      </Typography>
        </CardContent>

        <CardActions>
        <Link exact to={link}>
          <Button
            size="lg"
            to="/album-carousel-page"
            className={classes.Placebet}
            variant="contained"
            color="secondary"
          >
            
              <Typography style={{color: "white", marginLeft:"2vw", marginRight:"3vw"}}> 
                Click</Typography>
           
          </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}

export default Cards;