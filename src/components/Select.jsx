import { useEffect, useState } from 'react';
import { ContainerSt, ListOptionsSt, TitleStyled } from './Select.styled';
import SvgSprite from 'images/sprite.svg';
// import { getAllCars } from 'api/api';

export const Select = ({ title, $width, $colorValue, $maxHeight, allCars }) => {
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
    { id: 11, name: 'Egypt' },
    { id: 12, name: 'Finland' },
    { id: 13, name: 'Ghana' },
    { id: 14, name: 'Hungary' },
    { id: 15, name: 'India' },
    { id: 16, name: 'Japan' },
  ]);
  const [getOptionName, setGetOptionName] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);

  const listCars = () => {
    const allMakeCars = allCars.map(el => {
      return { id: el.id, make: el.make };
    });

    let list = [];

    allMakeCars.forEach(({ make }) => {
      if (!list.includes(make)) list.push(make);
    });

    return list;
  };

  if (allCars) listCars();

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') setShowOptionList(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOptionList]);

  const handleOptionClick = evt => {
    const option = evt.target.dataset.name;
    setGetOptionName(option);
  };

  const handleShowList = () => {
    setShowOptionList(show => !show);
  };

  console.log('getOptionName :>> ', getOptionName);

  return (
    <>
      {/* <TitleStyled>Component Select</TitleStyled> */}
      <TitleStyled $colorValue={$colorValue}>{title}</TitleStyled>

      <ContainerSt $width={$width} onClick={handleShowList}>
        <p>{!getOptionName ? 'Enter the text' : `${getOptionName}`}</p>
        <svg
          width="20px"
          height="20px"
          // onClick={handleShowList}
          style={{ transform: showOptionList && `rotate(180deg)` }}
        >
          <use href={`${SvgSprite}#icon-icon-arrow`}></use>
        </svg>

        {showOptionList && (
          <ListOptionsSt $width={$width} $maxHeight={$maxHeight}>
            {listCars().map(make => {
              return (
                <li
                  key={make}
                  data-name={make}
                  onClick={handleOptionClick}
                  style={{ color: getOptionName === make && '#121417' }}
                >
                  {make}
                </li>
              );
            })}
          </ListOptionsSt>
        )}
      </ContainerSt>

      {/* {showOptionList && (
        <ListOptionsSt>
          {listSelect.map(el => {
            return (
              <li key={el.id} data-name={el.name} onClick={handleOptionClick}>
                {el.name}
              </li>
            );
          })}
        </ListOptionsSt>
      )} */}
    </>
  );
};
