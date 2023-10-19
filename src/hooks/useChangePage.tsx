import { useAppTableContext } from "../context/AppTableContext";

export const useChangePage = () => {
  const { setPage } = useAppTableContext();
  const changePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };
  return changePage;
};
