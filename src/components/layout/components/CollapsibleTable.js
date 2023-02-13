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

function createData(name, calories, fat, carbs, protein, price) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    history: [
      {
        date: '2020-01-05',
        customerId: '11091700',
        amount: 3,
      },
      {
        date: '2020-01-02',
        customerId: 'Anonymous',
        amount: 1,
      },
    ],
  };
}

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
        <TableCell align="right">{lote.valorTotalRecebimento}</TableCell>
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
                    <TableCell align="right">Numtransvenda</TableCell>
                    <TableCell align="right">Prest</TableCell>
                    <TableCell align="right">NSU</TableCell>
                    <TableCell align="right">Autorização</TableCell>
                    <TableCell align="right">Data Venda</TableCell>
                    <TableCell align="right">Data Vencimento</TableCell>
                    <TableCell align="right">Data Recebimento</TableCell>
                    <TableCell align="right">Valor</TableCell>
                    <TableCell align="right">Valor Recebido</TableCell>
                    <TableCell align="right">Valor Comissão</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lote.titulosEnviados.map((titulo) => (
                    <TableRow key={titulo.numtransvenda}>
                      <TableCell component="th" scope="row">{titulo.numeroTransacao}</TableCell>
                      <TableCell align="right">{titulo.numeroParcela}</TableCell>
                      <TableCell align="right">{titulo.numeroNsu}</TableCell>
                      <TableCell align="right">{titulo.numeroAutorizacao}</TableCell>
                      <TableCell align="right">{titulo.dataVenda}</TableCell>
                      <TableCell align="right">{titulo.dataVencimento}</TableCell>
                      <TableCell align="right">{titulo.dataPagamento}</TableCell>
                      <TableCell align="right">{titulo.valor}</TableCell>
                      <TableCell align="right">{titulo.valorPago}</TableCell>
                      <TableCell align="right">{titulo.valorDesconto}</TableCell>
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
/*
Row.propTypes = {
  row: PropTypes.shape({
    calories: PropTypes.number.isRequired,
    carbs: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    history: PropTypes.arrayOf(
      PropTypes.shape({
        amount: PropTypes.number.isRequired,
        customerId: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
      }),
    ).isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    protein: PropTypes.number.isRequired,
  }).isRequired,
};

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
  createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
  createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
  createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
];
*/

export default function CollapsibleTable( props ) {
  console.log('dentro tabela')
  
  console.log(props.lotes)
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell align="right">Numero Lote</TableCell>
            <TableCell align="right">Data Movimento</TableCell>
            <TableCell align="right">Qtde Titulos</TableCell>
            <TableCell align="right">Valor Total</TableCell>
            <TableCell align="right">Valor Recebido</TableCell>
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