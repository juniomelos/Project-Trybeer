import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import SalesTable from '../../components/SalesTable/SalesTable';
import { getSales } from '../../store/ducks/sales';
import {
  ContentContainer,
  SalesContainer,
  DetailsContainer,
  SalesValueCont,
  ValueLabel,
  CountsCont,
  TotalsDisplayCont,
  TotalDisplay,
} from './style';

const Orders = () => {
  const { token } = useSelector((state) => state.userReducer.session);
  const { sales, isFetching } = useSelector((state) => state.salesReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSales(token));
  }, []);

  if (isFetching) return <h2>Carregando...</h2>;

  return (
    <>
      <Header />
      <ContentContainer>
        <SalesContainer>
          <section style={{ display: 'flex', flexFlow: 'column' }}>
            <header>
              <h2>Minhas Vendas</h2>
            </header>
            <TotalsDisplayCont>
              <TotalDisplay>
                <ValueLabel size="1.1em" weight="800">
                  Pendentes
                </ValueLabel>
                <ValueLabel size="2.6em" weight="800">
                  4
                </ValueLabel>
              </TotalDisplay>
              <TotalDisplay>
                <ValueLabel size="1.1em" weight="800">
                  Entregues
                </ValueLabel>
                <ValueLabel size="2.6em" weight="800">
                  1
                </ValueLabel>
              </TotalDisplay>
              <TotalDisplay style={{backgroundColor: '#ed4631'}}>
                <ValueLabel size="1.1em" weight="800">
                  Total
                </ValueLabel>
                <ValueLabel size="2.6em" weight="800">
                  5
                </ValueLabel>
              </TotalDisplay>
            </TotalsDisplayCont>
          </section>
          {sales.pending.length ? (
            <section style={{ display: 'flex', flexFlow: 'column' }}>
              <header>
                <h2>Pendentes</h2>
              </header>
              <SalesTable sales={sales.pending} />
            </section>
          ) : null}
          {sales.delivered.length ? (
            <section style={{ display: 'flex', flexFlow: 'column' }}>
              <header>
                <h2>Entregues</h2>
              </header>
              <SalesTable sales={sales.delivered} />
            </section>
          ) : null}
        </SalesContainer>
        <DetailsContainer>
          <SalesValueCont>
            <ValueLabel size="1.4em" weight="400">
              Vendas hoje
            </ValueLabel>
            <ValueLabel size="2.5em" weight="800">
              R$ 45,00
            </ValueLabel>
            <ValueLabel size="1.2em" weight="300">
              total
            </ValueLabel>
            <ValueLabel size="1.5em" weight="800">
              R$ 200,00
            </ValueLabel>
          </SalesValueCont>
          <br />
          <br />
          <br />
          <br />
          <SalesValueCont>
            <CountsCont>
              <div>
                <ValueLabel size="1em" weight="800">
                  Heineken
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  132
                </ValueLabel>
              </div>
              <div>
                <ValueLabel size="1em" weight="800">
                  Brahma
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  12
                </ValueLabel>
              </div>
            </CountsCont>
            <CountsCont>
              <div>
                <ValueLabel size="1em" weight="800">
                  Skol
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  200
                </ValueLabel>
              </div>
              <div>
                <ValueLabel size="1em" weight="800">
                  Skol Beats
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  20
                </ValueLabel>
              </div>
            </CountsCont>
            <CountsCont>
              <div>
                <ValueLabel size="1em" weight="800">
                  Stella Artois
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  87
                </ValueLabel>
              </div>
              <div>
                <ValueLabel size="1em" weight="800">
                  Becks
                </ValueLabel>
                <ValueLabel size="1.4em" weight="800">
                  49
                </ValueLabel>
              </div>
            </CountsCont>
          </SalesValueCont>
        </DetailsContainer>
      </ContentContainer>
    </>
  );
};

export default Orders;
