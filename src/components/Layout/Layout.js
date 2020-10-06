import React, { Component, Fragment } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../navigation/Toolbar/Toolbar';
import SideDrawer from '../navigation/SideDrawer/SideDrawer';
class Layout extends Component {
  state = {
    showSiderBar: false,
  };

  showSiderBarHandler = () => {
    this.setState((PrevState) => {
      return { showSiderBar: !PrevState.showSiderBar };
    });
  };

  render() {
    return (
      <Fragment>
        <Toolbar clicked={this.showSiderBarHandler} />
        <SideDrawer
          show={this.state.showSiderBar}
          clicked={this.showSiderBarHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Fragment>
    );
  }
}

export default Layout;
