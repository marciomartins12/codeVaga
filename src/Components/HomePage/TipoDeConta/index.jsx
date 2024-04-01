import Styles from "../homepage.module.css";
import { useNavigate } from "react-router-dom";
const TipoDeConta = () => {
    const navegador = useNavigate();

    function TipoDaConta(click) {
        let contrario = click== "restaurante"? "restaurante" : "cliente";
        if(JSON.parse(localStorage.getItem("tipoUser"))==contrario){
            console.log("tava cliente")
            localStorage.clear()
        }
        localStorage.setItem("tipoUser", click)
        navegador("/PageLogin")
    }
    return (
        <>
            <p>voce deseja entrar como:</p>
            <p className={Styles.span}>selecione um:</p>
            <div className={Styles.containerSelector}>
                <div className={Styles.taga} onClick={() => TipoDeConta("cliente")}>
                    <img src="src/Components/assets/icons/pessoa.png" alt="icon pessoa" />
                    pessoa
                </div>
                <div className={Styles.taga} onClick={() => TipoDaConta("restaurante")}>
                    <img src="src/Components/assets/icons/restaurante.png" alt="icon restaurante" />
                    restaurante
                </div>
            </div>
        </>
    )
}

export default TipoDeConta;