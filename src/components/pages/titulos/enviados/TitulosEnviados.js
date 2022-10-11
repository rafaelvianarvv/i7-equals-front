import moment from "moment";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../../layout/components/Button';

import styles from './TitulosEnviados.module.css'; 
import InputDatePicker from "../../../layout/components/InputDatePicker";

function TitulosEnviados() {
  const navigate = useNavigate();
  const [dataInicio, setDataInicio] = useState(null);
  const [dataFim, setDataFim] = useState(null);

  function submit(e){    
    e.preventDefault();
    navigate("/titulosEnviadosPesquisados", {
        state: { 
          dataInicio: moment(dataInicio).format('DD-MM-YYYY'),
          dataFim: moment(dataFim).format('DD-MM-YYYY'), 
        }
    });
  }

  return (
     <div className={styles.pesquisa_titulos_container}>
        <h1>Pesquisar Títulos Enviados</h1>

        <form onSubmit={submit} className={styles.form}>
          <div>
          <div className={styles.pesquisa_titulos_container_campos}>
            <div className={styles.campo_pesquisa}>
              <InputDatePicker
                  text="Data Inicial"
                  value={dataInicio ? dataInicio : ''}
                  handleOnChange={setDataInicio}
              />
            </div>
            <div className={styles.campo_pesquisa}>
              <InputDatePicker
                    text="Data Fim"
                    value={dataFim ? dataFim : ''}
                    handleOnChange={setDataFim}
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

export default TitulosEnviados;
