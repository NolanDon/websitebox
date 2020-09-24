import React from "react";
import { makeStyles, Typography, Divider } from "@material-ui/core";
import { projects } from "./Projects";
import codeIcon from "./images/icons/source-code.png";
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
    fontFamily: "monospace",
    fontWeight: '500'
  },
  icon: {
    width: "20px",
    height: "20px",
  },
  cardText: {
    paddingTop: "15px",
    fontSize: "10px",
    color: "black",
    textAlign: "center",
    fontFamily: "monospace",
    fontWeight: '600'
  },
  image: {
    width: "80%",
    height: "80%",
    filter: "drop-shadow(10px 10px 10px #222)",
  },
  divider: {
    height: "4px",
    background: 'black',
    opacity: '50%',
  },
  button: {
    border: "none",
    color: "white",
    background: "black",
    borderRadius: "10%",
    height: "25px",
    width: "40px",
    marginBottom: "15px",
  },
});

const ProjectCard = () => {
  const classes = useStyles();

  return projects.map((item) => {
    return (
      <div>
        <div className={classes.card}>
          <Typography className={classes.cardTitle}>{item.title.toUpperCase()}</Typography>
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
            {item.description.toUpperCase()}
          </Typography>
          <Typography className={classes.cardText}>
            {item.link ? (
              <Tooltip title="View Demo">
                <button
                  className={classes.button}
                  onClick={() => window.open(`${item.link}`, "_blank")}
                >
                  live
                  {classes.link}
                </button>
              </Tooltip>
            ) : (
              ""
            )}
          </Typography>
          <Divider className={classes.divider} middle />
        </div>
      </div>
    );
  });
};

export default ProjectCard;
