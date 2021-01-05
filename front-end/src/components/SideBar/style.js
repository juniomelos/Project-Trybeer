import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../StyledComponents/buttons';

export const ProfileHeader = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
`;

export const Logo = styled.img`
  width: 80%;
  margin: 10% 0;
`;

export const ProfileImage = styled.div`
  width: 35%;
  height: 100%;
  background: #4c4c4c;
  border-radius: 15px;
  background-image: url(${(props) => props.photo});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: flex-end;
  padding: 15px 10px;
`;

export const MenuItem = styled.li`
  margin-top: 15px;
  padding: 5px;
  text-decoration: none;
  font-weight: bolder;
  display: flex;
  align-items: center;
  font-size: 1.3em;
`;

export const Icon = styled.img`
  width: 36px;
  height: 36px;
  margin-right: 15px;
  filter: ${(props) => (props.selected ? 'saturate(1)' : 'saturate(0.2)')};

  &:hover {
    filter: saturate(1);
  }
`;

export const MenuLink = styled(Link)`
  color: #6f6d6d;
  text-decoration: none;

  &:hover {
    color: white;
  }
`;

export const LoggoutBtn = styled(Button)`
  position: absolute;
  bottom: 15px;
`;
