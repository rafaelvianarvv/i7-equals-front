import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

import Pagination from '../../../layout/components/Pagination';

function CobrancasEqualsLista({ page, onChange }) {
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              {/* <TableCell>Item</TableCell> */}
              <TableCell align="right">Código</TableCell>
              <TableCell>Descrição</TableCell>
              <TableCell>Produto</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {page.content.map((row, index) => (
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                    {/* <TableCell component="th" scope="row">{index+1}</TableCell> */}
                    <TableCell align="left" width={50}>{row.codigo}</TableCell>
                    <TableCell>{row.descricao}</TableCell>
                    <TableCell>{row.produto.codigo} - {row.produto.descricao}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} onChange={onChange} />
    </Fragment>
  );
}

export default CobrancasEqualsLista