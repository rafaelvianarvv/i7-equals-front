import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { BASE_URL, URL_PRODUTO_NOVO } from "../../../../utils/requests";
import Input from "../../../layout/components/Input"
import SubmitButton from "../../../layout/components/SubmitButton";
import styles from "../Parametros.module.css";

function ProdutoNovoForm() {
    const navigate = useNavigate();
    const [produto, setProduto] = useState([])

    function criarProduto(produto) {        
        fetch(`${BASE_URL}${URL_PRODUTO_NOVO}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),        
        })
        .then((resp) => resp.json())
        .then((data) => {
            navigate("/produtos", {state:{ message: "Produto gravado com sucesso!" }});
        })
        .catch((err) => console.log(err));
    }

    function handleChange(e) {
        setProduto({...produto, [e.target.name]: e.target.value})
    }

    const submit = (e) => {
        e.preventDefault();
        criarProduto(produto);
     }

    return (
        <div className={styles.novo_container}>
            <h1>Novo Produto</h1>
            <form onSubmit={submit} className={styles.novo_form}>
                <div>
                    <Input
                        type="text"
                        text="Código Equals"
                        name="codigo"
                        placeholder="Insira o código do Produto (Equals)"
                        handleOnChange={handleChange}
                        value={produto.codigo ? produto.codigo : ''}
                        maxLen="2"
                        />
                </div>
                <div>
                    <Input
                        type="text"
                        text="Descrição Produto"
                        name="descricao"
                        placeholder="Insira a Descrição do Produto"
                        handleOnChange={handleChange}
                        value={produto.descricao ? produto.descricao : ''}
                        maxLen="50"
                        />
                </div>
                <div>
                    <SubmitButton text={"Gravar Produto"} />
                </div>
            </form>
        </div>
    )

}

export default ProdutoNovoForm