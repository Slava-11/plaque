import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useAppTableContext } from "../context/AppTableContext";
import { useHandleSearchChange } from "../hooks/useHandleSearchChange";
import { useFilterChart } from "../hooks/useFilterChart";
import { useHandleChangePage } from "../hooks/useHandleChangePage";
import { useHandleChangeRowsPerPage } from "../hooks/useHandleChangeRowsPerPage";
import React, { useEffect } from "react";
import TablePagination from "@mui/material/TablePagination";

export const AppTable = () => {
  const {
    colums,
    vault,
    search,
    setVault,
    page,
    rowsPerPage,
    setRowsPerPage,
  } = useAppTableContext();
  const handleSearchChange = useHandleSearchChange();
  const filterChart = useFilterChart(); ////////////////// ОБЬЯСНИТЬ МНЕ там где метод map
  const handleChangePage = useHandleChangePage();
  const handleChangeRowsPerPage = useHandleChangeRowsPerPage();
  useEffect(() => {
    setVault(filterChart);
  }, [filterChart, setVault, search, page, rowsPerPage]);

  return (
    <>
      <TextField
        label="Введите текст"
        variant="outlined"
        value={search}
        onChange={handleSearchChange}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            {colums.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>{row.country}</TableCell>
              </TableRow>
            ))}
          </TableHead>
          <TableBody>
            {vault
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.age}</TableCell>
                  <TableCell>{row.country}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={vault.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </>
  );
};
