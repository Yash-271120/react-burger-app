import React from 'react';
import classes from './BuildControl.module.css';

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <div className={classes.Lebel}>{props.lebel}</div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <button className={classes.More} onClick={() => props.adder(props.type)}>
        Add
      </button>
      <button
        className={classes.Less}
        onClick={() => props.remover(props.type)}
        disabled={props.disabled}
      >
        Remove
      </button>
    </div>
  );
};

export default BuildControl;
