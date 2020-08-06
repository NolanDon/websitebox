import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";



const useStyles = makeStyles((theme) => ({
  imgBorder: {
    display: 'flex',
    justifyContent: 'center',
    width: '106px',
    paddingTop: '5px',
  },
  img: {
    marginTop: '100px',
    height: '250px',
    border:  '4px solid #987e5a',
    marginBottom: '5px'
  },
}));

const HomePageHeader = () => {
  const classes = useStyles();

  return (
    
    <Grid item xs={12} md={8}>
      <div className={classes.imgBorder}>
        {/* <img src={profile} alt="me" className={classes.img} /> */}
        </div>
        <Typography className={classes.markdown}>
          Hi, I'm <b className={classes.bolder}> NOLAN, </b>Fullstack Developer in <br/> <b>CALGARY, AB</b>
      </Typography>
      <Divider />
    </Grid>
  );
};

export default HomePageHeader;
