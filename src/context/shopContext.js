import React, { Component } from "react";
import client from "shopify-buy";

// Initializing a client to return content in the store's primary language
const client = Client.buildClient({
  domain: "your-shop-name.myshopify.com",
  storefrontAccessToken: "your-storefront-access-token",
});

export class shopProvider extends Component {
  render() {
    return <div></div>;
  }
}

export default shopProvider;
