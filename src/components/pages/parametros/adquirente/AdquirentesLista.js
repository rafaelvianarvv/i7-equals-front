import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

import Pagination from '../../../layout/components/Pagination';

function AdquirentesLista({ page, onChange }) {
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Código</TableCell>              
              <TableCell>Descrição</TableCell>
              <TableCell align="center">Código Fornecedor</TableCell>
              <TableCell align="center">Código Banco</TableCell>
              <TableCell align="center">Código Moeda</TableCell>
              <TableCell align="center">Conta POS</TableCell>
              <TableCell align="center">Conta Tx Adm</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {page.content.map((row, index) => (
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                    <TableCell align="center" width={50}>{row.codigo}</TableCell>
                    <TableCell>{row.descricao}</TableCell>
                    <TableCell align="center">{row.fornecedor}</TableCell>
                    <TableCell align="center">{row.banco}</TableCell>
                    <TableCell align="center">{row.moeda}</TableCell>
                    <TableCell align="center">{row.contaPos}</TableCell>
                    <TableCell align="center">{row.contaTaxaAdmCartao}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} onChange={onChange} />
    </Fragment>
  );
}

export default AdquirentesLista;
