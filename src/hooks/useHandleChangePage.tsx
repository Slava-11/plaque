import { useAppTableContext } from "../context/AppTableContext";

export const useHandleChangePage = () => {
  const { setPage } = useAppTableContext();
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  return handleChangePage;
};
