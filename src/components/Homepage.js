import React from "react";

import { Box, Divider, Typography } from "@material-ui/core";
import PersistentSideBar from "./PersistentSideBar";
import HomePageHeader from "./HomePageHeader";
import { makeStyles } from "@material-ui/core/styles";
import ProjectCard from "./ProjectDisplayCard";

const useStyles = makeStyles({
  body: {
    display: "flex",
    justifyContent: "center",
  },
  card: {
    textAlign: 'center',
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    paddingTop: "100px",
  },
  cardTitle: {
    padding: '15px',
    fontSize: '20px'
  },
  image: {
    width: '680px',
    height: '400px'
  }
});

const HomePage = () => {
  const classes = useStyles();

  const projects = [
    {
      title: "bookswap",
      image: "https://user-images.githubusercontent.com/48977789/73147349-423e8900-4074-11ea-83dd-4291b6a44604.png",
      hyperlink: "https://github.com/NolanDon/Junglefy",
      description: "built with ruby on rails, book trading app",
    },
    {
      title: "title",
      image: "image",
      hyperlink: "hyperlink",
      description: "description",
    },
    {
      title: "title",
      image: "image",
      hyperlink: "hyperlink",
      description: "description",
    },
    {
      title: "title",
      image: "image",
      hyperlink: "hyperlink",
      description: "description",
    },
  ];
  return (
      <Box>
        <Box className={classes.body}>
          <PersistentSideBar className={classes.sideBar} />
          <HomePageHeader />
          <Divider />
          {/* <div className={classes.card}>
        {ProjectCard(projects)}
      </div> */}
        </Box>
      <div className={classes.card}>
        {projects.map((item) => {
          return (
            <div className={classes.card}>
              <Typography className={classes.cardTitle}>
                {item.title}
                </Typography>
              <Typography>
              <img src={item.image} alt="Italian Trulli" className={classes.image} />
              </Typography>
              <Typography>
              <a href={item.hyperlink} target="_blank">
                view source code
              </a>
              </Typography>
              <Typography>{item.description}</Typography>
            </div>
          );
        })}
      </div>
      </Box>
  );
};

export default HomePage;
