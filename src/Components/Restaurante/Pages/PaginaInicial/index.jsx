import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./paginainicial.module.css";

const PaginaRestaurante = ({ user, dados}) => {
    const navigate = useNavigate();
    console.log("dados : ",dados)
    useEffect(() => {
        if (!user && localStorage.getItem("userCurrent")) {
            navigate("/");
        }

    }, [])
    useEffect(() => {
        
     
       if(dados){
             if(dados.email === JSON.parse(localStorage.getItem("userCurrent")).email){
                if(!dados.email === JSON.parse(localStorage.getItem("userCurrent")).senha){
                    window.localStorage.clear();  
                    navigate('/');
                }
             }
        }
    }, [])


  
    return (
        <div className={Styles.container}>
            <nav className={Styles.cabecalho}>
                <h2>{dados.nome}</h2>
                <button onClick={() => {
                    navigate('/')
                    window.localStorage.clear()
                }}>Sair</button>
            </nav>
            <Outlet
               user={user}
               dados={dados}
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