import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { BsCartDashFill } from 'react-icons/bs';
import formatCurrency from '../../utils/formatCurrency';

import './CartItem.css';
import AppContext from '../../context/AppContext';

function CartItem({data}) {
  const { id,thumbnail, title, price} = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  const handleRemoveItem = () => {
    const updatedItems = cartItems.filter(cart => cart.id != id);

    setCartItems(updatedItems);
  };

  return ( 
    <section className="cart-item">
      <img 
        src={thumbnail} 
        alt="imagem do produto" className="cart-item-image"/>
      <div className="cart-item-content">
        <h3 className="cart-item-title">
          {title}
        </h3>
        <h3 className="cart-item-price">
          {formatCurrency(price, 'BRL')}
        </h3>

        <button 
          className="btn__remove-item"
          onClick={handleRemoveItem}>
          <BsCartDashFill />
        </button>
      </div>
    </section>
  );
}

export default CartItem;

CartItem.propTypes = {
  data: propTypes.object
}.isRequired;
