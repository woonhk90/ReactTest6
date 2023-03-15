import CartContext from "./cart-context";
/* ------------------ CartContext데이터를 관리, 접근하려는 모든 컴포넌트에 제공 ----------------- */
const CartProvider = (props) => {
  const addItemToCartHandler = (item) => {};
  const removeItemCartHandler = (id) => {};
  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCartHandler,
    remoteItem: removeItemCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
