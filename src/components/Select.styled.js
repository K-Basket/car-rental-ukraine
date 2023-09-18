import styled from 'styled-components';

export const TitleStyled = styled.h3`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: calc(18 / 14);
  color: #8a8a89;
  color: ${props => props.$colorValue || '#8a8a89'};
`;

export const ContainerSt = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: ${props => props.$width || '224px'};
  height: 48px;
  padding: 0 18px 0 18px;
  background-color: #f7f7fb;
  border-radius: 14px;
  cursor: pointer;
  z-index: 1;

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

  width: ${props => props.$width || '224px'};
  max-height: ${props => props.$maxHeight || '272px'};
  border-radius: 14px;
  border: 1px solid rgba(18, 20, 23, 0.05);
  background-color: #ffffff;
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);

  overflow-y: auto;
  scroll-behavior: smooth;

  & li {
    font-size: 16px;
    font-weight: 500;
    line-height: calc(20 / 16);
    color: rgba(18, 20, 23, 0.2);

    &:not(:last-child) {
      padding-bottom: 8px;

      &:hover {
        color: #121417;
      }
    }
  }
`;
