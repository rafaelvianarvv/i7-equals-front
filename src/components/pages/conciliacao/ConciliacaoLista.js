import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";
import styles from "./Conciliacao.module.css";

function ConciliacaoLista({ page, onChange }) {
  return (
    <Fragment>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <TableContainer component={Paper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Data</TableCell>
                <TableCell>Tipo Conciliação</TableCell>
                <TableCell>Situação Conciliação</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {page.content.map((row, index) => (
                  <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                      <TableCell align="right" width={50}>{row.dataHoraInicio}</TableCell>
                      <TableCell>{row.tipoConciliacao}</TableCell>
                      <TableCell>{row.situacaoConciliacao}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
    </Fragment>
  );
}

export default ConciliacaoLista