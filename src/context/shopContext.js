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

createCheckout = async () => {
  const checkout = await client.checkout.create();
  //using local storage/ its called checkout-id and we are saving checkout.id
  localstorage.setItem("checkout-id", checkout.id);
  this.setState({ checkout: checkout });
};

fetchCheckout = async () => {};

addItemToCheckout = async () => {};

removeLineItem = async (lineItemIdsToRemove) => {};

fetchAllProducts = async () => {
  // Fetch all products in your shop
  const products = await client.product.fetchAll();
  this.setState({ products: products });
};

fetchProductWithHandle = async (handle) => {
  const product = await client.product.fetchByHandle(handle);
  this.setState({ product: product });
};

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
