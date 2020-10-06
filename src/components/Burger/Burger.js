import React from 'react';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
import classes from './Burger.module.css';

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((igkey, i) => {
      return [...Array(props.ingredients[igkey])].map((m, j) => {
        return <BurgerIngredients key={igkey + j} type={igkey} />;
      });
    })
    .reduce((frstArr, secArr) => {
      return frstArr.concat(secArr);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <h3>Please Start Adding Ingredients!</h3>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredients type='bread-top' />
      {ingredients}
      <BurgerIngredients type='bread-bottom' />
    </div>
  );
};

export default Burger;
