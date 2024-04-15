import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { logar } from "../../Redux/UserSlice";
import Style from "./pagePedidos.module.css";


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
    console.log(state)
    return (
        <section className={Style.containerCardapio}>
            <div className={Style.container}>
                <p className={Style.cabecalhoTipo}>Restaurante</p>

                <div className={Style.cabecalhoPerfil}>
                    <h2>{state.name}</h2>
                    <img src={state.img} alt="img do restaurante" />
                </div>
                <section>
                    <h5 className={Style.pedidoTitulo}>Pedidos</h5>
                    <div className={Style.containerPedido}>

                        {
                            state.pedidos.map((pedido, i) => {
                                let contadorValue = 0;
                                return (    
                                    <div className={Style.containerItem} key={i}>
                                        <div>

                                            {pedido.pedido.map((item, j) => {
                                                contadorValue += item.valor;

                                                return (
                                                    <div className={Style.itemContainer} key={j}>

                                                        <p>
                                                            {item.item}
                                                        </p>

                                                    </div>
                                                )
                                            }
                                            )}

                                        </div>
                                        <div>
                                            Total R${contadorValue}
                                        </div>
                                        <button>ver Pedido</button>
                                    </div>
                                )
                            })
                        }

                    </div>
                </section>
            </div>
        </section>
    )
}
export default Pedidos;