import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Typist from 'react-typist';

const useStyles = makeStyles((theme) => ({
  paragraph: {
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '120px',
    fontFamily: 'GT Walsheim',
    fontSize: '20px'
  },
}));

const HomePageHeader = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      <div>
        <Typography className={classes.paragraph}>
          <Typist>
          Hi, I'm Nolan, Fullstack Developer from
          <b> CALGARY, AB</b>
          </Typist>
          <Typist.Delay ms={500}/>
        </Typography>
      </div>
    </Grid>
  );
};

export default HomePageHeader;
