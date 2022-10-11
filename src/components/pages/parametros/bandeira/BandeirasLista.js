import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Fragment } from "react";

import Pagination from '../../../layout/components/Pagination';

function BandeirasLista({ page, onChange }) {
  return (
    <Fragment>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell align="right">Código</TableCell>
              <TableCell>Descrição</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {page.content.map((row, index) => (
                <TableRow sx={{ "& > *": { borderBottom: "unset" } }} key={index}>
                    <TableCell align="right" width={50}>{row.codigo}</TableCell>
                    <TableCell>{row.descricao}</TableCell>
                </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination page={page} onChange={onChange} />
    </Fragment>
  );
}

export default BandeirasLista;
