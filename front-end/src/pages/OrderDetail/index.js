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
    dispatch(
      getSalesProducts(session.token, props.dataFromOrders.match.params.id),
    );
  }, []);

  let newDate = '';
  let dateAndMonth = '';

  return (
    <>
      <Header />
      <h1>test</h1>
      <h3 data-testid="order-number">
        Pedido {props.dataFromOrders.match.params.id}
      </h3>
      {getSalesProductsSuccess && (
        <div>
          <h3 data-testid="order-date">
            {props.dataFromOrders.location.state.date}
          </h3>
          {salesProducts.map((product, i) => (
            <div className="cardContainer" key={product.name}>
              <h3 data-testid={`${i}-product-qtd`}> {product.quantity} - </h3>

              <h3 data-testid={`${i}-product-name`}> {product.name}</h3>
              <h3 data-testid={`${i}-product-total-value`}>
                R$ {product.price.toFixed(2).toString().replace('.', ',')}
              </h3>
            </div>
          ))}
          <h3 data-testid="order-total-value">
            R$ {props.dataFromOrders.location.state.totalPrice}
          </h3>
        </div>
      )}
    </>
  );
};

export default OrderDetail;
