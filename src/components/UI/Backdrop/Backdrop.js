import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => {
  return props.purchase ? (
    <div className={classes.Backdrop} onClick={props.click}></div>
  ) : null;
};

export default Backdrop;
