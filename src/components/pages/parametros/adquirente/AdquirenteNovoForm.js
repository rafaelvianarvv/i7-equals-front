import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL, URL_ADQUIRENTE_NOVO } from "../../../../utils/requests";
import Input from "../../../layout/components/Input"
import SubmitButton from "../../../layout/components/SubmitButton";
import styles from "../Parametros.module.css";

function AdquirenteNovoForm() {
    const navigate = useNavigate();
    const [adquirente, setAdquirente] = useState([])

    function criarAdquirente(adquirente) {
        fetch(`${BASE_URL}${URL_ADQUIRENTE_NOVO}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(adquirente),
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate("/adquirentes", {state:{ message: "Adquirnete gravada com sucesso!" }});
        })
        .catch((err) => console.log(err));
    }

    function handleChange(e) {
        setAdquirente({...adquirente, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        criarAdquirente(adquirente);
     }

    return (
        <div className={styles.novo_container}>
            <h1>Nova Adquirente</h1>
            <form onSubmit={submit} className={styles.novo_form}>
                <div>
                    <Input
                        type="text"
                        text="Código Equals"
                        name="codigo"
                        placeholder="Insira o código da Adquirente (Equals)"
                        handleOnChange={handleChange}
                        value={adquirente.codigo ? adquirente.codigo : ''}
                        maxLen="2"
                        />
                </div>
                <div>
                    <Input
                        type="text"
                        text="Descrição Adquirente"
                        name="descricao"
                        placeholder="Insira a Descrição da Adquirente"
                        handleOnChange={handleChange}
                        value={adquirente.descricao ? adquirente.descricao : ''}
                        maxLen="50"
                        />
                </div>
                <div>
                    <SubmitButton text={"Gravar Adquirente"} />
                </div>
            </form>
        </div>
    )

}

export default AdquirenteNovoForm