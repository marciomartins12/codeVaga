import Styles from "../homepage.module.css";
import { useNavigate } from "react-router-dom";
const TipoDeConta = ({ setTipoDeConta }) => {
    const navegador = useNavigate();
    function TipoDaConta(click) {
        setTipoDeConta(click);
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