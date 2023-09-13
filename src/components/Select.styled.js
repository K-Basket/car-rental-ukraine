import styled from 'styled-components';

export const TitleStyled = styled.h3`
  color: green;
  font-size: 18px;
  padding: 15px;
`;

export const ContainerSt = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  height: 48px;
  padding: 0 18px 0 18px;
  background-color: #f7f7fb;
  background-color: salmon; // temp
  border-radius: 14px;

  & p {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    color: #121417;
  }

  & svg {
    stroke: #121417;
    fill: none;
    cursor: pointer;
  }
`;
