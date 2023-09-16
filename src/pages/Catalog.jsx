import { getAllCars } from 'api/api';
import { Btn } from 'components/Btn';
import { Cards } from 'components/Cards';
import { Inputs } from 'components/Inputs';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { Select } from 'components/Select';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [filterData, setFilterData] = useState({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    (async () => {
      const data = await getAllCars();
      setAllCars(data);
    })();
  }, []);

  // получает данные из компонентов: Select, Inputs
  const getDataSelect = dataSelect => {
    setFilterData({ ...filterData, ...dataSelect });
  };
  console.log('filterData Catalog :>> ', filterData);

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

  const handleSearch = () => {
    console.log('BTN Search');
  };

  const toggleModal = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      {/* <h1>Catalog page</h1>
      <p>сторінка, що містить каталог автівок різної комплектації</p> */}

      <section
        style={{
          display: 'flex',
          gap: '18px',
          alignItems: 'flex-end',
          justifyContent: 'center',
          marginTop: '50px',
          marginBottom: '50px',
        }}
      >
        <Select
          title="Car brand"
          defaultText="Enter the text"
          $width="224px"
          $maxHeight="272px"
          list={allCars && carBrendList()}
          getDataSelect={getDataSelect}
        />
        <Select
          title="Price/ 1 hour"
          defaultText="To $"
          $width="125px"
          $maxHeight="188px"
          list={allCars && priceRentList()}
          getDataSelect={getDataSelect}
        />
        <Inputs getDataSelect={getDataSelect} />

        <Btn $width="136px" onClick={handleSearch}>
          Search
        </Btn>
      </section>

      <section>
        <Cards onClose={toggleModal} list={allCars && allCars} />
      </section>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard />
        </Modal>
      )}

      {/* <Btn
        $width="274px"
        onClick={() => {
          console.log('onClick Button Learn more');
        }}
      >
        Learn more
      </Btn> */}

      {/* <Btn
        $width="125px"
        onClick={() => {
          console.log('onClick Button Rental car');
        }}
      >
        Rental car
      </Btn> */}
    </>
  );
};

export default Catalog;
