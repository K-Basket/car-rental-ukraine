import { getAllCars } from 'api/api';
import { Cards } from 'components/Cards';
import { useCustomContext } from 'components/Context';
import { Modal } from 'components/Modal';
import { ModalCard } from 'components/ModalCard';
// import { useCustomContext } from 'components/Context';
import { useEffect, useState } from 'react';

const Favorites = () => {
  // const { changeFavorite } = useCustomContext();
  const [showModal, setShowModal] = useState(false);
  const [dataCar, setDataCar] = useState({});
  const [listFafotite, setListFafotite] = useState(null);

  const { favorite } = useCustomContext();

  useEffect(() => {
    (async () => {
      const data = await getAllCars();

      const listFavoriteCars = data.filter(el => {
        return el.favorite === true;
      });

      setListFafotite(listFavoriteCars);
    })();
  }, [favorite]);

  const toggleModal = () => {
    setShowModal(prev => !prev);
    document.body.style.overflow = 'visible'; // re scroll
  };

  const getIdCar = idCard => {
    const dataCar = listFafotite.find(el => el.id === idCard);
    setDataCar(dataCar);
  };

  return (
    <>
      <section
        style={{
          marginBottom: '150px',
          marginTop: '50px',
        }}
      >
        {listFafotite && (
          <Cards
            onClose={toggleModal}
            getIdCar={getIdCar}
            list={listFafotite}
          />
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

export default Favorites;
