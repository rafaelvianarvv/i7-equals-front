import * as React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';

export default function MenuTopoConciliacao() {
  
  const navigate = useNavigate();
  
  function toConciliacao() {
    navigate("/conciliacao", {state:{ message: ""}});
  }
  
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
          onClick={toConciliacao}
          color="neutral"
        >
          Conciliação
        </Button>
      </ThemeProvider>
    </div>
  );
}