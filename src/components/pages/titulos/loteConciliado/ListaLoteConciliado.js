import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Row(props) {
  const { lote } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">{lote.numeroLote}</TableCell>        
        <TableCell align="right">{lote.dataMovimento}</TableCell>
        <TableCell align="right">{lote.quantidadeTitulos}</TableCell>
        <TableCell align="right">{lote.valorTotalTitulos}</TableCell>
        <TableCell align="right">{lote.valorTotalReceber}</TableCell>
        <TableCell align="right">{lote.valorTotalDesconto}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Títulos
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Numtransvenda</TableCell>
                    <TableCell align="right">Prest</TableCell>
                    <TableCell align="right">Total Prests</TableCell>
                    <TableCell align="right">NSU</TableCell>
                    <TableCell align="right">Autorização</TableCell>
                    <TableCell align="center">Data Venda</TableCell>
                    <TableCell align="center">Data Vencimento</TableCell>
                    <TableCell align="center">Data Venc Orig</TableCell>
                    <TableCell align="center">Data Recebimento</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Valor Orig</TableCell>
                    <TableCell align="right">Valor Recebido</TableCell>
                    <TableCell align="right">Valor Comissão</TableCell>
                    <TableCell align="left">Situação</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lote.titulosEnviados.map((titulo, index) => (
                    <TableRow key={index}>
                      <TableCell component="th" scope="row">{titulo.numeroTransacao}</TableCell>
                      <TableCell align="right">{titulo.numeroParcela}</TableCell>
                      <TableCell align="right">{titulo.totalParcelas}</TableCell>
                      <TableCell align="right">{titulo.numeroNsu}</TableCell>
                      <TableCell align="right">{titulo.numeroAutorizacao}</TableCell>
                      <TableCell align="center">{titulo.dataVenda}</TableCell>
                      <TableCell align="center">{titulo.dataVencimento}</TableCell>
                      <TableCell align="center">{titulo.dataVencimentoOrigem}</TableCell>
                      <TableCell align="center">{titulo.dataPagamento}</TableCell>
                      <TableCell align="right">{titulo.valor}</TableCell>
                      <TableCell align="right">{titulo.valorOrigem}</TableCell>
                      <TableCell align="right">{titulo.valorPago}</TableCell>
                      <TableCell align="right">{titulo.valorDesconto}</TableCell>
                      <TableCell align="left">{titulo.situacao}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function ListaLoteRecebido( props ) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Numero Lote</TableCell>            
            <TableCell align="right">Data Movimento</TableCell>
            <TableCell align="right">Qtde Titulos</TableCell>
            <TableCell align="right">Valor Total</TableCell>
            <TableCell align="right">Valor Receber</TableCell>
            <TableCell align="right">Valor Comissao</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.lotes.map((lote) => (
            <Row key={lote.name} lote={lote} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}