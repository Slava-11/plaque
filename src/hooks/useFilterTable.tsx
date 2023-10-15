import { useAppTableContext } from "../context/AppTableContext";

export const useFilterTable = () => {
  const { scopeData, search } = useAppTableContext();
  const filterTable = scopeData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return filterTable;
};
