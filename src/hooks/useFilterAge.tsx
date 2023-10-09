import { useApiContext } from "../context/AppContext";

export const useFilterAge = () => {
    const { data } = useApiContext();
    const filterAge = () =>{
        data.sort((a, b) => a.age - b.age)
    }
  return filterAge
}
//Обьясни мне sort