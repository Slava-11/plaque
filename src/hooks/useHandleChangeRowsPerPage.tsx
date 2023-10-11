import { useApiContext } from "../context/AppContext";

export const useHandleChangeRowsPerPage = () => {
    const { setPage, setRowsPerPage } = useApiContext();
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0); // Скидання на першу сторінку при зміні кількості рядків
      };
  return handleChangeRowsPerPage
}
