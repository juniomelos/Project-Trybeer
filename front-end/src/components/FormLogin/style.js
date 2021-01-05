import styled from 'styled-components';
import media from 'styled-media-query';

export const FormContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('medium')`
    /* screen width is less than 768px (medium) */
    width: 50%;
  `}
`;

export const Form = styled.div`
  margin: 10% 0;
`;

export const InputLabel = styled.label`
  display: flex;
  flex-flow: column;
  transition: color 300ms ease-out;
  color: #868686;

  &:hover {
    color: white;
  }
`;

export const Input = styled.input`
  background-color: transparent;
  border: 0;
  padding: 5px 15px;
  font-size: 1.2em;
  color: whitesmoke;
  outline: none;
  margin: 10px 0;
  transition: border-bottom 300ms ease-out;
  border-bottom: 2px solid #868686;

  &:focus {
    border-bottom: 2px solid white;
  }
`;

// .globalContainer {
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
// }
// .formContainer {
//   align-items: center;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   margin: 15px;
//   width: 50vw;
// }

// .formContainer label {
//   display: block;
//   margin: 20px;
// }

// .formContainer input {
//   display: block;
// }
