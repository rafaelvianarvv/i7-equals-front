import axios from "axios";
import moment from "moment";
import { useEffect, useReducer, useState } from "react";

import styles from './LoteReceber.module.css'; 
import Button from '../../../layout/components/Button';
import InputDatePicker from "../../../layout/components/InputDatePicker";
import Pagination from "../../../layout/components/Pagination";

import { BASE_URL, URL_TITULOS_ENVIADOS } from "../../../../utils/requests";
import TitulosLista from "../pesquisados/TitulosLista";
import Loading from "../../../layout/components/Loading";

function LoteReceber() {
  const [dataInicio, setDataInicio] = useState(new Date((new Date()).getFullYear(), (new Date()).getMonth(), 1));
  const [dataFim, setDataFim] = useState(new Date((new Date()).getFullYear(), (new Date()).getMonth() + 1, 0));
  const [removeLoading, setRemoveLoading] = useState(false);

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

  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  useEffect(() => {
    axios
      .get(`${BASE_URL}${URL_TITULOS_ENVIADOS}?size=25&page=${pageNumber}&dataInicio=${moment(dataInicio).format('DD-MM-YYYY')}&dataFim=${moment(dataFim).format('DD-MM-YYYY')}`)
      .then((response) => {
        const data = response.data;
        setPage(data);
        setRemoveLoading(true);
        console.log('passou aqui')
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber) => {    
    setRemoveLoading(false)
    setPageNumber(newPageNumber);
  }

  return (
    <div className={styles.titulos_container}>
        
        <div className={styles.titulos_container_cabecalho}>
          <div className={styles.titulos_titulo}>Títulos a Receber</div>
        </div>

        <div className={styles.pesquisa_titulos_container}>

            <form onSubmit={forceUpdate} className={styles.form}>

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
                <TitulosLista page={page} handlePageChange={handlePageChange} />
              </div>
              {!removeLoading && <Loading />}
              <div>
                <Pagination page={page} onChange={handlePageChange} />
              </div>
            </div>
          )}
        </div>

    </div>
  );
}

export default LoteReceber;