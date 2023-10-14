import React, { createContext, useContext, useState } from "react";
import { MyData } from "../utils/utils";

type AppTableContextType = {
  data: MyData[];
  search: string | number | boolean;
  setSearch: string | number;
  vault: MyData[];
  setVault: MyData[];
  page: number;
  setPage: number;
  rowsPerPage: number;
  setRowsPerPage: number;
};


const AppTableContext = createContext<AppTableContextType | undefined>(undefined);

export const useAppTableContext = () => {
  const context = useContext(AppTableContext);
  if (!context) {
    throw new Error("useApiContext must be used within an TableProvider");
  }
  return context;
};

type TableProviderProps = {
  children: React.ReactNode;
};

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const colums = [{
    name: 'Name',
    age: 'Age',
    country: 'Country',
  }]
  const data = [
    { name: "Slava", age: 19, country: "Ukraine" },
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "Canada" },
    { name: "Bob", age: 28, country: "UK" },
    { name: "Johny", age: 20, country: "USA" },
    { name: "Boby", age: 18, country: "UK" },
    { name: "Slava", age: 19, country: "Ukraine" },
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "Canada" },
    { name: "Bob", age: 28, country: "UK" },
    { name: "Johny", age: 20, country: "USA" },
    { name: "Boby", age: 18, country: "UK" },
    { name: "Slava", age: 19, country: "Ukraine" },
    { name: "John", age: 30, country: "USA" },
    { name: "Alice", age: 25, country: "Canada" },
    { name: "Bob", age: 28, country: "UK" },
    { name: "Johny", age: 20, country: "USA" },
    { name: "Boby", age: 18, country: "UK" },
  ];
  const [search, setSearch] = useState('')
  const [vault, setVault] = useState(data)
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  // const updateOnSearchChange=(search: string) =>{
  //   setPage(0)
  //   setSearch(search)
  // }
  return (
    <AppTableContext.Provider
      value={{
        colums,
        data,
        search,
        setSearch,
        vault,
        setVault,
        page,
        setPage,
        rowsPerPage,
        setRowsPerPage,
      }}
    >
      {children}
    </AppTableContext.Provider>
  );
};
