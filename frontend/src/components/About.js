import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
        minWidth: 200,
        maxWidth: 500,
        margin: 'auto',
        backgroundImage: 'linear-gradient(315deg, #f3f4f7 0%, #caccd1 74%)',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const About = () => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
  const preventDefault = (event) => event.preventDefault();
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Student Debt Forecast
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
                  U.S. accumulated college debt has reached astronomical heights in recent decades, reaching $1.6 trillion in 2020. While the question of affordability of the costs of higher education continues to be part of policy and political discourse, students and many who have graduated years ago continue to be saddled by college debt, limiting their economic mobility and exposing them to financial precarity. <br /> This app uses data analysis and machine learning to predict college debt, based on user input and federally aggregated data about the given educational institution. The app makes predictions using a machine learning model built using data from the the <Button href={ 'https://collegescorecard.ed.gov/data/'} target={'_blank'} size='small'> College Scorecard </Button> database, maintained by the U.S. Department of Education.
        </Typography>  
      </CardContent>
      <CardActions>
        <Button size="small" target={'_blank'} href={"https://github.com/YasmineCodes/StudentDebt"}>Learn More</Button>
      </CardActions>
    </Card>
  );
}