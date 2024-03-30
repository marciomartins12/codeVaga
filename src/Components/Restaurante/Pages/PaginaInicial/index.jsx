import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./paginainicial.module.css";
import Restaurantes from "../../../../Services/restauranteUsuario.json";

const PaginaRestaurante = ({ id }) => {
    const navigate = useNavigate();
    useEffect(() => {
        if (id == null) {
            navigate("/");
        }

    }, [])
    useEffect(() => {
       const restaurante =  Restaurantes.find((e)=> e.id == id);
       console.log(restaurante)
       if(restaurante){
             if(restaurante.email === JSON.parse(localStorage.getItem("userCurrent")).email){
                if(!restaurante.email === JSON.parse(localStorage.getItem("userCurrent")).senha){
                    window.localStorage.clear();  
                    navigate('/');
                }
             }
        }
    }, [])


  
    return (
        <div className={Styles.container}>
            <nav className={Styles.cabecalho}>
                <h2>Restaurante</h2>
                <button onClick={() => {
                    window.localStorage.clear()
                }}>Sair</button>
            </nav>
            <Outlet
               id={id}
            />
            <nav className={Styles.navbar}>

                <Link to="cardapio" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/cardapio.png" alt="" />
                    <p>Cardápio</p>
                </Link>
                <Link to="pedidos" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/pedidos.png" alt="" />

                    <p>Pedidos</p>
                </Link>
                <Link to="perfil" className={Styles.navItem}>
                    <img src="src/Components/assets/icons/restaurante.png" alt="" />
                    <p>Perfil</p>
                </Link>
            </nav>
        </div>
    )
}
export default PaginaRestaurante;