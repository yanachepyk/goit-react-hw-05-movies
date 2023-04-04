import styled from '@emotion/styled';

export const ActorList = styled.ul`
  display: flex;
  max-width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const Actor = styled.li`
  width: 20%;
  display: flex;
  flex-direction: column;
  gap: 10px;

  h3,
  p {
    text-align: center;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  box-shadow: 1px 1px 10px 1px #000;
  border-radius: 5px;
  overflow: hidden;
  height: 300px;

  img {
    width: 100%;
    object-fit: cover;
    filter: brightness(0.5);
  }
`;
