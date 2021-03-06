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

const styles = {
  card: {
    maxWidth: "20em",
  },
  media: {
    height: "10em",  
    
  },
  root: {
    margin: "2em"  
  }

};

function CardButtonDisabled(props) {
  const { classes } = props;
  return (
    <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.image}
          title={props.title}
        />

    </Card>
  );
}

CardButtonDisabled.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardButtonDisabled);
