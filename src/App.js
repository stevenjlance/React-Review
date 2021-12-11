import React, { Component } from "react";
import "./App.css";
import ShoppingCart from "./components/shoppingcart";
import ProductList from "./components/productList";
import Hero from "./components/hero";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: []
    };
  }

  // Inventory - we might normally prefer to use a database, but this is a good placeholder.
  inventory = [
    { name: "Apple", price: 1.99 },
    { name: "Loaf of Bread", price: 1.5 },
    { name: "Milk", price: 2.5 }
  ];

  // The add and remove functions should update the state's cart and the total.
  // The add function has been built already. The remove function has not.
  addToShoppingCart = (item) => {
    this.setState((state) => {
      state.cart.push(item);
      return state;
    });
    console.log(this.state.cart);
  };

  removeFromShoppingCart = (item) => {
    // Get the current cart
    const cart = this.state.cart;
    // Get the index of the item that we are looking for. Will return -1 if it is not on the list
    let index = cart.indexOf(item);
    // If the item is on the list, remove it
    if (index !== -1) {
      cart.splice(index, 1);
    }
    // Update the state with the new cart
    this.setState((state) => {
      return state;
    });
  };

  render() {
    return (
      <div className="App">
        <Hero />
        <ShoppingCart />
        <div className="main">
          <ProductList
            inventory={this.inventory}
            add={this.addToShoppingCart}
          />
        </div>
      </div>
    );
  }
}

export default App;
