import { useApiContext } from "../context/AppContext";

export const useFilterChart = () => {
  const { data, search } = useApiContext();
  const filterChart = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  return filterChart;
};
