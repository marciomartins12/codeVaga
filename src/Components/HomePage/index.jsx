import { Link } from "react-router-dom";
import Styles from "./homepage.module.css";
const HomePage = () =>{
    return (
        <section className={Styles.containerHomepage}>
           <p className={Styles.nomesite}>ThurDona</p>
            <p>voce deseja entrar como:</p>
            <p className={Styles.span}>selecione um:</p>
            <div className={Styles.containerSelector}>
                <Link  className={Styles.taga}to="PageLoginCliente">
                    <img src="src/Components/assets/icons/pessoa.png" alt="icon pessoa" />
                    pessoa
                </Link>
                <Link  className={Styles.taga}to="PageLoginRestaurante">
                    <img src="src/Components/assets/icons/restaurante.png" alt="icon restaurante" />
                    restaurante
                </Link>
            </div>
        </section>
    )
}
export default HomePage;