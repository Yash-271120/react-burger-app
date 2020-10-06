import React from 'react';
import classes from './Modal.module.css';

const Model = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        transform: props.purchase ? 'translateY(0)' : 'translayeY(-100vh)',
        opacity: props.purchase ? '1' : '0',
      }}
    >
      {props.children}
    </div>
  );
};

export default Model;
