import React from 'react';
import Cart from "./assets/Cart.svg";

const CartWidget = () => {
  const cartStyle = {
    width: '25px',
    height: '25px',
    margin: '10px',
   
  };

  return (
    <div>
      <img src={Cart} alt="cart-widget" style={cartStyle} />
      0
    </div>
  );
}

export default CartWidget;
