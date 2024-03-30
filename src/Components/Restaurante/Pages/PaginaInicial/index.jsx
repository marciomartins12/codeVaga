import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Restaurantes from "../../../../Services/restauranteUsuario.json";

const PaginaRestaurante = ({id}) => {
    const navigate = useNavigate();
    const restaurante = Restaurantes.find((e) => e.id === id)
    useEffect(() => {
        if (id == null) {
            navigate("/")
        }

    }, [])
    return (
        <div>
            <nav>cabecalho restaurante + </nav> <span>sair da conta</span>
            <Outlet 
            restaurante={restaurante}
            />
            <nav>
            navbar restaurante 
            </nav>
        </div>
    )
}
export default PaginaRestaurante;