import { useApiContext } from "../context/AppContext";

export const useHandleSearchChange = () => {
    const { setSearch } = useApiContext();
    const handleSearchChange = (event) => {
        setSearch(event.target.value);
      };
  return handleSearchChange
}
