import { useAppTableContext } from "../context/AppTableContext";

export const useChangeRowsPerPage = () => {
  const { setPage, setRowsPerPage } = useAppTableContext();
  const changeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return changeRowsPerPage;
};
