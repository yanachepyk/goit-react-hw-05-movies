import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  text-decoration: none;
  font-family: cursive;
  font-size: 22px;
  font-weight: 400;
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
    
  }
`;

export const MovieLink = styled(Link)`
  text-decoration: none;
  color: #fff;


  &:visited {
    color: #848789;

    &:hover,
  &:focus {
   color: #fff;
    
  }
  }
`;
