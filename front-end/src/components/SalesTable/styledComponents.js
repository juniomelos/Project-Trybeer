import styled, { css } from 'styled-components';

export const Sales = styled.table`
  border-collapse: collapse;
  width: 100%;
  padding: 0 15px;
`;

export const SaleInfoLabel = styled.th`
  text-align: ${(props) => props.position};
`;

export const Sale = styled.tr`
  width: 100%;
  height: 5vh;

  &:hover {
    background-color: #e8e8e8;
  }
`;

export const SaleInfo = styled.td`
  width: ${(props) => props.size};
  text-align: ${(props) => props.position};

  ${(props) =>
    props.size === '75%'
      ? css`
          @media (max-width: 700px) {
            width: 20%;
          }
        `
      : null}
`;

export const StatusSignal = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.status === 'Pendente' ? 'red' : 'green'};
  width: 20px;
  float: right;
  margin-right: 20px;
`;
