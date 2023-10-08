import React, { useContext, useState } from 'react';
import TextField from '@mui/material/TextField';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import Button from '@mui/material/Button';
import { useApiContext } from '../context/AppContext';
import { useHandleFilterChange } from '../hooks/useHandleFilterChange';
import { useHandleDeleteUser } from '../hooks/useHandleDeleteUser';
import useHandlePagination from '../hooks/useHandlePagination';

const Main: React.FC = () => {
  const { data, filter } = useApiContext();
  const handleFilterChange = useHandleFilterChange();
  const handleDeleteUser = useHandleDeleteUser();

  const { currentPage, itemsPerPage, setCurrentPage, setItemsPerPage, paginate, handlePreviousPage, handleNextPage } = useHandlePagination();

  const updatedItemsPerPage = 5;

  // Фильтрация данных
  const filteredData = data.filter((row) =>
    row.name.toLowerCase().includes(filter.toLowerCase()) || row.age.toString().includes(filter)
  );

  // Правильное вычисление totalPages после фильтрации
  const totalPages = Math.ceil(filteredData.length / updatedItemsPerPage);

  // Обновляем currentPage, если он больше totalPages
  if (currentPage > totalPages) {
    setCurrentPage(totalPages);
  }

  // Правильно отображаем данные на текущей странице
  const paginatedData = paginate(filteredData, currentPage, updatedItemsPerPage);

  if (itemsPerPage !== updatedItemsPerPage) {
    setCurrentPage(1);
    setItemsPerPage(updatedItemsPerPage);
  }

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
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleDeleteUser(row.id)}
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
        <Button variant="outlined" onClick={handlePreviousPage}>
          Previous
        </Button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <Button variant="outlined" onClick={handleNextPage}>
          Next
        </Button>
      </div>
    </div>
  );
};

export default Main;