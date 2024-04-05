import { useDispatch, useSelector } from "react-redux";
import Style from "./pagePedidos.module.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logar } from "../../Redux/UserSlice";


const Pedidos = () => {
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
        <section className={Style.containerCardapio}>
            <div className={Style.container}>
                <p className={Style.cabecalhoTipo}>Restaurante</p>

                <div className={Style.cabecalhoPerfil}>
                    <h2>{state.name}</h2>
                    <img src={state.img} alt="img do restaurante" />
                </div>
                <section>
                    <h5>Pedidos</h5>
                    <div>

                    </div>
                </section>
            </div>
        </section>
    )
}
export default Pedidos;