import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export const useCustomContext = () => useContext(MainContext);

export const Context = ({ children }) => {
  const [favorite, setFavorite] = useState(null);

  const changeFavorite = () => {
    setFavorite(prev => !prev);
  };

  return (
    <MainContext.Provider value={{ favorite, setFavorite, changeFavorite }}>
      {children}
    </MainContext.Provider>
  );
};
