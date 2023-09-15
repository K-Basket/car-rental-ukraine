import { Btn } from './Btn';
import {
  CardContentSt,
  CardHeadingSt,
  CardSetSt,
  CardSt,
  CardTextSt,
  CardThumbSt,
  ItemSt,
  WrapCardHeadingSt,
} from './Cards.styled';

export const Cards = ({ list }) => {
  console.log('list :>> ', list);

  return (
    <section>
      <CardSetSt>
        {list.map(
          ({
            id,
            img,
            make,
            model,
            year,
            rentalPrice,
            address,
            rentalCompany,
            type,
            functionalities,
          }) => {
            const location = address.split(',');

            return (
              <ItemSt key={id}>
                <CardSt>
                  <CardThumbSt>
                    <img src={img} alt={make} />
                  </CardThumbSt>
                  <CardContentSt>
                    <WrapCardHeadingSt>
                      <CardHeadingSt>{`${make} ${model}, ${year}`}</CardHeadingSt>
                      <CardHeadingSt>{rentalPrice}</CardHeadingSt>
                    </WrapCardHeadingSt>
                    <div>
                      <CardTextSt>{`${location[1]} | ${location[2]} | ${rentalCompany}`}</CardTextSt>
                      <CardTextSt>{`${type} | ${model} | ${id} | ${functionalities[0]}`}</CardTextSt>
                    </div>
                  </CardContentSt>
                  <Btn
                    $width="100%"
                    onClick={() => {
                      console.log('onClick Button Learn more');
                    }}
                  >
                    Learn more
                  </Btn>
                </CardSt>
              </ItemSt>
            );
          }
        )}
      </CardSetSt>
    </section>
  );
};
