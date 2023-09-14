import { getAllCars } from 'api/api';
import { Btn } from 'components/Btn';
import { Inputs } from 'components/Inputs';
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
    const allMakeCars = allCars.map(({ id, make }) => ({ id, make }));

    let list = [];

    allMakeCars.forEach(({ make }) => {
      if (!list.includes(make)) list.push(make);
    });

    return [...list].sort((a, b) => (a > b ? 1 : -1));
  };

  const priceRentList = () => {
    const allRentPrice = allCars.map(({ id, rentalPrice }) => ({
      id,
      rentalPrice: rentalPrice.slice(1),
    }));

    let list = [];

    allRentPrice.forEach(({ rentalPrice }) => {
      if (!list.includes(rentalPrice)) list.push(rentalPrice);
    });

    return [...list].sort((a, b) => a - b);
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
          $maxHeight="188px"
          list={allCars && priceRentList()}
        />
      </section>

      <Btn
        $width="274px"
        onClick={() => {
          console.log('onClick Button Learn more');
        }}
      >
        Learn more
      </Btn>
      <Btn
        $width="125px"
        onClick={() => {
          console.log('onClick Button Rental car');
        }}
      >
        Rental car
      </Btn>

      <Inputs />
    </>
  );
};

export default Catalog;
