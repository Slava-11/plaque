import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const columns = [
  { label: 'Name', dataField: 'name' },
  { label: 'Holding', dataField: 'holding' },
  { label: 'Allocation', dataField: 'allocation' },
  { label: 'Target Allocation', dataField: 'targetAllocation' },
  { label: 'Market Price', dataField: 'price' },
];

const data = [
  { name: 'Item 1', holding: '10%', allocation: '15%', targetAllocation: '20%', price: '$100' },
  { name: 'Item 2', holding: '5%', allocation: '10%', targetAllocation: '8%', price: '$50' },
  // Додайте більше даних за потребою
];

const DataTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.dataField}>{column.label}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column.dataField}>{row[column.dataField]}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;