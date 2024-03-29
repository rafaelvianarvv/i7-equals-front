import axios from "axios";
import moment from "moment";
import { useState } from "react";

import styles from './LoteEnviado.module.css'; 
import Button from '../../../layout/components/Button';
import Input from '../../../layout/components/Input';
import Pagination from "../../../layout/components/Pagination";

import { BASE_URL, URL_TITULOS_ENVIADOS } from "../../../../utils/requests";
import Loading from "../../../layout/components/Loading";
import ListaLoteEnviado from "./ListaLoteEnviado";
import InputData from "../../../layout/components/InputData";

function LoteEnviado() {
  const [removeLoading, setRemoveLoading] = useState(true);
  const [consulta, setConsulta] = useState({dataInicial: '17-02-2023', dataFinal: '28-02-2023'});

  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 10,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  const consultarDados = () => {
    axios
        .get(`${BASE_URL}${URL_TITULOS_ENVIADOS}?size=25&page=${pageNumber}&dataInicial=${consulta.dataInicial}&dataFinal=${consulta.dataFinal}`)
        .then((response) => {
          const data = response.data;
          setPage(data);
          setRemoveLoading(true);
        });
  }

  // useEffect(() => {
  //   consultarDados();
  // }, [pageNumber]);

  function submit(e) {
    e.preventDefault();
    setRemoveLoading(false);
    consultarDados();
  }

  function handleChange(e) {
    setConsulta({...consulta, [e.target.name]: e.target.value})
  }

  // const handlePageChange = (newPageNumber) => {    
  //   setRemoveLoading(false)
  //   setPageNumber(newPageNumber);
  // }

  return (
    <div className={styles.titulos_container}>
        
        <div className={styles.titulos_container_cabecalho}>
          <div className={styles.titulos_titulo}>Títulos Enviados para Equals</div>
        </div>

        <div className={styles.pesquisa_titulos_container}>

            <form onSubmit={submit} className={styles.form}>

              <div className={styles.pesquisa_titulos_container_campos}>
                
              {/* <div className={styles.campo_pesquisa}>
                <InputData text={"Data"} handleOnChange={handleChange} value={consulta.dataInicial} />
              </div> */}

                <div className={styles.campo_pesquisa}>
                
                  <Input 
                    type="text"
                    text="Data Envio Inicial"
                    name="dataInicial"
                    placeholder="Data Inicial"
                    handleOnChange={handleChange}
                    value = {consulta.dataInicial ? consulta.dataInicial : ''}
                  />
                </div>

                <div className={styles.campo_pesquisa}>
                  <Input 
                    type="text"
                    text="Data Envio Final"
                    name="dataFinal"
                    placeholder="Data Final"
                    handleOnChange={handleChange}
                    value = {consulta.dataFinal ? consulta.dataFinal : ''}
                  />
                </div>

                <div className={styles.button}>
                  <Button text='Pesquisar' />
                </div>
              </div>

            </form> 
            <hr></hr>
        </div>

        <div className={styles.titulos_container_lista}>
          {!removeLoading && <Loading />}
          {page.content.length === 0 && (
            <p>Não há registros.</p>
          )}

          {page.content.length > 0 && (
            <div>
              <div>
                <ListaLoteEnviado lotes = {page.content} />
              </div>              
              {/* 
              <div>
                <Pagination page={page} onChange={handlePageChange} />
              </div> */}

            </div>
          )}
        </div>

    </div>
  );
}

export default LoteEnviado;