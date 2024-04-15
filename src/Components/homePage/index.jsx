import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logar } from "../../Redux/UserSlice"
import Style from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";


const HomePage = () => {
    const dispatch = useDispatch()
    const navegador = useNavigate()
    const state = useSelector(state => state.user);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userCurrent'));
        if (storedUser) {
            const [email, senha, tipo] = storedUser;
            dispatch(logar([email, senha, tipo]));
        }
    }, []);
    return (
        <section className={Style.containerHomepage}>
            
            <Outlet />

            {state.tipoDeConta == 'restaurante' ?
                <nav className={Style.navegadorEntreAbas}>
                    <button onClick={() =>{
                          if(state.tipoDeConta == "restaurante"){
                            navegador("cardapioRestaurante")

                        }else{

                            navegador("cardapioCliente")
                        }
                    }}>
                        <img src="/public/assets/icons/cardapio.png" alt="icon cardapio" />
                        <p>Cardapio</p>
                    </button>
                    <button onClick={() => navegador("pedidos")}>
                        <img src="/public/assets/icons/pedidos.png" alt="icon cardapio" />
                        <p>Pedidos</p>
                    </button>
                    <button onClick={() => navegador("/")}>
                        <img src="/public/assets/icons/perfilrestaurante.png" alt="icon perfil" />
                        <p>Perfil</p>
                    </button>


                </nav> :
    <nav>
        conta cliente
    </nav>
}

        </section >
    )
}

export default HomePage;