import { useContext } from "react";
import Modal from "../Ui/Modal";
import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import CartContext from "../../stort/cart-context";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };
  const cartItemAddHandler = (item) => {
    cartCtx.addItem(item);
  };
  return (
    <Modal onCloseCart={props.onCloseCart}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((v, i) => (
          <CartItem
            key={v.id}
            name={v.name}
            amount={v.amount}
            price={v.price}
            onRemove={cartItemRemoveHandler.bind(null, v.id)}
            onAdd={cartItemAddHandler.bind(null, v)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onCloseCart}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
