import React from 'react';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import SideBar from '../../components/SideBar';
import ProductsContainer from '../../components/ProductsContainer';
import './style.css';

const Products = () => {
  const sideBarVisible = useSelector(
    (state) => state.sideBarHideReducer.isVisible,
  );
const MyComponent = ProductsContainer;


  return (
    <>
      {/* <Header wrapper={ProductsContainer}/> */}
      <Header />

      <div className="sidebarwrapper">
        <div className="sidebar">{sideBarVisible && <SideBar />}</div>
        <div className="maincomponent">
          <h1> Here is Product.js</h1>
          {/* <MyComponent /> */}

          <ProductsContainer />
        </div>
      </div>
    </>
  );
};

export default Products;
