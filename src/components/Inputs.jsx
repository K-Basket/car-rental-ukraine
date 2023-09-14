import { useEffect, useState } from 'react';
import {
  FormSt,
  InputLeft,
  InputRight,
  WrapInput,
  WrapInputSt,
} from './Inputs.styled';
import { TitleStyled } from './Select.styled';

export const Inputs = ({ getDataSelect }) => {
  const [inputValue, setInputValue] = useState({});

  useEffect(() => {
    getDataSelect(inputValue);
  }, [inputValue]);

  const handleChange = evt => {
    const inputName = evt.target.name;
    const value = evt.target.value;

    if (inputName === 'priceFrom')
      setInputValue({ ...inputValue, ...{ priceFrom: value } });

    if (inputName === 'priceTo')
      setInputValue({ ...inputValue, ...{ priceTo: value } });
  };

  return (
    <>
      <FormSt onSubmit={() => {}}>
        <label>
          {'Price/ 1 hour'}

          <div>
            <p>From</p>
            <InputLeft
              type="text"
              name="priceFrom"
              // defaultValue={`From `}
              onChange={handleChange}
              autoComplete="off"
              // placeholder="From"
            />
          </div>
        </label>

        <label>
          {'Сar mileage / km'}
          <div>
            <p>To</p>
            <InputRight
              type="text"
              name="priceTo"
              // defaultValue={`To `}
              onChange={handleChange}
              autoComplete="off"
              // placeholder="To"
            />
          </div>
        </label>
      </FormSt>
    </>
  );
};
