import { getAllCars } from 'api/api';
import { Select } from 'components/Select';
import { useEffect, useState } from 'react';

const Catalog = () => {
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

  const priceRentList = () => {
    const allRentPrice = allCars.map(el => {
      return { id: el.id, rentalPrice: el.rentalPrice };
    });

    let list = [];

    allRentPrice.forEach(({ rentalPrice }) => {
      if (!list.includes(rentalPrice)) list.push(rentalPrice);
    });

    return list;
  };

  if (allCars) {
    carBrendList();
    priceRentList();
  }

  return (
    <>
      <h1>Catalog page</h1>
      <p>сторінка, що містить каталог автівок різної комплектації</p>
      <section style={{ display: 'flex' }}>
        <Select
          title="Car brand"
          defaultText="Enter the text"
          $width="224px"
          $maxHeight="272px"
          list={allCars && carBrendList()}
        />
        <Select
          title="Price/ 1 hour"
          defaultText="To $"
          $width="125px"
          $maxHeight="272px"
          list={allCars && priceRentList()}
        />
      </section>
    </>
  );
};

export default Catalog;
