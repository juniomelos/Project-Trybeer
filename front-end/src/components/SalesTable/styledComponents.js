import styled, { css } from 'styled-components';
import { zdepth1, zdepth2 } from '../StyledComponents/drop-shadows';

export const Sales = styled.div`
  width: 100%;
`;

export const SaleInfoLabel = styled.div`
  text-align: ${(props) => props.position};
  font-weight: 300;
`;

export const TableLabels = styled.div`
  display: grid;
  grid-template-columns: 10% 25% 25% 20% 20%;
  margin-bottom: 10px;
  padding: 5px 10px;
`;

export const Sale = styled.div`
  display: grid;
  grid-template-columns: 10% 25% 25% 20% 20%;
  border-radius: 8px;
  margin-bottom: 10px;
  background-color: #464e4a;
  padding: 30px 10px;
  position: relative;

  ${zdepth2}
`;

// export const Sale = styled.tr`
//   width: 100%;
//   height: 5vh;
//   background-color: #464e4a;
//   margin-bottom: 15px;

//   &:nth-child(3) {
//     border-top-left-radius: 10px;
//   }

//   &:hover {
//     background-color: #e8e8e8;
//   }
// `;

export const SaleInfo = styled.div`
  text-align: ${(props) => props.position};
`;

export const StatusSignal = styled.div`
  width: 5px;
  height: 45px;
  border-radius: 15px;
  background-color: ${(props) =>
    props.status === 'Pendente' ? 'red' : 'green'};
  float: right;
  margin-right: 20px;
  position: absolute;
  right: -17px;
  top: 17px;
`;

export const ExpandButton = styled.button`
  width: 50px;
  border-radius: 15px;
  float: right;
  margin-right: 10px;
`;

export const SaleDetails = styled.tr`
  visibility: ${(props) => (props.display ? 'visible' : 'visible')};
`;
