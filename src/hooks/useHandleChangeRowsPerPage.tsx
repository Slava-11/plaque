import { useAppTableContext } from "../context/AppTableContext";

export const useHandleChangeRowsPerPage = () => {
  const { setPage, setRowsPerPage } = useAppTableContext();
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Скидання на першу сторінку при зміні кількості рядків
  };
  return handleChangeRowsPerPage;
};
