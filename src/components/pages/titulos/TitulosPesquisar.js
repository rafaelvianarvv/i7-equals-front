import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../layout/components/Button';
import Input from '../../layout/components/Input';
import InputData from '../../layout/components/InputData';

import styles from './TitulosPesquisar.module.css'; 

function TitulosPesquisar() {

  const navigate = useNavigate();
  const [pesquisa, setPesquisa] = useState({});

  function handleChangeDataInicial(data) { 
    setPesquisa({...pesquisa, "dataInicial": data.toFormat('dd/MM/yyyy')});
  }

  function handleChangeDataFinal(data) { 
    setPesquisa({...pesquisa, "dataFinal": data.toFormat('dd/MM/yyyy')});
  }

  function handleChange(e) {
    setPesquisa({...pesquisa, [e.target.name]: e.target.value});
  }

  function submit(e){    
    e.preventDefault();
    setPesquisa({...pesquisa, "pageNumber": 0});
    navigate("/titulosPesquisados", {state : { pesquisa: pesquisa}});
  }

  return (
     <div className={styles.pesquisa_titulos_container}> 
        
        <h1>Pesquisar Títulos</h1>

        <form onSubmit={submit} className={styles.form}>
          <div className={styles.pesquisa_titulos_container_campos}>              
              <div className={styles.campo_pesquisa}>
                <InputData
                  text="Data Inicial Venda"
                  value={pesquisa.dataInicial ? pesquisa.dataInicial : ''}
                  handleOnChange={handleChangeDataInicial}
                />
              </div>
              <div className={styles.campo_pesquisa}>
                <InputData
                  text="Data Final Venda"
                  value={pesquisa.dataFinal ? pesquisa.dataFinal : ''}
                  handleOnChange={handleChangeDataFinal}
                />
              </div>
              <div className={styles.campo_pesquisa}>
                <Input
                  type="text"
                  text="Número da Venda"
                  name="numeroVenda"
                  placeholder="Insira a venda"
                  value={pesquisa.numeroVenda ? pesquisa.numeroVenda: ''}
                  handleOnChange={handleChange}
                />
              </div>
              <div>
                <Button text='Pesquisar' />
              </div>
          </div>
        </form>

     </div>
  );
}

export default TitulosPesquisar;
