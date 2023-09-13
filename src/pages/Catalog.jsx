// import { useState } from 'react';
import { Select } from 'components/Select';

const Catalog = () => {
  // const [visible, setVisible] = useState(5);

  return (
    <>
      <h1>Catalog page</h1>
      <p>сторінка, що містить каталог автівок різної комплектації</p>
      <section>
        <Select />
      </section>
    </>
  );
};

export default Catalog;
