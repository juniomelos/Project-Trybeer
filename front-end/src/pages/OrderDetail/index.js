import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const OrderDetail = (props) => {
  const orders = useSelector((state) => state.ordersReducer.orders);

  let newDate = '';
  let dateAndMonth = '';

  return (
    <>
      <Header />
      <h3 data-testid="order-number">Pedido {props.match.params.id}</h3>
      <h3 data-testid="order-date">{props.location.state.date}</h3>
      {/* 
            <div className='cardContainer' key={name}>
            <h3 data-testid={`${i}-product-qtd`} > {quantity} - </h3>
            <h3 data-testid={`${i}-product-name`} > {name} - </h3>
            <h3 data-testid={`${i}-product-total-value`} > {name} - </h3>
            
            </div>
            
            {
                orders.map((order, i) => (
                    newDate = new Date(order.date),
                    dateAndMonth = `${newDate.getDate()}/${newDate.getMonth() + 1}`,
                    
                    )
                    )
                } */}
      <h3>R$ {props.location.state.totalPrice}</h3>
    </>
  );
};

export default OrderDetail;
