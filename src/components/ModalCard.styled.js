import styled from 'styled-components';

export const ModalCardSt = styled.div`
  position: relative;
  width: 541px;
  min-height: 752px;
  padding: 40px;

  border-radius: 24px;
  background-color: #ffffff;

  & svg {
    position: absolute;
    top: 16px;
    right: 16px;
    stroke: #121417;
    cursor: pointer;
  }
`;

export const CardThumbSt = styled.div`
  & img {
    border-radius: 15px;

    width: 469px;
    height: 314px;
    object-fit: cover;
    border-radius: 15px;
  }
`;

export const DescriptionSt = styled.div`
  margin-top: 15px;
  margin-bottom: 24px;
`;

export const CardHeadingSt = styled.h2`
  margin-bottom: 8px;

  font-size: 18px;
  font-weight: 500;
  line-height: calc(24 / 16);

  color: #121417;
`;

export const CardTextSt = styled.p`
  color: rgba(18, 20, 23, 0.5);
`;

export const CardTexCondittSt = styled.p`
  display: inline-block;
  padding: 7px 14px;
  border-radius: 35px;
  color: #363535;
  background-color: #f9f9f9;
  /* background-color: salmon; */
`;

export const CardTextDescSt = styled.p`
  margin-top: 14px;

  font-size: 14px;
  line-height: calc (20/14);

  color: #121417;
`;

export const CardTitleDescSt = styled.p`
  margin-top: 14px;
  margin-bottom: 8px;

  font-size: 14px;
  font-weight: 500;
  line-height: calc (20/14);

  color: #121417;
`;
