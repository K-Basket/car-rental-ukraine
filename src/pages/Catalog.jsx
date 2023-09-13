import { useState } from 'react';
import { LabelStyled, SelectStyled } from './Catalog.styled';
import SelectSt from './SelectSt';

const Catalog = () => {
  const [visible, setVisible] = useState(5);

  return (
    <>
      <h1>Catalog page</h1>
      <p>сторінка, що містить каталог автівок різної комплектації</p>
      <section>
        <SelectSt />
        <LabelStyled>
          Car brand
          <SelectStyled
            name="Name Select"
            defaultValue="lime"
            // size={visible}
            onClick={() => {
              console.log('Hi');
            }}
            onChange={() => {
              console.log('onChange');
            }}
          >
            <option value="grapefruit">Грейпфрут</option>
            <option value="lime">Лайм</option>
            <option defaultValue="coconut">Кокос</option>
            <option value="mango">Манго</option>
          </SelectStyled>
        </LabelStyled>
      </section>
    </>
  );
};

export default Catalog;
