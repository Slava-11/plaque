import { useApiContext } from "../context/AppContext";

export const useFilterAge = () => {
    const { data } = useApiContext();
    const dataCopy = [...data];
    const filterAge = dataCopy.sort((a, b) => a.age - b.age)
    
  return filterAge
}
//Обьясни мне sort

// import { useApiContext } from "../context/AppContext";

// export const useFilterAge = () => {
//     const { data } = useApiContext();
//     const filterAge = () =>{
//        const filterAgeData = [...data].sort((a, b) => a.age - b.age);
//        return filterAgeData
//     }
//   return filterAge
// }


// export const useFilterAge = () => {
//     const { data } = useApiContext();
//     const dataCopy = [...data];
//     const filterAge = dataCopy.sort((a, b) => a.age - b.age)
//   return filterAge
// }