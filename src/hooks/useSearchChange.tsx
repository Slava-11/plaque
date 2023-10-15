import { useAppTableContext } from "../context/AppTableContext";
import { ChangeEvent } from "react";

export const useSearchChange = () => {
  const { setSearch, setPage } = useAppTableContext();

  const searchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setPage(0);
  };

  return searchChange;
};
