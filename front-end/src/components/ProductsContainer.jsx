import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import testImgBeer from '../images/testImgBeer.jpg';

import { addToCart, removeToCart } from '../store/ducks/productsCart';
import './ProductsContainer.css'

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
      <div className="cardsContainer">

      {productList.map((product, index) => (
        cart[product.id] !== undefined ? quantity = cart[product.id].quantity : quantity = 0,
        <div className="productCard" key={product.name}>
          <span className="price">
            R$ {product.price}
          </span>
          <img src={testImgBeer} alt="test" height="130px" />
          <h3 >
            {product.name}
          </h3>
          <div className="quantityContainer">

            <button className="productButton" disabled={quantity < 1} onClick={() => dispatch(removeToCart(product))}>-</button>
            <span className="quantity">{quantity}</span>
            <button className="productButton" onClick={() => dispatch(addToCart(product))}>+</button>
          </div>
        </div>
      )
      )}
      </div>
      <h1>Total R$: {total} </h1>

    </>
  )
}

export default ProductsContainer;
