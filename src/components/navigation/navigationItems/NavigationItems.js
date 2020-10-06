import React from 'react';
import classes from './NavigationItems.module.css';
import NavigationItem from './navigationItem/NavigationItem';

const navigationItems = () => {
  return (
    <ul className={classes.NavigationItems}>
      <NavigationItem link='/'>Burger Builder</NavigationItem>
      <NavigationItem link='/' active={true}>
        Checkout
      </NavigationItem>
    </ul>
  );
};

export default navigationItems;
