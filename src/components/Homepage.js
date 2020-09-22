import React from "react";

import { makeStyles, Box } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";

const useStyles = makeStyles({
  body: {
    display: "flex",
    justifyContent: "center",
  }
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.body}>
        <PersistentSideBar />
        <HomePageHeader />
      </Box>
    </Box>
  );
};

export default HomePage;
