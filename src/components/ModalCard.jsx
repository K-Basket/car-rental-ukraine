import { Btn } from './Btn';
import SvgSprite from 'images/sprite.svg';
import {
  CardHeadingSt,
  CardTexCondittSt,
  CardTextDescSt,
  CardTextSt,
  CardThumbSt,
  CardTitleDescSt,
  DescriptionSt,
  ModalCardSt,
} from './ModalCard.styled';

export const ModalCard = ({ onClose, dataCar }) => {
  const {
    img,
    make,
    model,
    year,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    description,
    accessories,
    functionalities,
    rentalPrice,
    mileage,
    rentalConditions,
  } = dataCar;
  const location = address.split(',');
  const rentalCondit = rentalConditions.split('\n');

  return (
    <ModalCardSt>
      <svg width="24px" height="24px" onClick={onClose}>
        <use href={`${SvgSprite}#icon-x`}></use>
      </svg>
      <article>
        <CardThumbSt>
          <img src={img} alt={'make'} />
        </CardThumbSt>

        <DescriptionSt>
          <CardHeadingSt>{`${make} ${model}, ${year}`}</CardHeadingSt>
          <div>
            {/* <CardTextSt>{`${location[1]} | ${location[2]} | ${rentalCompany}`}</CardTextSt> */}
            <CardTextSt>{`${location[1]} | ${location[2]} | id: ${id} | Year: ${year} | Type: ${type}`}</CardTextSt>
            <CardTextSt>{`Fuel Consumption: ${fuelConsumption} | Engine Size: ${engineSize}`}</CardTextSt>
          </div>

          <CardTextDescSt>{description}</CardTextDescSt>
        </DescriptionSt>

        <DescriptionSt>
          <CardTitleDescSt>Accessories and functionalities:</CardTitleDescSt>
          <CardTextSt>{`${accessories[0]} | ${accessories[1]} | ${accessories[2]}`}</CardTextSt>
          <CardTextSt>{`${functionalities[0]} | ${functionalities[1]} | ${functionalities[2]}`}</CardTextSt>
        </DescriptionSt>

        <DescriptionSt>
          <CardTitleDescSt>Rental Conditions: </CardTitleDescSt>
          <CardTexCondittSt>{`${rentalCondit[0]}`}</CardTexCondittSt>
          <CardTexCondittSt>{`${rentalCondit[1]}`}</CardTexCondittSt>
          <CardTexCondittSt>{`${rentalCondit[2]}`}</CardTexCondittSt>
          <CardTexCondittSt>{`Mileage: ${mileage.toLocaleString()}`}</CardTexCondittSt>
          <CardTexCondittSt>{`Price: ${rentalPrice}`}</CardTexCondittSt>
        </DescriptionSt>

        <Btn
          $width="125px"
          onClick={() => {
            console.log('onClick Button Rental car');
          }}
        >
          Rental car
        </Btn>
      </article>
    </ModalCardSt>
  );
};
