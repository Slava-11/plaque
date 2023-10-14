import { useAppTableContext } from "../context/AppTableContext";
import { ChangeEvent } from "react";

export const useHandleSearchChange = () => {
  const { setSearch, setPage } = useAppTableContext();

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setSearch(newSearch);
    setPage(0);
  };

  return handleSearchChange;
};
