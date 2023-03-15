import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [{ id: "c1", name: "abc", amount: 2, price: 22.23 }];
  return (
    <div>
      <ul className={classes["cart-items"]}>
        {cartItems.map((v, i) => (
          <li>{v.name}</li>
        ))}
      </ul>
      <div>
        <span>Total Amount</span>
        <span>11.12</span>
      </div>
      <div>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
