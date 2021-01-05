import styled from 'styled-components';

export const ContentContainer = styled.div`
  background-color: #282d36;
  width: 83%;
  height: 100vh;
  border-top-left-radius: 70px;
  border-bottom-left-radius: 70px;
  position: relative;
  float: right;
  padding: 30px 45px;
  box-shadow: -10px 0px 25px -5px rgba(0, 0, 0, 0.5);
  display: flex;

  &::before {
    content: '';
    top: 0;
    left: 0;
    background-color: #1e2228;
    width: 10%;
    height: 100vh;
    position: absolute;
    z-index: -1;
  }
`;

export const SalesContainer = styled.div`
  width: 70%;
`;

export const DetailsContainer = styled.div`
  width: 25%;
  display: flex;
  flex-flow: column;
  background-color: #252a31;
  border-radius: 25px;
  margin-left: 55px;
  padding-top: 5%;
`;

export const SalesValueCont = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
`;

export const ValueLabel = styled.div`
  margin: 0 10px;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  margin-bottom: 10px;
`;

export const CountsCont = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 10px;
  padding: 5px 10px;
  width: 62%;
`;

export const TotalsDisplayCont = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TotalDisplay = styled.div`
  background-color: #475162;
  width: 20%;
  /* height: 10%; */
  margin-right: 20px;
  padding: 10px 20px;
  border-radius: 18px;
`;
