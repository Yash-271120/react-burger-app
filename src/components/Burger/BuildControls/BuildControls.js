import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
  { lebel: 'Salad', type: 'salad' },
  { lebel: 'Cheese', type: 'cheese' },
  { lebel: 'Meat', type: 'meat' },
  { lebel: 'Bacon', type: 'bacon' },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Curruent Price : <strong>&#x20b9; {props.price.toFixed(2)}</strong>
      </p>
      {controls.map((it, ind) => {
        return (
          <BuildControl
            adder={props.adder}
            remover={props.remover}
            key={it.lebel}
            lebel={it.lebel}
            type={it.type}
            disabled={props.disabled[it.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
