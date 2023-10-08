import React, { createContext, useContext, useState } from 'react';
import { Data, initialRows } from '../utils/utils'; ////////////////// Важно
type ApiContextType = {
  data: Data[];
  setData: React.Dispatch<React.SetStateAction<Data[]>>;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApiContext must be used within an ApiProvider');
  }
  return context;
};

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [data, setData] = useState<Data[]>(initialRows);
  const [filter, setFilter] = useState('');


  return (
    <ApiContext.Provider
      value={{
        data,
        setData,
        filter,
        setFilter
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};