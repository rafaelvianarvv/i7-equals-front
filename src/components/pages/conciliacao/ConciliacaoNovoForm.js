import moment from "moment/moment";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../../layout/components/Button";
import InputData from "../../layout/components/InputData";
import styles from "./Conciliacao.module.css";

function ConciliacaoNovoForm({criarConciliacao}) {
    const navigate = useNavigate();
    const [data, setData] = useState([])
    
    function handleChangeDataInicial(data) {
        console.log(moment(data).format('DD-MM-YYYY'));
        setData(data);
    }

    const submit = (e) => {
        e.preventDefault();
        console.log('data: ' + moment(data).format('DD-MM-YYYY'));
        criarConciliacao(data);
     }

    return (
        <div className={styles.container}>
            <div>
                <h1>Nova Conciliacao</h1>
                <form onSubmit={submit} className={styles.form}>
                    <div className={styles.container_novo}>              
                        <div className={styles.campo_pesquisa}>

                            <InputData
                                text="Data"
                                value={data ? data : ''}
                                handleOnChange={handleChangeDataInicial}
                            />
                        </div>
                        {/* <div className={styles.campo_pesquisa}>
                            <InputData
                                text="Data Final"
                                value={novaConciliacao.dataFim ? novaConciliacao.dataFim : ''}
                                handleOnChange={handleChangeDataFim}
                            />
                        </div>                     */}
                        <div>
                            <Button text='Enviar' />
                        </div>
                    </div>
                </form>
            </div>            
        </div>
    )

}

export default ConciliacaoNovoForm