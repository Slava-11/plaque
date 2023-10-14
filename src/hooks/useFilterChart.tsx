import { useAppTableContext } from "../context/AppTableContext";

export const useFilterChart = () => {
  const { data, search } = useAppTableContext();
  const filterChart = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return filterChart;
};
// Обьяснить почему не value
/// идет что то что будет меняться с массивом
