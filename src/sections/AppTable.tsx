import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppTableContext } from "../context/AppTableContext";
import { useSearchChange } from "../hooks/useSearchChange";
import { useFilterTable } from "../hooks/useFilterTable";
import { useChangePage } from "../hooks/useChangePage";
import { useChangeRowsPerPage } from "../hooks/useChangeRowsPerPage";
import React, { useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";
import { columns } from "../data/data";

export const AppTable = () => {
  const { data, search, setData, page, rowsPerPage } = useAppTableContext();
  const searchChange = useSearchChange();
  const filterTable = useFilterTable();
  const changePage = useChangePage();
  const changeRowsPerPage = useChangeRowsPerPage();
  const sliceData = data.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );
  useEffect(() => {
    setData(filterTable);
  }, [filterTable, setData, search, page, rowsPerPage]);

  return (
    <>
      <TextField
        label="Введите текст"
        variant="outlined"
        value={search}
        onChange={searchChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {columns.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {sliceData.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={data.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={changePage}
        onRowsPerPageChange={changeRowsPerPage}
      />
    </>
  );
};
