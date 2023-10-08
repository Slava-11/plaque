import { initialRows } from '../utils/utils';
import { useApiContext } from "../context/AppContext";

export const useHandleFilterChange = () => {
  const { setFilter, setData} = useApiContext();
  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);

    const filteredData = initialRows.filter(
      (row) =>
        row.name.toLowerCase().includes(value) ||
        row.age.toString().includes(value)
    );

    setData(filteredData);
  };
  return handleFilterChange
}
