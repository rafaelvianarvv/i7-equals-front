import axios from "axios";
import moment from "moment";
import { useEffect, useReducer, useState } from "react";

import styles from './LoteReceber.module.css'; 
import Button from '../../../layout/components/Button';
import InputDatePicker from "../../../layout/components/InputDatePicker";
import Pagination from "../../../layout/components/Pagination";

import { BASE_URL, URL_TITULOS_RECEBER } from "../../../../utils/requests";
import TitulosLista from "../pesquisados/TitulosLista";
import Loading from "../../../layout/components/Loading";
import ListaLoteReceber from "./ListaLoteReceber";
import Input from "../../../layout/components/Input";

function LoteReceber() {
  const [removeLoading, setRemoveLoading] = useState(true);
  const [consulta, setConsulta] = useState({dataInicial: '01-11-2022', dataFinal: '28-02-2023'});

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
        .get(`${BASE_URL}${URL_TITULOS_RECEBER}?size=25&page=${pageNumber}&dataInicial=${consulta.dataInicial}&dataFinal=${consulta.dataFinal}`)
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
          <div className={styles.titulos_titulo}>Títulos a Receber</div>
        </div>

        <div className={styles.pesquisa_titulos_container}>

            <form onSubmit={submit} className={styles.form}>

              <div className={styles.pesquisa_titulos_container_campos}>
                
                <div className={styles.campo_pesquisa}>
                
                  <Input
                    type="text"
                    text="Data Vencimento Inicial"
                    name="dataInicial"
                    placeholder="Data Inicial"
                    handleOnChange={handleChange}
                    value = {consulta.dataInicial ? consulta.dataInicial : ''}
                  />
                </div>

                <div className={styles.campo_pesquisa}>
                  <Input 
                    type="text"
                    text="Data Vencimento Final"
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
                <ListaLoteReceber lotes = {page.content} />
              </div>
              
              {/* <div>
                <Pagination page={page} onChange={handlePageChange} />
              </div> */}
            </div>
          )}
        </div>

    </div>
  );
}

export default LoteReceber;