import styled from 'styled-components';

export const TitleStyled = styled.h3`
  color: green;
  font-size: 18px;
  padding: 15px;
`;

export const ContainerSt = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 224px;
  height: 48px;
  padding: 0 18px 0 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  cursor: pointer;

  & p {
    font-size: 18px;
    font-weight: 500;
    line-height: calc(20 / 18);
    color: #121417;
  }

  & svg {
    stroke: #121417;
    fill: none;
  }
`;

export const ListOptionsSt = styled.ul`
  position: absolute;
  top: 50px;
  left: 0;

  color: green;
  padding: 14px 18px;
  margin-top: 4px;
  width: 224px;
  max-height: 272px;
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  border: 1px solid gray; // temp
  background-color: #ffffff;
  /* box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02); */

  overflow-y: auto;
  scroll-behavior: smooth;

  & li {
    font-size: 16px;
    font-weight: 500;
    line-height: calc(20 / 16);
    color: rgba(18, 20, 23, 0.2);
    color: black; // temp

    &:not(:last-child) {
      padding-bottom: 8px;
    }
  }
`;
