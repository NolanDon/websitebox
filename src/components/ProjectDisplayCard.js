import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  card: {
      display: 'flex',
      justifyContent: 'center'
  },
  title: {},
  image: {},
  hyperlink: {},
  description: {},
});
const ProjectCard = (props) => {
  const classes = useStyles();

  props.map((item) => {
      console.log(item)
    return (
      <div className={classes.card}>
        <div>
            <Typography>
          {item.title}
          </Typography>
          <Typography>
          {item.image}
          </Typography>
          <Typography>
          {item.hyperlink}
          </Typography>
          <Typography>
          {item.description}
          </Typography>
        </div>
      </div>
    );
  });
};

export default ProjectCard;
