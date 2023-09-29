import axios from 'axios';

const BASE_URL = 'https://65005a6318c34dee0cd4c52c.mockapi.io/';

export const getAllCars = async () => {
  const { data } = await axios.get(`${BASE_URL}advert`);

  return data;
};

export const putAddFavorite = async (id, obj) => {
  const { data } = await axios.put(`${BASE_URL}adverts/${id}`, obj);

  return data;
};

export const getById = async id => {
  const { data } = await axios(`${BASE_URL}adverts/${id}`);

  return data;
};
