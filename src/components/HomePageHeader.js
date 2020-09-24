import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Typist from "react-typist";
import CustomizedDialogs from "./setDialogOpen";

const useStyles = makeStyles({
  container: {
    paddingTop: "210px",
    width: "auto",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    marginRight: "40px"
  },
  name: {
    fontSize: "3rem",
    color: "white",
    fontFamily: "monospace",
    margin: "30px 0px 30px 0px"
  },
  paragraph: {
    fontSize: "20px",
    textAlign: "center",
    width: "320px",
    color: "white",
    fontFamily: "monospace",
  },
});

const HomePageHeader = () => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography className={classes.name}>HI, I'M NOLAN</Typography>
      <Typist className={classes.paragraph}>
        Full Stack Developer from Calgary, Alberta.
      </Typist>
      <CustomizedDialogs />
    </Grid>
  );
};

export default HomePageHeader;
