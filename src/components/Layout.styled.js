import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigateSt = styled.nav`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const NavLinkStyled = styled(NavLink)`
  margin-right: 10px;
  padding: 2px 10px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);
  border-radius: 5px;
  color: black;

  &.active {
    color: #0b44cd;

    background-color: rgb(230, 230, 230);
  }
`;
