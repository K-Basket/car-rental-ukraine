// import { useState } from 'react';
import { getAllCars } from 'api/api';
import { Select } from 'components/Select';
import { useEffect, useState } from 'react';

const Catalog = () => {
  // const [visible, setVisible] = useState(5);
  const [allCars, setAllCars] = useState(null);

  useEffect(() => {
    (async () => {
      const data = await getAllCars();
      setAllCars(data);
    })();
  }, []);

  const carBrendList = () => {
    const allMakeCars = allCars.map(el => {
      return { id: el.id, make: el.make };
    });

    let list = [];

    allMakeCars.forEach(({ make }) => {
      if (!list.includes(make)) list.push(make);
    });

    return list;
  };

  if (allCars) carBrendList();

  return (
    <>
      <h1>Catalog page</h1>
      <p>сторінка, що містить каталог автівок різної комплектації</p>
      <section>
        <Select
          title="Car brand"
          $width="224px"
          $maxHeight="272px"
          list={allCars && carBrendList()}
        />
      </section>
    </>
  );
};

export default Catalog;
