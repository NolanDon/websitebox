import React from "react";

import { makeStyles, Box } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";
import ProjectCard from "./ProjectDisplayCard";

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
        <ProjectCard />
    </Box>
  );
};

export default HomePage;
