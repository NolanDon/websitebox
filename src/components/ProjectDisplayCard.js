import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { projects } from "./Projects";

const useStyles = makeStyles({
  card: {
    display: "flex",
    flexDirection: "column",
    padding: "200px",
    justifyContent: 'center',
    paddingTop: '25%'
  },
  cardTitle: {
    padding: "15px",
    fontSize: "20px",
  },
  image: {
    width: "680px",
    height: "400px",
    filter: "drop-shadow(10px 10px 10px #222)",
  },
});

const ProjectCard = () => {
  const classes = useStyles();

  return projects.map((item) => {
    return (
      <div>
        <div className={classes.card}>
          <Typography className={classes.cardTitle}>{item.title}</Typography>
          <Typography>
            <img
              src={item.image}
              alt="Italian Trulli"
              className={classes.image}
            />
          </Typography>
          <Typography className={classes.cardTitle}>
                <a href={item.hyperlink} rel="noopener noreferrer" target="_blank">
                  view source code
                </a>
              </Typography>
              <Typography className={classes.cardTitle}>
                {item.description}
              </Typography>
          
        </div>
      </div>
    );
  });
};

export default ProjectCard;
