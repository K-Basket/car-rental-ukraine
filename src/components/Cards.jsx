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
import SvgSprite from 'images/sprite.svg';
import { putAddFavorite } from 'api/api';
import { useCustomContext } from './Context';

export const Cards = ({ list, onClose, getIdCar, getFlag }) => {
  const { changeFavorite } = useCustomContext();

  return (
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
          favorite,
        }) => {
          const location = address.split(',');

          return (
            <ItemSt
              key={id}
              data-card={id}
              onClick={evt => {
                getIdCar(evt.currentTarget.dataset.card);
              }}
            >
              <CardSt>
                <CardThumbSt>
                  <img src={img} alt={make} />
                  <svg
                    width="20px"
                    height="20px"
                    data-card={id}
                    style={{
                      fill: favorite && '#3470ff',
                      stroke: favorite && 'none',
                    }}
                    onClick={() => {
                      (async () => {
                        await putAddFavorite(id, { favorite: !favorite });
                        changeFavorite();
                      })();
                    }}
                  >
                    <use href={`${SvgSprite}#icon-icon-like-active`}></use>
                  </svg>
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

                <Btn $width="100%" idCard={id} onClick={onClose}>
                  Learn more
                </Btn>
              </CardSt>
            </ItemSt>
          );
        }
      )}
    </CardSetSt>
  );
};
