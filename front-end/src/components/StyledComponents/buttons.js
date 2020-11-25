import styled, { css } from 'styled-components';
import { zdepth1, zdepth2 } from './drop-shadows';

const types = {
  primary: { bgColor: '#ff4000', textColor: 'white' },
  outline: { bgColor: 'transparent', textColor: 'white' },
};

export const Button = styled.button`
  background-color: ${(props) => types[props.btype].bgColor};
  color: ${(props) => types[props.btype].textColor};
  font-weight: bolder;
  height: 36px;
  width: ${(props) => `${props.size}px`};
  padding: 0 15px;
  text-transform: uppercase;
  border-radius: 20px;
  appearance: none;
  border: 0;
  outline: none;

  /** Outline type specific */
  transition: transform 250ms ease-out;
  ${(props) =>
    props.btype === 'outline'
      ? css`
          border: 2px solid #ff4000;
        `
      : 'none'}

  /** shadow */
  ${zdepth2}

  /** animation */
  &:active {
    transform: scale(0.9);
    ${zdepth1};
  }
`;
