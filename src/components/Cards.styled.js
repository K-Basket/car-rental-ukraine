import styled from 'styled-components';

export const CardSetSt = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 29px;
`;

export const ItemSt = styled.li`
  flex-basis: calc((100% - 87px) / 4);
  transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover {
    scale: 1.007;
  }
`;

export const CardSt = styled.article`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const CardThumbSt = styled.div`
  position: relative;
  height: 268px;

  & img {
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
  }

  & svg {
    position: absolute;
    top: 14px;
    right: 14px;
    stroke: #ffffffcc;
    /* fill: #3470ff; */
    fill: none;
    transition: scale 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

    &:hover {
      scale: 1.1;
    }
  }
`;

export const CardContentSt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 10px;
`;

export const WrapCardHeadingSt = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const CardHeadingSt = styled.h2`
  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: #121417;
`;

export const CardTextSt = styled.p`
  /* margin-top: 10px; */

  color: rgba(18, 20, 23, 0.5);
`;
