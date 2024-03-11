import { createContext, useContext, useState } from 'react';

type FavsContextType = {
  favIds: number[];
  handleFavorites: (characterId: number) => void;
};

const defaultContext: FavsContextType = {
  favIds: [],
  handleFavorites: () => {},
};

const FavsContext = createContext<FavsContextType>(defaultContext);

export const FavsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favIds, setFavIds] = useState<number[]>([]);

  const handleFavorites = (characterId: number) => {
    if (favIds.includes(characterId)) setFavIds(favIds.filter((favId) => favId !== characterId));
    else setFavIds([...favIds, characterId]);
  };

  return (
    <FavsContext.Provider value={{ favIds, handleFavorites }}>{children}</FavsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFavsContext = () => {
  const context = useContext(FavsContext);

  if (context === undefined) {
    throw new Error('useFavsContext was used outside of its Provider');
  }

  return context;
};
