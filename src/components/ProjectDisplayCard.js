import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import { projects } from "./Projects";

const useStyles = makeStyles({
  card: {
    textAlign: 'center'
  },
  cardTitle: {
    padding: "15px",
    fontSize: "20px",
    color: 'black',
    textAlign: 'center'
  },
  cardText: {
    padding: "10px",
    fontSize: "15px",
    color: 'black',
    textAlign: 'center'
  },
  image: {
    width: "340x",
    height: "200px",
    filter: "drop-shadow(10px 10px 10px #222)",
  },
  divider: {
    height: '4px',
  }
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
          <Typography className={classes.cardText}>
                <a href={item.hyperlink} rel="noopener noreferrer" target="_blank">
                  view code
                </a>
              </Typography>
              <Typography className={classes.cardText}>
                {item.description}
              </Typography>
              <Divider className={classes.divider} middle/>
        </div>
      </div>
    );
  });
};

export default ProjectCard;
