export type Data = {
    id: number;
    name: string;
    age: number;
  };
  
  export const createData = (id: number, name: string, age: number) => ({
    id,
    name,
    age,
  });
  
  export const initialRows: Data[] = [
    createData(1, 'Alice', 25),
  createData(2, 'Bob', 30),
  createData(3, 'Charlie', 22),
  createData(4, 'David', 28),
  createData(5, 'Eva', 24),
  createData(6, 'Frank', 35),
  createData(7, 'Grace', 27),
  createData(8, 'Helen', 31),
  ];