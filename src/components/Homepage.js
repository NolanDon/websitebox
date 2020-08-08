import React from "react";

import { makeStyles, Box, Divider, Typography } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";
// import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectDisplayCard";

const useStyles = makeStyles({
  body: {
    display: "flex",
    justifyContent: "center",
    // flexDirection: 'column'
  },
  divider: {
    width: '385px',
    marginLeft: '300px'
  }
});

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.body}>
        <PersistentSideBar />
        <HomePageHeader />
        <Typography>
          Scroll down to view my Projects
        </Typography>
      </Box>
        <Divider className={classes.divider} />
        <ProjectCard />
    </Box>
  );
};

export default HomePage;
