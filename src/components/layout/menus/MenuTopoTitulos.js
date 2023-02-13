import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

export default function MenuTopoTitulos({nome}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const theme = createTheme({
    palette: {
      neutral: {
        main: '#FFFFFF'
      },
      black: {
        main: '#000000'
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme} >
        <Button
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          color="neutral"
        >
          Títulos
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}><Link to="/loteEnviado">Enviados Equals</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/loteConciliado">Conciliados</Link></MenuItem>
          <MenuItem onClick={handleClose}><Link to="/loteRecebido">Baixados</Link></MenuItem>
        </Menu>
      </ThemeProvider>
    </div>
  );
}