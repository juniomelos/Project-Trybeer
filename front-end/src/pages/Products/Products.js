import React from 'react';
import Header from '../../components/Header';
import ProductsContainer from '../../components/ProductsContainer';
import './style.css';

const Products = () => {
  return (
      <Header wrapper={ProductsContainer} /> //wrapper = component name to render
  );
};

export default Products;
