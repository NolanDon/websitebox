import React from "react";

import { Box } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";
import { makeStyles } from "@material-ui/core/styles";
// import Background from "../../images/coffeestain.jpg";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    sideBar: theme.spacing(3),
  },
  body: {
    display: "flex",
    justifyContent: "center",
    color: "#95876c",
    background: '#ffffff',
    backgroundSize: "cover",
  },
  background: {
    // backgroundImage: `url(${Background})`,
    backgroundSize: 'cover'
  }
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box>
      <Box className={classes.body}>
        <PersistentSideBar className={classes.sideBar} />
        <HomePageHeader />
      </Box>
      <Box>
        <div className={classes.background}>
        </div>
      </Box>
    </Box>
  
  );
};

export default HomePage;