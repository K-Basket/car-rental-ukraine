import { createContext, useContext, useState } from 'react';

const MainContext = createContext();

export const useCustomContext = () => useContext(MainContext);

export const Context = ({ children }) => {
  const [favorite, setFavorite] = useState(null);

  const changeState = () => {
    setFavorite(prev => !prev);
  };

  return (
    <MainContext.Provider value={{ favorite, setFavorite, changeState }}>
      {children}
    </MainContext.Provider>
  );
};
