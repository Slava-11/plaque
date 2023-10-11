import { useApiContext } from "../context/AppContext";

export const useHandleChangePage = () => {
    const { setPage } = useApiContext();
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
  return handleChangePage
}
