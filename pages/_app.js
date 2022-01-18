import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import AppContext from "../components/context";
import Home from "./index";
import Layout from "../components/layout";
import Cookie from "js-cookie";
import "../styles/globals.css";

function MyApp(props) {
  var { cart, addItem, removeItem, user, setUser } = useContext(AppContext);
  const [state, setState] = useState({ cart: cart });
  const { Component, pageProps } = props;

  if (!pageProps) pageProps = 

  console.log("pageProps", pageProps);

  setUser = (user) => {
    setState({ cart, user });
  };

  addItem = (item) => {
    let { items } = state.cart;
    // check for item already in cart
    // if not in cart, add item if item is found increase quanity ++
    let foundItem = true;
    if (items.length > 0) {
      foundItem = items.find((i) => i.id === item.id);
      if (!foundItem) foundItem = false;
    }
    else {
      foundItem = false;
    }

    let newCart = undefined;
    
    if (!foundItem) {
      let temp = JSON.parse(JSON.stringify(item));
      temp.quantity = 1;
      newCart = {
        items: [...state.cart.items, temp],
        total: state.cart.total + item.price,
      }
    } else {
      newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity + 1 })
          } else {
            return item;
          }
        }),
        total: state.cart.total + item.price,
      }
    }
    setState({ cart: newCart, user });
  };
  removeItem = (item) => {
    let { items } = state.cart;
    //check for item already in cart
    const foundItem = items.find((i) => i.id === item.id);
    if (foundItem.quantity > 1) {
      var newCart = {
        items: items.map((item) => {
          if (item.id === foundItem.id) {
            return Object.assign({}, item, { quantity: item.quantity - 1 })
          } else {
            return item;
          }
        }),
        total: state.cart.total - item.price,
      }
    } else { // only 1 in the cart so remove the whole item
      const index = items.findIndex((i) => i.id === foundItem.id);
      items.splice(index, 1);
      var newCart = { items: items, total: state.cart.total - item.price }
    }
    setState({ cart: newCart, user });
  }

  return (
    <AppContext.Provider value={{ cart: state.cart, addItem: addItem, removeItem: removeItem, isAuthenticated: false, user: state.user, setUser: setUser }}>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>

    </AppContext.Provider>
  );

}

export default MyApp;
