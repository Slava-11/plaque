import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TextField from "@mui/material/TextField";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useApiContext } from "../context/AppContext";
import { useHandleSearchChange } from "../hooks/useHandleSearchChange";
import { useFilterChart } from "../hooks/useFilterChart";
import { useFilterAge } from "../hooks/useFilterAge";
import { useHandleChangePage } from "../hooks/useHandleChangePage";
import { useHandleChangeRowsPerPage } from "../hooks/useHandleChangeRowsPerPage";
import React, { useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ListItemIcon from "@mui/material/ListItemIcon";
import IconButton from "@mui/material/IconButton";
import TablePagination from '@mui/material/TablePagination';

export const Chart = () => {
  const { vault, search, setVault,  page, setPage, rowsPerPage, setRowsPerPage } = useApiContext();
  const handleSearchChange = useHandleSearchChange();
  const filterChart = useFilterChart(); ////////////////// ОБЬЯСНИТЬ МНЕ там где метод map
  const filterAge = useFilterAge()
  const handleChangePage = useHandleChangePage()
  const handleChangeRowsPerPage = useHandleChangeRowsPerPage()
  useEffect(() => {
    setVault(filterChart);
  }, [filterChart, setVault]);

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
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>
                Age{" "}
                <IconButton size="small" onClick={() => setVault(filterAge)}>
                  <ListItemIcon>
                    <ArrowUpwardIcon color="primary" />
                  </ListItemIcon>
                </IconButton>
              </TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
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
