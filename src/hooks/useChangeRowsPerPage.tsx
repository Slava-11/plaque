import { useAppTableContext } from "../context/AppTableContext";

export const useChangeRowsPerPage = () => {
  const { setPage, setRowsPerPage } = useAppTableContext();
  const changeRowsPerPage = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRowsPerPage(parseInt(event.target.value as string, 10));
    setPage(0);
  };
  return changeRowsPerPage;
};
