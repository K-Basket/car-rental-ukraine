import { useEffect, useState } from 'react';
import { ContainerSt, ListOptionsSt, TitleStyled } from './Select.styled';
import SvgSprite from 'images/sprite.svg';

export const Select = ({ title, $width, $colorValue, $maxHeight, list }) => {
  const [optionName, setOptionName] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') setShowOptionList(false);
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOptionList]);

  const handleOptionClick = evt => {
    const option = evt.target.dataset.name;
    setOptionName(option);
  };

  const handleShowList = () => {
    setShowOptionList(show => !show);
  };

  console.log('optionName :>> ', optionName);

  return (
    <>
      <TitleStyled $colorValue={$colorValue}>{title}</TitleStyled>

      <ContainerSt $width={$width} onClick={handleShowList}>
        <p>{!optionName ? 'Enter the text' : `${optionName}`}</p>
        <svg
          width="20px"
          height="20px"
          style={{ transform: showOptionList && `rotate(180deg)` }}
        >
          <use href={`${SvgSprite}#icon-icon-arrow`}></use>
        </svg>

        {showOptionList && (
          <ListOptionsSt $width={$width} $maxHeight={$maxHeight}>
            {list.map(item => {
              return (
                <li
                  key={item}
                  data-name={item}
                  onClick={handleOptionClick}
                  style={{ color: optionName === item && '#121417' }}
                >
                  {item}
                </li>
              );
            })}
          </ListOptionsSt>
        )}
      </ContainerSt>
    </>
  );
};
