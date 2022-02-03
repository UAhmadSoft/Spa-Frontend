import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import spa1 from 'assets/med.jpg';

const styles = makeStyles((theme) => ({
  root: {
    height: 500,
    marginBottom: 40,
    backgroundImage: `url(${spa1})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'relative',
  },
  content: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
  },
}));

const Banner = () => {
  const classes = styles();

  return (
    <section className={classes.root}>
      <div className={classes.content}></div>
    </section>
  );
};

export default Banner;
