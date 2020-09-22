import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Typist from "react-typist";
import CustomizedDialogs from './setDialogOpen';

const useStyles = makeStyles({
  container: {
    paddingTop: '110px',
    width: '400px',
    position: 'fixed'
  },
  name: {
    display: "flex",
    padding: "100px 0px 0px 15px",
    fontSize: "50px",
    color: 'white',
    fontFamily: 'Moon 2.0',
  },
  paragraph: {
    display: "flex",
    paddingTop: "40px",
    fontSize: "20px",
    color: 'white'
  },
});

const HomePageHeader = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Divider />
      <Typography className={classes.name}>HI, I'M NOLAN</Typography>
      <Typist className={classes.paragraph}>
        Full Stack Developer from Calgary, Alberta.
      </Typist>
      <CustomizedDialogs />
    </Grid>
  );
};

export default HomePageHeader;
