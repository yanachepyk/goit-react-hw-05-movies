import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #74696c;
  text-decoration: none;
  &.active {
    color: #da7b93;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeaderList = styled.ul`
  display: flex;
  gap: 40px;
  font-size: 24px;
  font-weight: 600;
`;

export const Header = styled.header`
  padding: 20px;
  margin-bottom: 20px;
  width: 100%;
  background: #3d5566;
  box-sizing: border-box;
  box-shadow: 0px -2px 30px 0px #000;
  display: flex;
  justify-content: center;
`;
