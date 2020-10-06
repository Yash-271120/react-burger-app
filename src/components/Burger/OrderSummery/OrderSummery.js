import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummery = (props) => {
  const ingredientsOrder = Object.keys(props.ingredients).map((it) => {
    return (
      <li key={it}>
        <span style={{ textTransform: 'capitalize' }}>{it}:</span>
        {props.ingredients[it]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <div>
        <h2>Your Order</h2>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{ listStyle: 'none' }}>{ingredientsOrder}</ul>
        <p>
          <strong> Total Price : &#x20b9; {props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to Checkout?</p>
      </div>
      <Button btntype='Danger' clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button btntype='Success' clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default OrderSummery;
