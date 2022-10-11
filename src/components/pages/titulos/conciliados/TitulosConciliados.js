import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../layout/components/Button';
import InputData from '../../../layout/components/InputData';

import styles from './TitulosConciliados.module.css'; 

function TitulosConciliados() {

  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState({});

  function handleChangeDataInicial(data) { 
    setPesquisa({...pesquisa, "dataInicial": data.toFormat('dd/MM/yyyy')});
  }

  function handleChangeDataFinal(data) { 
    setPesquisa({...pesquisa, "dataFinal": data.toFormat('dd/MM/yyyy')});
  }

  function submit(e){    
    e.preventDefault();
    setPesquisa({...pesquisa, "pageNumber": 0});
    navigate("/titulosPesquisados", {state : { pesquisa: pesquisa}});
  }

  return (
     <div className={styles.pesquisa_titulos_container}>
        <h1>Pesquisar Títulos Conciliados</h1>

        <form onSubmit={submit} className={styles.form}>
          <div>
          <div className={styles.pesquisa_titulos_container_campos}>
            <div className={styles.campo_pesquisa}>
                <InputData
                text="Data Inicial Vendaxx"
                value={pesquisa.dataInicial ? pesquisa.dataInicial : ''}
                handleOnChange={handleChangeDataInicial}
                />
            </div>
            <div className={styles.campo_pesquisa}>
                <InputData
                text="Data Final Venda"
                value={pesquisa.dataInicial ? pesquisa.dataInicial : ''}
                handleOnChange={handleChangeDataFinal}
                />
            </div>
        </div>
            <div>
              <Button text='Pesquisar' />
            </div>
          </div>
        </form>

     </div>
  );
}

export default TitulosConciliados;
