import styled from 'styled-components';

export const ButtonSt = styled.button`
  width: ${props => props.$width || '274px'};
  padding: 12px 0 12px 0;

  font-size: 14px;
  font-weight: 600;
  line-height: calc(20 / 14);

  border: none;
  border-radius: 12px;
  color: #ffffff;
  background-color: #3470ff;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`;
