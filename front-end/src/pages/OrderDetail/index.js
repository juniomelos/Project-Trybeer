import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSalesProducts } from '../../store/ducks/salesProducts';

import Header from '../../components/Header';

const OrderDetail = (props) => {
  const dispatch = useDispatch();

  const { getSalesProductsSuccess, salesProducts } = useSelector(
    (state) => state.salesProductsReducer,
  );
  const { session } = useSelector((state) => state.userReducer);

  // Fetch all products form one sale at first render
  useEffect(() => {
    dispatch(getSalesProducts(session.token, props.match.params.id));
  }, []);

  let newDate = '';
  let dateAndMonth = '';

  return (
    <>
      <Header />
      <h3 data-testid="order-number">Pedido {props.match.params.id}</h3>
      <h3 data-testid="order-date">{props.location.state.date}</h3>
      {getSalesProductsSuccess &&
        salesProducts.map((product, i) => (
          <div className="cardContainer" key={product.name}>
            <h3 data-testid={`${i}-product-qtd`}> {product.quantity} - </h3>

            <h3 data-testid={`${i}-product-name`}> {product.name}</h3>
            <h3 data-testid={`${i}-product-total-value`}>
             R$ {product.price.toFixed(2).toString().replace('.', ',')}
            </h3>
          </div>
        ))}

      <h3>R$ {props.location.state.totalPrice}</h3>
    </>
  );
};

export default OrderDetail;
