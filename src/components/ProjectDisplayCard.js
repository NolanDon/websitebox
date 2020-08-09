import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import { projects } from "./Projects";
import codeIcon from "./images/source-code.png";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const useStyles = makeStyles({
  card: {
    textAlign: "center",
  },
  cardTitle: {
    padding: "15px",
    fontSize: "20px",
    color: "black",
    textAlign: "center",
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  cardText: {
    padding: "10px",
    fontSize: "15px",
    color: "black",
    textAlign: "center",
  },
  image: {
    width: "80%",
    height: "80%",
    filter: "drop-shadow(10px 10px 10px #222)",
  },
  divider: {
    height: "4px",
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
          <Tooltip title="View Code">
            <IconButton aria-label="View Code">
              <Typography className={classes.cardText}>
                <img
                  src={codeIcon}
                  alt="Italian Trulli"
                  className={classes.icon}
                  onClick={() => {
                    window.open(`${item.hyperlink}`, "_blank");
                  }}
                />
              </Typography>
            </IconButton>
          </Tooltip>
          <Typography className={classes.cardText}>
            {item.description}
          </Typography>
          <Divider className={classes.divider} middle />
        </div>
      </div>
    );
  });
};

export default ProjectCard;
