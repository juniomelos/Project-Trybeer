import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

const OrderDetail = (props) => {
  const orders = useSelector((state) => state.ordersReducer.orders);

  let newDate = '';
  let dateAndMonth = '';
  console.log('props.match.params', props.match.params, props);
  //   newDate = new Date(order.date),
  //   dateAndMonth = `${newDate.getDate()}/${newDate.getMonth() + 1}`,
  return (
    <>
      <Header />
      <h3 data-testid="order-number">Pedido {props.match.params.id}</h3>
      <h3 data-testid="order-date">{props.location.state.date}</h3>
      <h3>R$ {props.location.state.totalPrice}</h3>
      {/* 
            <div className='cardContainer' data-testid={`${i}-order-card-container`}>
              <h3 data-testid={`${i}-order-number`} >Pedido {order.id}</h3>
              <h3 data-testid={`${i}-order-date`}>{
                dateAndMonth
              }</h3>
              <h3 data-testid={`${i}-order-total-value`}>R$ {order.total.toFixed(2).toString().replace('.', ',')}</h3>
              </div>

      {
         orders.map((order, i) => (
          newDate = new Date(order.date),
          dateAndMonth = `${newDate.getDate()}/${newDate.getMonth() + 1}`,
 
        )
        )
      } */}
    </>
  );
};

export default OrderDetail;
