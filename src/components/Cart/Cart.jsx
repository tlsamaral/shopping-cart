import React, { useContext } from 'react';
import CartItem from '../CartItem/CartItem';

import './Cart.css';
import AppContext from '../../context/AppContext';
import formatCurrency from '../../utils/formatCurrency';
function Cart() {
  const {cartItems, isCartVisible} = useContext(AppContext);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
  
  console.log(totalPrice);
  return ( 
    <section className={`cart ${isCartVisible ? 'cart--active': ''}`}>
      <div className="cart-items">
        {
          cartItems.map(cart => <CartItem 
            key={cart.id}
            data={cart}
          />)
        }
        
      </div>
      <div className="cart-resume">Total: {
        formatCurrency(totalPrice, 'BRL')}</div>
    </section>
  );
}

export default Cart;
