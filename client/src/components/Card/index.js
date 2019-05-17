import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import "./index.css";

const styles = {
  card: {
    height: 300,
  },
  media: {
    height: 200,
  },
};

function MediaCard(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          // style={{borderColor: "#FE6B8B", borderWidth:3}}
          title="Flower"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" style={{textAlign:"text-center"}}>
          {props.name}
          </Typography>
          <Typography component="p">
          {props.description}
          </Typography>
        </CardContent>
    </Card>
  );
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaCard);
