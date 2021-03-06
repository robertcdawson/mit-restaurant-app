import React, { useContext } from "react";
import { useRouter } from "next/router";
import { Button, Card, CardBody, CardTitle, Badge } from "reactstrap";
import AppContext from "./context";
import Link from "next/link";

function Cart() {
  let isAuthenticated = true;
  let { cart, addItem, removeItem } = useContext(AppContext);
  console.log(`in CART: ${JSON.stringify(cart)}`);

  const router = useRouter();
  
  const renderItems = () => {
    let { items } = cart;
    console.log(`items: ${JSON.stringify(items)}`);
    if (items && items.length) {
      var itemList = cart.items.map((item) => {
        if (item.quantity > 0) {
          return (
            <div
              className="items-one"
              style={{ marginBottom: 15 }}
              key={item.id}
            >
              <div>
                <span id="item-price">&nbsp; ${item.price}</span>
                <span id="item-name">&nbsp; {item.name}</span>
              </div>
              <div>
                <Button
                  style={{
                    height: 25,
                    width: 25,
                    padding: 0,
                    marginRight: 10,
                    border: 'solid 1px #999'
                  }}
                  onClick={() => addItem(item)}
                  color="link"
                >
                  +
                </Button>
                <Button
                  style={{
                    height: 25,
                    width: 25,
                    padding: 0,
                    marginRight: 10,
                    border: 'solid 1px blue'
                  }}
                  onClick={() => removeItem(item)}
                  color="link"
                >
                  -
                </Button>
                <span style={{ marginLeft: 5 }} id="item-quantity">
                  {item.quantity}x
                </span>
              </div>
            </div>
          );
        }
      })
      return itemList;
    }
    else {
      return (<div></div>)
    }
  }
  const checkoutItems = () => {
    return (
      <div className="checkoutContainer">
        <Badge style={{ width: 200, padding: 10 }} color="light">
          <h5 style={{ fontWeight: 100, color: "gray" }}>Total:</h5>
          <h3>${cart.total}</h3>
        </Badge>
        {router.asPath !== '/checkout' && (
          <Link href="/checkout/">
            <Button style={{ width: "10%" }} color="primary">
              <a>Order</a>
            </Button>
          </Link>
        )}
      </div>
    )
  }

  // return Cart
  return (
    <div>
      <p><strong>Cart</strong></p>
      <Card style={{ padding: "10px 5px" }} className="cart">
        <CardTitle style={{ margin: 10 }}>Your Order:</CardTitle>
        <hr />
        <CardBody style={{ padding: 10 }}>
          <div style={{ marginBottom: 6 }}>
            <small>Items:</small>
          </div>
          <div>
            {renderItems()}
          </div>
          <div>
            {checkoutItems()}
          </div>

          {console.log(`Router Path: ${router.asPath}`)}
        </CardBody>
      </Card>
    </div>
  );
}
export default Cart;
