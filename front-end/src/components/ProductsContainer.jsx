import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart, removeToCart } from '../store/ducks/productsCart';


const ProductsContainer = () => {
  // Need to FETCH!!!
  const productList = [{
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    link: 'http://localhost:3001/images/Skol Lata 350ml.jpg'
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.70,
    link: 'http://localhost:3001/images/Heineken 600ml.jpg'
  },
  ]
  // *****
  let quantity = 0;
  const dispatch = useDispatch();
  const cart = useSelector(
    (state) => state.cartReducer.cart,
  );

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

  return (
    <>
      <h1>Total: {total} </h1>
      {productList.map((product, index) => (
        cart[product.id] !== undefined ? quantity = cart[product.id].quantity : quantity = 0,
        <div key={product.name}>

          <h3 >
            {product.name}
          </h3>
          <h2>
           R$ {product.price}
          </h2>
          <button onClick={() => dispatch(addToCart(product))}>+</button>
          <h2>{quantity}</h2>
          <button disabled={quantity < 1} onClick={() => dispatch(removeToCart(product))}>-</button>
        </div>
      )
      )}

    </>
  )
}

export default ProductsContainer;
