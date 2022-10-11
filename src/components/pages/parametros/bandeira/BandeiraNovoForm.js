import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL, URL_BANDEIRA_NOVA } from "../../../../utils/requests";
import Input from "../../../layout/components/Input"
import SubmitButton from "../../../layout/components/SubmitButton";
import styles from "../Parametros.module.css";

function BandeiraNovoForm() {
    const navigate = useNavigate();
    const [bandeira, setBandeira] = useState([])

    function criarBandeira(bandeira) {
        fetch(`${BASE_URL}${URL_BANDEIRA_NOVA}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bandeira),        
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate("/bandeiras", {state:{ message: "Bandeira gravada com sucesso!" }});
        })
        .catch((err) => console.log(err));
    }

    function handleChange(e) {
        setBandeira({...bandeira, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        criarBandeira(bandeira);
     }

    return (
        <div className={styles.novo_container}>
            <h1>Nova Bandeira</h1>
            <form onSubmit={submit} className={styles.novo_form}>
                <div>
                    <Input
                        type="text"
                        text="Código Equals"
                        name="codigo"
                        placeholder="Insira o código da Bandeira (Equals)"
                        handleOnChange={handleChange}
                        value={bandeira.codigo ? bandeira.codigo : ''}
                        maxLen="2"
                        />
                </div>
                <div>
                    <Input
                        type="text"
                        text="Descrição Bandeira"
                        name="descricao"
                        placeholder="Insira a Descrição da Bandeira"
                        handleOnChange={handleChange}
                        value={bandeira.descricao ? bandeira.descricao : ''}
                        maxLen="50"
                        />
                </div>
                <div>
                    <SubmitButton text={"Gravar Bandeira"} />
                </div>
            </form>
        </div>
    )

}

export default BandeiraNovoForm