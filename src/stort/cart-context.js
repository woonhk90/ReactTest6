import React from "react";

/* ------------------------ 기본값으초 초기화 (자동완성으로 사용하려고) ------------------------ */
const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (iitem) => {}, // 추가해야하는 항목
  removeItem: (id) => {}, // 장바구니에서 삭제해야하는 항목
});

export default CartContext;
