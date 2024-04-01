import { Link, useNavigate } from "react-router-dom";
import Style from "./paginaPerfil.module.css";
import { useEffect } from "react";

const RestaurantePerfil = ({ id, restaurante }) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (id == null || !restaurante) {
            navigate("/");
        }

    }, [])

  

    return (
        <section className={Style.containerPerfil}>
            <div className={Style.cabecalhoperfil}>
                <div className={Style.cabecalhoperfilItem}>
                    <h2>{restaurante.nome}</h2>
                    <img src="" alt="" />
                </div>
                <div className={Style.cabecalhoperfilItem}>
                    <p>Avaliações : {restaurante.avaliacao}</p>
                    <p>Cardapio :  </p>
                </div>
            </div>
            <div className={Style.navbarIn}>
                <p>Inforamções</p>
                <Link to="cardapio">
                    Cardápio
                </Link>
            </div>

            {/* 

            <section>
                <div>
                    <h3>{descricao}</h3>
                    <button>x</button>
                </div>
                <p>
                    Descricao
                </p>
                {true ? <p>Aberto</p> : <p>Fechado</p>}
                <div>
                    <h4>Formas de Pagamento</h4>
                    <button>x</button>
                </div>
            </section> */}


        </section>
    )
}

export default RestaurantePerfil;