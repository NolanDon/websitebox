import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Typist from "react-typist";

const useStyles = makeStyles((theme) => ({
  name: {
    display: "flex",
    paddingTop: "100px",
    fontSize: "50px",
    fontFamily: "Caslon",
  },
  paragraph: {
    display: "flex",
    paddingTop: "40px",
    fontFamily: "Caslon",
    fontSize: "20px",
  },
}));

const HomePageHeader = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Divider />
      <Typography className={classes.name}>HI, I'M NOLAN.</Typography>
      <Typist className={classes.paragraph}>
        Full Stack Developer from Calgary, Alberta.
      </Typist>
    </Grid>
  );
};

export default HomePageHeader;
