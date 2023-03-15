import Modal from "../Ui/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = [
    { id: "c1", name: "abc", amount: 2, price: 22.23 },
    { id: "c2", name: "abcd", amount: 23, price: 223.23 },
  ];
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {cartItems.map((v, i) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>11.12</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
