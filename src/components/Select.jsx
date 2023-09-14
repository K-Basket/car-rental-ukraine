import { useEffect, useState } from 'react';
import { ContainerSt, ListOptionsSt, TitleStyled } from './Select.styled';
import SvgSprite from 'images/sprite.svg';

export const Select = ({
  title,
  defaultText,
  $width,
  $colorValue,
  $maxHeight,
  list,
  getDataSelect,
}) => {
  const [optionName, setOptionName] = useState(null);
  const [showOptionList, setShowOptionList] = useState(false);
  const [dataSelect, setDataSelect] = useState({});

  useEffect(() => {
    const handleKeyDown = evt => {
      if (evt.code === 'Escape') setShowOptionList(false);
    };

    // передает данные в компонент Catalog
    getDataSelect(dataSelect);

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [showOptionList]);

  const handleOptionClick = evt => {
    const option = evt.target.dataset.name;
    setOptionName(option);

    const titleKey = title.split(' ').join('');
    setDataSelect({ ...dataSelect, ...{ [titleKey]: option } });
  };

  const handleShowList = () => {
    setShowOptionList(show => !show);
  };

  // console.log('💙💛 optionName :>> ', optionName);
  // console.log('💙💛 dataSelect :>> ', dataSelect);

  return (
    <div>
      <TitleStyled $colorValue={$colorValue}>{title}</TitleStyled>

      <ContainerSt $width={$width} onClick={handleShowList}>
        {title === 'Car brand' ? (
          <p>{!optionName ? `${defaultText}` : `${optionName}`}</p>
        ) : (
          <p>{!optionName ? `${defaultText}` : `To ${optionName}$`}</p>
        )}

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
    </div>
  );
};
