import React, { useState } from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

const columns = [
  { id: 'name', label: 'Name' },
  { id: 'age', label: 'Age' },
  { id: 'country', label: 'Country' },
];

const data = [
  { id: 1, name: 'Alice', age: 25, country: 'USA' },
  { id: 2, name: 'Bob', age: 30, country: 'Canada' },
  { id: 3, name: 'Charlie', age: 28, country: 'UK' },
  { id: 4, name: 'Alice', age: 25, country: 'USA' },
  { id: 5, name: 'Bob', age: 30, country: 'Canada' },
  { id: 6, name: 'Charlie', age: 28, country: 'UK' },
  { id: 7, name: 'Alice', age: 25, country: 'USA' },
  { id: 8, name: 'Bob', age: 30, country: 'Canada' },
  { id: 9, name: 'Charlie', age: 28, country: 'UK' },
  { id: 10, name: 'Alice', age: 25, country: 'USA' },
  { id: 11, name: 'Bob', age: 30, country: 'Canada' },
  { id: 12, name: 'Charlie', age: 28, country: 'UK' },
  // Додайте інші дані за вашим вибором
];

const rowsPerPageOptions = [5, 10, 25];

const PaginatedTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={rowsPerPageOptions}
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

export default PaginatedTable;