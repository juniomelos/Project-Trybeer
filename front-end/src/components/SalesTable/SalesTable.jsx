import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

/** Styled Components */
import {
  Sale,
  TableLabels,
  SaleInfoLabel,
  SaleInfo,
  Sales,
  StatusSignal,
} from './styledComponents';

const SalesTable = ({ title, sales }) => {
  const [selectedSale, setselectedSale] = useState({});
  const history = useHistory();

  const handleRedirect = (saleId) => history.push(`/admin/orders/${saleId}`);

  return (
    <div>
      <h2>{title}</h2>
      <Sales>
        <TableLabels>
          <SaleInfoLabel position="left">ID Pedido</SaleInfoLabel>
          <SaleInfoLabel position="left">Data Pedido</SaleInfoLabel>
          <SaleInfoLabel position="left">Endereço</SaleInfoLabel>
          <SaleInfoLabel position="left">Total</SaleInfoLabel>
          <SaleInfoLabel position="left">Status Pedido</SaleInfoLabel>
        </TableLabels>
        {sales.map((sale, index) => {
          const saleDate = new Date(sale.date);

          return (
            <>
              <Sale key={sale.id} onClick={() => handleRedirect(sale.id)}>
                <SaleInfo><strong>{`Pedido ${sale.id}`}</strong></SaleInfo>
                <SaleInfo>{`${saleDate.toLocaleString('pt-BR')}`}</SaleInfo>
                <SaleInfo>{`${sale.address}, ${sale.number}`}</SaleInfo>
                <SaleInfo>{`R$ ${sale.total
                  .toFixed(2)
                  .toString()
                  .replace('.', ',')}`}</SaleInfo>
                <SaleInfo>
                  <span data-testid={`${index}-order-status`}>
                    {sale.status}
                  </span>
                  <StatusSignal status={sale.status} />
                </SaleInfo>
              </Sale>
            </>
          );
        })}
      </Sales>
    </div>
  );
};

export default SalesTable;
