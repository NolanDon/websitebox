import React from "react";

import { Box } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  body: {
    display: "flex",
    justifyContent: "center",
  }
})

const HomePage = () => {
  console.log('homepage rendered')
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.body}>
        <PersistentSideBar className={classes.sideBar} />
        <HomePageHeader />
      </Box>
    </Box>
  
  );
};

export default HomePage;