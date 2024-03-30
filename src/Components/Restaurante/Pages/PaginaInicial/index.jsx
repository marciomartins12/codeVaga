import { Link, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Restaurantes from "../../../../Services/restauranteUsuario.json";
import Styles from "./paginainicial.module.css";
const PaginaRestaurante = ({ id }) => {
    const navigate = useNavigate();
    const restaurante = Restaurantes.find((e) => e.id === id)
    useEffect(() => {
        if (id == null) {
            navigate("/")
        }

    }, [])
    return (
        <div className={Styles.container}>
            <nav className={Styles.cabecalho}>
                <h2>{restaurante.nome}</h2>
                <button onClick={() => {
                    window.localStorage.clear()
                }}>Sair</button>
            </nav>
            <Outlet
                restaurante={restaurante}
            />
            <nav className={Styles.navbar}>

                <Link to="/cardapio" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/cardapio.png" alt="" />
                    <p>Cardápio</p>
                </Link>
                <Link to="/pedidos" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/pedidos.png" alt="" />

                    <p>Pedidos</p>
                </Link>
                <Link to="/perfil" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/restaurante.png" alt="" />
                    <p>Perfil</p>
                </Link>
            </nav>
        </div>
    )
}
export default PaginaRestaurante;