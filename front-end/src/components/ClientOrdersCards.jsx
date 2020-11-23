import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import './ClientOrdersCards.css'

const ClientOrdersCards = () => {
    const dispatch = useDispatch();
  const order = useSelector((state) => state.ordersReducer.orders);

// Remove MOCK
  const orders2 = [
    {
      "id": 1,
      "userId": 3,
      "total": 15,
      "address": "Vila da Folha",
      "number": "15",
      "date": 1602288000000,
      "status": "Entregue"
    },
    {
      "id": 2,
      "userId": 2,
      "total": 55,
      "address": "Vila da Folha",
      "number": "15",
      "date": 1602288000000,
      "status": "Entregue"
    }
  ]

  // ******
  return (
    <>
      <h3> Here is ClientOrdersCards

</h3>
      {orders2.map((order, i) => (
        <Link to={`order/${order.id}`} >
          <div className='cardContainer' data-testid={`${i}-order-card-container`}>
            <h3 data-testid={`${i}-order-number`} >Pedido {order.id}</h3>
            <h3 data-testid={`${i}-order-date`}>{order.date}</h3>
            <h3 data-testid={`${i}-total-value`}>R$ {order.total}</h3>
          </div>
        </Link>
      ))}
    </>
  );
}

export default ClientOrdersCards;
