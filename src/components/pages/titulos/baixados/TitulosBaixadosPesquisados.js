import axios from "axios";
import { useEffect, useState } from "react";

import { BASE_URL } from "../../../../utils/requests";
import TitulosLista from "../pesquisados/TitulosLista";
import Loading from "../../../layout/components/Loading";

import styles from "../pesquisados/TitulosPesquisados.module.css";
import Pagination from '../../../layout/components/Pagination';

function TitulosBaixadosPesquisados({ props }) {
  const [removeLoading, setRemoveLoading] = useState(false);
  // const [consulta, setConsulta] = useState(consultaDados)
  const [paginaNumero, setPaginaNumero] = useState(0);
  const [paginaDados, setPaginaDados] = useState({
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
    setPaginaNumero(newPageNumber);
  }

  var axios = require("axios");
  var data = JSON.stringify({
    dataInicial: "01/06/2022",
    dataFinal: "30/06/2022"
  });

  const urlApiTitulosBaixados = `${BASE_URL}/vendas/baixados`;
  
  var config = {
    method: "POST",
    url: `${urlApiTitulosBaixados}?size=12&page=${paginaNumero}&sort=dataEnvio`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  useEffect(() => {    
    axios(config)
      .then(function (response) {
        setPaginaDados(response.data);
        setRemoveLoading(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [paginaNumero]);

  return (
    <div className={styles.titulos_container}>
      <div className={styles.titulos_container_cabecalho}>
        <div className={styles.titulos_titulo}>Vendas</div>
      </div>
      <div className={styles.titulos_container_lista}>
        {!removeLoading && <Loading />}
        {paginaDados.content.length === 0 && (
          <p>Não há registros.</p>
        )}
        {paginaDados.content.length > 0 && (
          <div>
            <div>
              <TitulosLista paginaDados={paginaDados} handlePageChange={handlePageChange} />
            </div>
            <div>
              <Pagination page={paginaDados} onChange={handlePageChange} />
            </div>
          </div>
          
        )}
      </div>
    </div>
  );
}

export default TitulosBaixadosPesquisados;
