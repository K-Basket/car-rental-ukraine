import { FormSt, InputLeft, InputRight } from './Inputs.styled';

export const Inputs = ({ getDataSelect }) => {
  const handleChange = evt => {
    const inputName = evt.target.name;
    const value = evt.target.value;

    if (inputName === 'priceFrom') getDataSelect({ ...{ priceFrom: value } });
    if (inputName === 'priceTo') getDataSelect({ ...{ priceTo: value } });
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
              onChange={handleChange}
              autoComplete="off"
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
              onChange={handleChange}
              autoComplete="off"
            />
          </div>
        </label>
      </FormSt>
    </>
  );
};
