import { useApiContext } from "../context/AppContext";

export const useHandleDeleteUser = () => {
  const { data, setData } = useApiContext();

  const deleteUser = (id: number) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };
  return deleteUser;
};
