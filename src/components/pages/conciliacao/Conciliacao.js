import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

import styles from "./Conciliacao.module.css";
import Message from "../../layout/components/Message";
import Loading from "../../layout/components/Loading";
import { BASE_URL, URL_CONCILIACAO, URL_CONCILIAR } from "../../../utils/requests";

import ConciliacaoLista from "./ConciliacaoLista";
import ConciliacaoNovoForm from "./ConciliacaoNovoForm";

function Conciliacao() {
  const [removeLoading, setRemoveLoading] = useState(false);
  const [message, setMessage] = useState();
  const [type, setType] = useState();

  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 15,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });
  
  function criarNovaConciliacao(novaConciliacao) {        
    fetch(`${BASE_URL}${URL_CONCILIAR}?dataInicio=${moment(novaConciliacao.dataInicio).format('DD-MM-YYYY')}&dataFim=${moment(novaConciliacao.dataFim).format('DD-MM-YYYY')}` , {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then(() => {
        buscarConciliacoes()
    })
    .catch((err) => console.log(err));
}

  function buscarConciliacoes() {
    axios
      .get(`${BASE_URL}${URL_CONCILIACAO}?size=15&page=${pageNumber}`)
      .then((response) => {
        const data = response.data;
        setPage(data);
        setRemoveLoading(true);
        setType("success");
      });
  }

  useEffect(() => {
    buscarConciliacoes()
  }, [pageNumber]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  }

  return (
    <div className={styles.container}>
        <div>
          <div className={styles.container_novo}>
              <ConciliacaoNovoForm criarConciliacao={criarNovaConciliacao}/>
          </div>
          <hr />
          <div className={styles.container_interno_lista}>
            <h1>Últimas Conciliações</h1>
            {message && <Message type={type} msg={message} />}        
            <div className={styles.container_lista}>
              {!removeLoading && <Loading />}
              {page.content.length === 0 && (
                <p>Não há registros.</p>
              )}
              {page.content.length > 0 && removeLoading && (
                <ConciliacaoLista page={page} onChange={handlePageChange} />
              )}          
            </div>
          </div>
        </div>
      </div>
  );
}

export default Conciliacao