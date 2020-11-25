import styled from 'styled-components';
import media from "styled-media-query";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  height: 100vh;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    flex-flow: row;
  `}
`;

export const LoginVisualElem = styled.div`
  display: flex;
  justify-content: center;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 50%;
  `}
`;

export const VideoBg = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -2;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.6) contrast(1.5) saturate(0.7);

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 50%;
  `}
`;

export const ColorBg = styled.div`
  background-color: #581600;//#581600;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  opacity: 0.5;
  z-index: -1;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 50%;
  `}
`;

export const Logo = styled.img`
  width: 80%;
  margin: 10% 0;

  ${media.greaterThan("medium")`
    /* screen width is less than 768px (medium) */
    width: 70%;
  `}
`;
