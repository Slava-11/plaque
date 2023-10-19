import { useAppTableContext } from "../context/AppTableContext";

export const useChangePage = () => {
  const { setPage } = useAppTableContext();
  const changePage = ( newPage: number) => {
    setPage(newPage);
  };
  return changePage;
};
