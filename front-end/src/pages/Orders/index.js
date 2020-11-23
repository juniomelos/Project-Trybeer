import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import { getSales } from '../../store/ducks/sales';

const Orders = () => {
  const { token } = useSelector((state) => state.userReducer.session);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales(token));
  }, []);

  return (
    <div>
      <Header />
      oreders page
    </div>
  );
};

export default Orders;
