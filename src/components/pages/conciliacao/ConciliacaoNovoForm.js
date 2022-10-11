import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Button from "../../layout/components/Button";
import InputData from "../../layout/components/InputData";
import styles from "./Conciliacao.module.css";

function ConciliacaoNovoForm({criarConciliacao}) {
    const navigate = useNavigate();
    const [novaConciliacao, setNovaConciliacao] = useState([])
    
    function handleChangeDataInicial(data) {
        setNovaConciliacao({...novaConciliacao, "dataInicio": data})
    }
    function handleChangeDataFim(data) {
        setNovaConciliacao({...novaConciliacao, "dataFim": data})
    }

    const submit = (e) => {
        e.preventDefault();
        criarConciliacao(novaConciliacao);
     }

    return (
        <div className={styles.container}>
            <div>
                <h1>Nova Conciliacao</h1>
                <form onSubmit={submit} className={styles.form}>
                    <div className={styles.container_novo}>              
                        <div className={styles.campo_pesquisa}>

                            <InputData
                                text="Data Inicial"
                                value={novaConciliacao.dataInicio ? novaConciliacao.dataInicio : ''}
                                handleOnChange={handleChangeDataInicial}
                            />
                        </div>
                        <div className={styles.campo_pesquisa}>
                            <InputData
                                text="Data Final"
                                value={novaConciliacao.dataFim ? novaConciliacao.dataFim : ''}
                                handleOnChange={handleChangeDataFim}
                            />
                        </div>                    
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