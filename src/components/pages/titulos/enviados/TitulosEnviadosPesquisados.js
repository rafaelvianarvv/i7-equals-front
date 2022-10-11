import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { BASE_URL, URL_TITULOS_ENVIADOS } from "../../../../utils/requests";
import TitulosLista from "../pesquisados/TitulosLista";
import Loading from "../../../layout/components/Loading";
import styles from "./TitulosEnviados.module.css";
import Pagination from "../../../layout/components/Pagination";

function TitulosEnviadosPesquisados() {
  const location = useLocation()  
  const pesquisa = {
    dataInicio: location.state.dataInicio,
    dataFim: location.state.dataFim
  }
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

  const handlePageChange = (newPageNumber) => {
    setRemoveLoading(false)
    setPageNumber(newPageNumber);
  }

  useEffect(() => {
    axios
      .get(`${BASE_URL}${URL_TITULOS_ENVIADOS}?size=25&page=${pageNumber}&dataInicio=${pesquisa.dataInicio}&dataFim=${pesquisa.dataFim}`)
      .then((response) => {
        const data = response.data;
        setPage(data);
        setRemoveLoading(true);
      });
  }, [pageNumber]);

  return (
    <div className={styles.titulos_container}>
        <div className={styles.titulos_container_cabecalho}>
          <div className={styles.titulos_titulo}>Títulos Enviados à Equals</div>
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

export default TitulosEnviadosPesquisados;
