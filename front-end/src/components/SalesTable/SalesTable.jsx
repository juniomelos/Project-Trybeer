import React, { useState } from 'react';
import {
  Sale,
  SaleInfoLabel,
  SaleInfo,
  Sales,
  StatusSignal,
} from './styledComponents';

const SalesCard = ({ title, sales }) => {
  const [selectedSale, setselectedSale] = useState(0);

  return (
    <div>
      <h2>{title}</h2>
      <Sales>
        <thead>
          <tr>
            <SaleInfoLabel position="center">ID Pedido</SaleInfoLabel>
            <SaleInfoLabel position="left">Data Pedido</SaleInfoLabel>
            <SaleInfoLabel position="center">Status Pedido</SaleInfoLabel>
          </tr>
        </thead>
        <tbody>
          {sales.map((sale) => {
            const saleDate = new Date(sale.date);
  
            return (
              <Sale key={sale.id} onClick={() => setselectedSale(sale.id)}>
                <SaleInfo size="10%" position="center">
                  {sale.id}
                </SaleInfo>
                <SaleInfo size="75%" position="left">{`${saleDate.toLocaleString(
                  'pt-BR'
                )}`}</SaleInfo>
                <SaleInfo size="15%" position="center">
                  {sale.status}
                  <StatusSignal status={sale.status} />
                </SaleInfo>
              </Sale>
            );
          })}
        </tbody>
      </Sales>
    </div>
  )
};

export default SalesCard;
