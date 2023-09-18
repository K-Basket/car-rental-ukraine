import styled from 'styled-components';

export const ButtonSt = styled.button`
  /* display: inline; */
  min-width: ${props => props.$width || '274px'};
  padding: 12px 0 12px 0;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border: none;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  &:hover,
  :focus {
    background-color: #0b44cd;
  }
`;

export const BtnLoadMoreSt = styled.button`
  display: block;
  margin-top: 100px;
  margin-left: auto;
  margin-right: auto;

  border: none;
  background-color: initial;

  font-size: 16px;
  font-weight: 500;
  line-height: calc(24 / 16);
  text-decoration-line: underline;

  color: #3470ff;
`;
