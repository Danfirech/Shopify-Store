import React, { Component } from "react";
import client from "shopify-buy";

const ShopContext = React.createContext;

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: process.env.REACT_APP_SHOPIFY_DOMAIN,
  storefrontAccessToken: process.env.REACT_APP_SHOPIFY_API,
});

// Add STATE which will handle all of our data

state = {
  product: {},
  //products is all the products we want to recieve
  products: [],
  //checkout will contain our checkout data
  checkout: {},
  isCartOpen: false,
  isMenuOpen: false,
};

createCheckout = async () => {};

fetchCheckout = async () => {};

addItemToCheckout = async () => {};

removeLineItem = async (lineItemIdsToRemove) => {};

fetchAllProducts = async () => {};

fetchProductWithHandle = async (handle) => {};

closeCart = () => {};

openCart = () => {};

closeMenu = () => {};

openMenu = () => {};

export class shopProvider extends Component {
  render() {
    return <ShopContext.Provider>{this.props.children}</ShopContext.Provider>;
  }
}

export default shopProvider;
