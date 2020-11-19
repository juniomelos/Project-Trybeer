import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadFromLocalStorage } from '../services/localStorage';
import { loadInitCart } from '../store/ducks/productsCart';
import CheckoutCards from './CheckoutCards';

const CheckoutContainer = () => {
  const dispatch = useDispatch();

  const cart = useSelector(
    (state) => state.cartReducer.cart,
  );

  //Each loading cart is load from localstorage
  useEffect(() => {
    const localStoreCart = loadFromLocalStorage('cart')
    dispatch(loadInitCart(localStoreCart.cart));
  }, [])

  const totalCart = () => {
    let totalSummed = 0;
    Object.keys(cart).map(function (key) {
      if (cart[key].quantity > 0) {
        totalSummed += cart[key].price * cart[key].quantity;
      }
      setTotal(totalSummed);
    });

  }
  const [total, setTotal] = useState(
    0
  );
  useEffect(() => {
    totalCart()
  }, [cart])


  return (<div>
<CheckoutCards />
<h2>
Total: {total} 
</h2>
  </div>
  )
}
export default CheckoutContainer;
