import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../store/ducks/orders';

import { Link } from 'react-router-dom';

import './ClientOrdersCards.css'

const ClientOrdersCards = () => {
  const dispatch = useDispatch();
  const { session } = useSelector(
    (state) => state.userReducer,
  );

  // Fetch all orders at first render
  useEffect(() => {
    dispatch(getOrders(session.token));
  }, []);

  // call orders and fetch confirmation from redux
  const { orders, getOrderSuccess } = useSelector((state) => state.ordersReducer);
  let newDate = '';
  let dateAndMonth = '';
  let totalPrice = 0;
  return (
    <>
      {
        getOrderSuccess && orders.map((order, i) => (
          newDate = new Date(order.date),
          dateAndMonth = `${newDate.getDate()}/${newDate.getMonth() + 1}`,
          totalPrice = order.total.toFixed(2).toString().replace('.', ','),
          (<Link key={order.id}
            to={{
              pathname: `orders/${order.id}`,
              state: { //passing props para o child
                date: dateAndMonth,
                totalPrice,
              }
            }}>
            <div className='cardContainer' data-testid={`${i}-order-card-container`}>
              <h3 data-testid={`${i}-order-number`} >Pedido {order.id}</h3>
              <h3 data-testid={`${i}-order-date`}>{
                dateAndMonth
              }</h3>
              <h3 data-testid={`${i}-order-total-value`}>R$ {totalPrice}</h3>
            </div>
          </Link>)
        )
        )
      }
    </>
  );
}

export default ClientOrdersCards;
