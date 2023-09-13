import { useState } from 'react';
import { ContainerSt, TitleStyled } from './Select.styled';
import SvgSprite from 'images/sprite.svg';

export const Select = () => {
  const [listSelect] = useState([
    { id: 1, name: 'Australia' },
    { id: 2, name: 'Brazil' },
    { id: 3, name: 'China' },
    { id: 4, name: 'Denmark' },
    { id: 5, name: 'Egypt' },
    { id: 6, name: 'Finland' },
    { id: 7, name: 'Ghana' },
    { id: 8, name: 'Hungary' },
    { id: 9, name: 'India' },
    { id: 10, name: 'Japan' },
  ]);
  const [getOptionName, setGetOptionName] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);

  const handleOptionClick = evt => {
    const option = evt.target.dataset.name;
    setGetOptionName(option);
  };

  const handleShowList = () => {
    setShowOptionList(show => !show);
  };

  console.log('getOptionName :>> ', getOptionName);
  console.log('showOptionList :>> ', showOptionList);
  return (
    <>
      <TitleStyled>Component Select</TitleStyled>
      <ContainerSt>
        <p>Enter the text</p>
        <svg
          width="20px"
          height="20px"
          onClick={handleShowList}
          style={{ transform: showOptionList && `rotate(180deg)` }}
        >
          <use href={`${SvgSprite}#icon-icon-arrow`}></use>
        </svg>
      </ContainerSt>

      <ul>
        {listSelect.map(el => {
          return (
            <li key={el.id} data-name={el.name} onClick={handleOptionClick}>
              {el.name}
            </li>
          );
        })}
      </ul>
    </>
  );
};
