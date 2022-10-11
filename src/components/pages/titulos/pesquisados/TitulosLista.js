import { Fragment } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Pagination from '../../../layout/components/Pagination';

function TitulosLista({ page, handleOnChange }) {
  return (
    <Fragment>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Venda</TableCell>
              <TableCell>Parcela</TableCell>
              <TableCell>Data Venda</TableCell>
              <TableCell>Data Emissão</TableCell>
              <TableCell>Data Vencto</TableCell>
              <TableCell>NSU</TableCell>
              <TableCell>Autorização</TableCell>
              <TableCell>Cartão</TableCell>
              <TableCell align="center">Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {page.content.map((row, index) => (
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                    <TableCell component="th" scope="row">{index+1}</TableCell>
                    <TableCell>{row.numeroTransacao}</TableCell>
                    <TableCell>{row.numeroParcela}</TableCell>
                    <TableCell>{row.dataVenda}</TableCell>
                    <TableCell>{row.dataEmissao}</TableCell>
                    <TableCell>{row.dataVencimento}</TableCell>
                    <TableCell>{row.numeroNsu}</TableCell>
                    <TableCell>{row.numeroAutorizacao}</TableCell>
                    <TableCell>{row.numeroCartao}</TableCell>
                    <TableCell align="right">{row.valor}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Fragment>
  );
}

export default TitulosLista;
