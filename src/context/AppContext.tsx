import React, { createContext, useContext, useEffect, useState } from "react";

type ApiContextType = {
  data: any;
  search: string | number;
  setSearch: string | number;
};

const ApiContext = createContext<ApiContextType | undefined>(undefined);

export const useApiContext = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error("useApiContext must be used within an ApiProvider");
  }
  return context;
};

type ApiProviderProps = {
  children: React.ReactNode;
};

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const data = [
    { name: "Slava", age: 19, country: "Ukraine" },
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "Canada" },
    { name: "Bob", age: 28, country: "UK" },
  ];
  const [search, setSearch] = useState('')

  return (
    <ApiContext.Provider
      value={{
        data,
        search,
        setSearch
      }}
    >
      {children}
    </ApiContext.Provider>
  );
};
