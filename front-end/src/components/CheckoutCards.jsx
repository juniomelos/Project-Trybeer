import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './CheckoutCards.css'

const CheckoutCards = () => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cartReducer.cart,
  );

  return (
    <div>


      {Object.keys(cart).map((keyName, i) => (
        <div className="card">
          <h3>
            {cart[keyName].quantity}
          </h3>
          <h3>
            {cart[keyName].name}
          </h3>
          <h3>
            R$: {cart[keyName].price * cart[keyName].quantity}
          </h3>
          <h4>
            Preco unitario R$: {cart[keyName].price}
          </h4>
        </div>
      ))}


    </div>
  )
}
export default CheckoutCards;
