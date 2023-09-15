import styled from 'styled-components';

export const CardSetSt = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const ItemSt = styled.li`
  flex-basis: calc((100% - 87px) / 4);
`;

export const CardSt = styled.article``;

export const CardThumbSt = styled.div`
  height: 268px;

  & img {
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const CardContentSt = styled.div`
  padding: 10px;
`;

export const CardHeadingSt = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: #121417;
`;

export const CardTextSt = styled.p`
  margin-top: 10px;

  color: rgba(18, 20, 23, 0.5);
`;