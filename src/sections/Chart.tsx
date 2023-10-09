import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TextField from '@mui/material/TextField';
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useApiContext } from "../context/AppContext";
import { useHandleSearchChange } from "../hooks/usehandleSearchChange";
import { useFilterChart } from "../hooks/useFilterChart";

export const Chart = () => {
  const { data, search } = useApiContext();
  const handleSearchChange = useHandleSearchChange()
  const filterChart = useFilterChart() ////////////////// ОБЬЯСНИТЬ МНЕ
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
            <TableCell>Age</TableCell>
            <TableCell>Country</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filterChart.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.country}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
};
