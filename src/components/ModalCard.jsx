import { Btn } from './Btn';
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

export const ModalCard = () => {
  return (
    <ModalCardSt>
      <article>
        <CardThumbSt>
          <img
            src="https://res.cloudinary.com/ditdqzoio/image/upload/v1687252635/cars/volvo_xc90.jpg"
            alt={'make'}
          />
        </CardThumbSt>

        <DescriptionSt>
          <CardHeadingSt>Buick Enclave, 2008</CardHeadingSt>
          <div>
            {/* <CardTextSt>{`${location[1]} | ${location[2]} | ${rentalCompany}`}</CardTextSt> */}
            <CardTextSt>{`${'Kiev'} | ${'Ukraine'} | ${'Id: 9582'}`}</CardTextSt>
            <CardTextSt>{`${'Fuel Consumption: 10.5'} | ${'Engine Size: 3.6L V6'}`}</CardTextSt>
          </div>

          <CardTextDescSt>
            The Buick Enclave is a stylish and spacious SUV known for its
            comfortable ride and luxurious features.
          </CardTextDescSt>
        </DescriptionSt>

        <DescriptionSt>
          <CardTitleDescSt>Accessories and functionalities:</CardTitleDescSt>
          <CardTextSt>{`${'Kiev'} | ${'Ukraine'} | ${'Id: 9582'}`}</CardTextSt>
          <CardTextSt>{`${'Fuel Consumption: 10.5'} | ${'Engine Size: 3.6L V6'}`}</CardTextSt>
        </DescriptionSt>

        <DescriptionSt>
          <CardTitleDescSt>Rental Conditions: </CardTitleDescSt>
          <CardTexCondittSt>{`Minimum age: 25`}</CardTexCondittSt>
          <CardTexCondittSt>{`Valid driver’s license`}</CardTexCondittSt>
          <CardTexCondittSt>{`Security deposite required`}</CardTexCondittSt>
          <CardTexCondittSt>{`Mileage: 5,858`}</CardTexCondittSt>
          <CardTexCondittSt>{`Price: 40$`}</CardTexCondittSt>
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
