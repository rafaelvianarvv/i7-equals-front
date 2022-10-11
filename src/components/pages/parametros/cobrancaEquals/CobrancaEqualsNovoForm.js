import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL, URL_COBRANCA_EQUALS_NOVO, URL_PRODUTO_ALL, URL_COBRANCA_EQUALS_NAO_PARAMETRIZADA } from "../../../../utils/requests";
import Input from "../../../layout/components/Input"
import SubmitButton from "../../../layout/components/SubmitButton";
import Select from "../../../layout/components/Select";
import styles from "../Parametros.module.css";

function CobrancaEqualsNovoForm() {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([])
    const [cobrancasNaoParametrizadas, setCobrancasNaoParametrizadas] = useState([])
    const [cobrancaEquals, setCobrancaEquals] = useState([])

    useEffect(() => {
        fetch(`${BASE_URL}${URL_PRODUTO_ALL}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((resp) => resp.json())
          .then((data) => {
            setProdutos(data);
          }) 
          .catch((err) => console.log(err));

        fetch(`${BASE_URL}${URL_COBRANCA_EQUALS_NAO_PARAMETRIZADA}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((resp) => resp.json())
            .then((data) => {
                setCobrancasNaoParametrizadas(data);
            }) 
            .catch((err) => console.log(err));
      }, []);

    function criarCobrancaEquals(cobrancaEquals) {
        fetch(`${BASE_URL}${URL_COBRANCA_EQUALS_NOVO}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(cobrancaEquals),        
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate("/cobrancasEquals", {state:{ message: "Cobrança Equals gravada com sucesso!" }});
        })
        .catch((err) => console.log(err));
    }

    function handleChange(e) {
        setCobrancaEquals({...cobrancaEquals, [e.target.name]: e.target.value})
    }
    
    const submit = (e) => {
        e.preventDefault();
        criarCobrancaEquals(cobrancaEquals)
     }

    return (
        <div className={styles.novo_container}>
            <h1>Nova Cobrança Equals</h1>
            <h4>Essa cobrança define quais Títulos serão enviados à Equals para conciliação.</h4>
            <form onSubmit={submit} className={styles.novo_form}>
                <div>
                    <Select
                    name="codigoCobranca"
                    text="Selecione a Cobrança Winthor"
                    textOption="Cobrança"
                    options={cobrancasNaoParametrizadas}
                    handleOnChange={handleChange}
                    value={cobrancaEquals.codigoCobranca ? cobrancaEquals.codigoCobranca : ''}
                    />
                </div>
                <div>
                    <Select
                    name="codigoProduto"
                    text="Selecione o Produto Equals"
                    textOption="Produto"
                    options={produtos}
                    handleOnChange={handleChange}
                    value={cobrancaEquals.codigoProduto ? cobrancaEquals.codigoProduto : ''}
                    />
                </div>
                <div>
                    <SubmitButton text={"Gravar Cobrança Equals"} />
                </div>
            </form>
        </div>
    )

}

export default CobrancaEqualsNovoForm