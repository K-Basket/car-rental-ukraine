import { getAllCars } from 'api/api';
import { Btn } from 'components/Btn';
import { BtnLoadMoreSt } from 'components/Btn.styled';
import { Cards } from 'components/Cards';
import { Inputs } from 'components/Inputs';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
import { Select } from 'components/Select';
import { useEffect, useState } from 'react';

const Catalog = () => {
  const [allCars, setAllCars] = useState([]);
  const [filterCars, setFilterCars] = useState();
  const [filterData, setFilterData] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [dataCar, setDataCar] = useState({});
  const [firstPage, setFirstPage] = useState(false);

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

  const toggleModal = () => {
    setShowModal(prev => !prev);
    document.body.style.overflow = 'visible'; // re scroll
  };

  const getIdCar = idCard => {
    const dataCar = allCars.find(el => el.id === idCard);
    setDataCar(dataCar);
  };

  const filtered = () => {
    const make = allCars.filter(el => {
      return el.make === filterData.Carbrand;
    });

    const priceHour = allCars.filter(el => {
      return el.rentalPrice === `$${filterData.Pricehour}`;
    });

    let mileage = [];

    allCars.forEach(el => {
      if (
        el.mileage > filterData.priceFrom &&
        el.mileage <= filterData.priceTo
      ) {
        mileage.push(el);
      }
    });

    if (filterData.Carbrand) {
      setFilterData({});
      setFilterCars(make);
    }
    if (priceHour.length) {
      setFilterData({});
      setFilterCars(priceHour);
    }
    if (mileage.length) {
      setFilterData({});
      setFilterCars(mileage);
    }
  };

  const handleSearch = () => {
    filtered();
  };

  return (
    <>
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

      <section
        style={{
          marginBottom: '150px',
        }}
      >
        <Cards
          onClose={toggleModal}
          getIdCar={getIdCar}
          list={filterCars ? filterCars : allCars}
        />

        {!firstPage && (
          <BtnLoadMoreSt
            onClick={() => {
              setFirstPage(true);
            }}
          >
            Load more
          </BtnLoadMoreSt>
        )}
      </section>

      {showModal && (
        <Modal onClose={toggleModal}>
          <ModalCard onClose={toggleModal} dataCar={dataCar} />
        </Modal>
      )}
    </>
  );
};

export default Catalog;
