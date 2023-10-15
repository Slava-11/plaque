import { useAppTableContext } from "../context/AppTableContext";

export const useChangePage = () => {
  const { setPage } = useAppTableContext();
  const changePage = (event, newPage) => {
    setPage(newPage);
  };
  return changePage;
};
