import { Btn } from './Btn';
import {
  CardContentSt,
  CardHeadingSt,
  CardSetSt,
  CardSt,
  CardTextSt,
  CardThumbSt,
  ItemSt,
} from './Cards.styled';

export const Cards = ({ list }) => {
  console.log('list :>> ', list);

  return (
    <section>
      <CardSetSt>
        {list.map(({ id, img, make }) => {
          return (
            <ItemSt key={id}>
              <CardSt>
                <CardThumbSt>
                  <img src={img} alt={make} />
                </CardThumbSt>
                <CardContentSt>
                  <CardHeadingSt>Pexels 1</CardHeadingSt>
                  <CardTextSt>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </CardTextSt>
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
        })}
      </CardSetSt>
    </section>
  );
};
