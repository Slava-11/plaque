import { useAppTableContext } from "../context/AppTableContext";

export const useFilterTable = () => {
  const { scopeData, search } = useAppTableContext();

  let filterTable = scopeData;

  if (typeof search === 'string') {
    filterTable = scopeData.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }

  return filterTable;
};