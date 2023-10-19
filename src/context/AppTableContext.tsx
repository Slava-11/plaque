import React, { createContext, useContext, useState, useEffect } from "react";
import { MyScopeData } from "../types/types";
import { fetchUsers } from "../api/api";

type AppTableContextType = {
  scopeData: MyScopeData[];
  search: string | number | boolean;
  setSearch: React.Dispatch<React.SetStateAction<string | number | boolean>>;
  data: MyScopeData[];
  setData: React.Dispatch<React.SetStateAction<MyScopeData[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: React.Dispatch<React.SetStateAction<number>>;
};

const AppTableContext = createContext<AppTableContextType | undefined>(undefined);

export const useAppTableContext = () => {
  const context = useContext(AppTableContext);
  if (!context) {
    throw new Error("useAppTableContext must be used within a TableProvider");
  }
  return context;
};

type TableProviderProps = {
  children: React.ReactNode;
};

export const TableProvider: React.FC<TableProviderProps> = ({ children }) => {
  const [scopeData, setScopeData] = useState<MyScopeData[]>([]);
  const [search, setSearch] = useState<string | number | boolean>('');
  const [data, setData] = useState<MyScopeData[]>([]);
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const users = await fetchUsers();
        setScopeData(users);
        setData(users);
      } catch (error) {
        console.error("Помилка під час отримання даних:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <AppTableContext.Provider
      value={{
        scopeData,
        search,
        setSearch,
        data,
        setData,
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