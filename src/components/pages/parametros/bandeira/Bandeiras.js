import axios from "axios";
import { useEffect, useState } from "react";

import styles from "../Parametros.module.css";
import { BASE_URL, URL_BANDEIRA } from "../../../../utils/requests";
import BandeirasLista from "./BandeirasLista";
import Message from "../../../layout/components/Message";
import Loading from "../../../layout/components/Loading";
import LinkButton from "../../../layout/components/LinkButton";

function Bandeiras() {
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
  
  useEffect(() => {
    axios
      .get(`${BASE_URL}${URL_BANDEIRA}?size=15&page=${pageNumber}`)
      .then((response) => {
        const data = response.data;
        setPage(data);
        console.log(page)
        setRemoveLoading(true);
        setType("success");
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber) => {
    setPageNumber(newPageNumber);
  }

  return (
    <div className={styles.container}>
      {message && <Message type={type} msg={message} />}
      <div className={styles.container_cabecalho}>
          <div className={styles.titulo}>
            BANDEIRAS
          </div>
          <div> 
            <LinkButton to={"/bandeiraNovo"} text={"Novo"} />
          </div>
      </div>
      
      <div className={styles.container_lista}>
        {!removeLoading && <Loading />}
        {page.content.length === 0 && (
          <p>Não há registros.</p>
        )}
        {page.content.length > 0 && removeLoading && (
          <BandeirasLista page={page} onChange={handlePageChange} />
        )}          
      </div>

    </div>
  );
}

export default Bandeiras