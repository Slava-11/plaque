import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';

interface Data {
  id: number;
  name: string;
  age: number;
}

const createData = (id: number, name: string, age: number) => ({ id, name, age });

let initialRows: Data[] = [
  createData(1, 'Alice', 25),
  createData(2, 'Bob', 30),
  createData(3, 'Charlie', 22),
  // Добавьте больше данных по вашему выбору.
];

const TableExample: React.FC = () => {
  const [data, setData] = useState<Data[]>(initialRows);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [filter, setFilter] = useState('');
  const [newUser, setNewUser] = useState({ name: '', age: 0 }); // Для нового пользователя

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };//////////////////////////////

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };//////////////////////////////

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setFilter(value);

    const filteredData = initialRows.filter((row) =>
      row.name.toLowerCase().includes(value) || row.age.toString().includes(value)
    );

    setData(filteredData);
  };//////////////////////////////

  const handleSort = (property: keyof Data) => {
    const isAscending = property === 'age' ? true : false;
    const sortedData = [...data].sort((a, b) =>
      isAscending
        ? (a[property] as number) - (b[property] as number)
        : (b[property] as number) - (a[property] as number)
    );

    setData(sortedData);
  };//////////////////////////////

  const addUser = () => {
    if (newUser.name && newUser.age > 0) {
      const newId = data.length + 1;
      const newUserWithId = { id: newId, ...newUser };
      setData([...data, newUserWithId]);
      setNewUser({ name: '', age: 0 }); // Сбросить поля после добавления
    }
  };/////////////////////////////

  const deleteUser = (id: number) => {
    const updatedData = data.filter((user) => user.id !== id);
    setData(updatedData);
  };////////////////////////////

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        value={filter}
        onChange={handleFilterChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                <TableSortLabel
                  active={true}
                  onClick={() => handleSort('name')}
                >
                  Name
                </TableSortLabel>
              </TableCell>
              <TableCell>
                <TableSortLabel
                  active={true}
                  onClick={() => handleSort('age')}
                >
                  Age
                </TableSortLabel>
              </TableCell>
              <TableCell>Action</TableCell> {/* Добавляем колонку для действий */}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={() => deleteUser(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div>
        {/* Добавляем форму для добавления нового пользователя */}
        <TextField
          label="Name"
          variant="outlined"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <TextField
          label="Age"
          variant="outlined"
          type="number"
          value={newUser.age}
          onChange={(e) => setNewUser({ ...newUser, age: parseInt(e.target.value, 10) })}
        />
        <Button variant="contained" color="primary" onClick={addUser}>
          Add User
        </Button>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default TableExample;