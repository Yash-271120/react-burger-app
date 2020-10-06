import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import OrderSummery from '../../components/Burger/OrderSummery/OrderSummery';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-orders';

const INGREDIENTS_PRICES = {
  salad: 15,
  bacon: 20,
  cheese: 10,
  meat: 40,
};

export class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 20,
    purchasable: false,
    purchasing: false,
    loading: false,
  };

  componentDidMount() {
    axios.get('/ingredients.json').then((res) => {
      this.setState({ ingredients: res.data });
    });
  }

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  purchaseContinueHandler = () => {
    this.setState({ loading: true });
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.price,
      costomerDetails: {
        name: 'Yash Patil',
        address: {
          country: 'India',
          pincode: '422101',
          street: 'test street',
        },
        email: 'super.nashik@gmail.com',
      },
      methodOfPayment: 'COD',
    };

    axios
      .post('/orders.json', order)
      .then((res) => {
        this.setState({ loading: false, purchasing: false });
        if (!this.state.loading) {
          alert('Stay Frosty Order Recieved Burger Being Prepared');
        }
      })
      .catch((err) => {
        this.setState({ loading: false, purchasing: false });
        console.log(err);
      });
  };

  purchasableToggle = (ingredients) => {
    let sum = Object.keys(ingredients)
      .map((it) => {
        return ingredients[it];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);

    this.setState({
      purchasable: sum > 0,
    });
  };

  addIngredientsHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const oldPrice = this.state.totalPrice;
    let addPrice = INGREDIENTS_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = newCount;

    const updatedPrice = oldPrice + addPrice;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.purchasableToggle(updatedIngredients);
  };

  removeIngredientsHandler = (type) => {
    let oldCount = this.state.ingredients[type];
    if (oldCount === 0) {
      return;
    }
    const newCount = oldCount - 1;
    let subPrice = INGREDIENTS_PRICES[type];
    const updatedIngredients = {
      ...this.state.ingredients,
    };

    updatedIngredients[type] = newCount;

    let updatedPrice = this.state.totalPrice;
    updatedPrice = updatedPrice - subPrice;

    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice,
    });
    this.purchasableToggle(updatedIngredients);
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] === 0;
    }

    let purchaseSum = this.state.purchasing ? (
      <OrderSummery
        ingredients={this.state.ingredients}
        purchaseCancel={this.purchaseCancelHandler}
        purchaseContinue={this.purchaseContinueHandler}
        price={this.state.totalPrice}
      />
    ) : null;

    if (this.state.loading) {
      purchaseSum = <Spinner />;
    }
    let burger = <Spinner />;
    if (this.state.ingredients) {
      burger = (
        <React.Fragment>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            remover={this.removeIngredientsHandler}
            adder={this.addIngredientsHandler}
            disabled={disabledInfo}
            price={this.state.totalPrice}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </React.Fragment>
      );
    }

    return (
      <Fragment>
        <Backdrop
          purchase={this.state.purchasing}
          click={this.purchaseCancelHandler}
        />
        <Modal purchase={this.state.purchasing}> {purchaseSum}</Modal>
        {burger}
      </Fragment>
    );
  }
}

export default BurgerBuilder;
