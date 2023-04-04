import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const PosterContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  height: 500px;
`;

export const MovieTitle = styled.h2`
  text-align: center;
`;

export const Poster = styled.img`
  height: 80%;
  box-shadow: 1px 1px 10px 1px #000;
`;

export const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  gap: 10px;
`;

export const HorizontalSeparator = styled.hr`
  width: 100%;
  background-color: #181717;
  height: 3px;
  border: 0;
`;

export const GoBackLink = styled(Link)`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
  gap: 5px;
  font-size: 20px;
  line-height: 1.5;
`;
