import { useDispatch, useSelector } from "react-redux";
import { logar } from "../../Redux/UserSlice";
import Style from "./Perfil.module.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Perfil = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.user);
const navegador = useNavigate()
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userCurrent'));
        if (storedUser) {
            const [email, senha, tipo] = storedUser;
            dispatch(logar([email, senha, tipo]));
        }
        //     console.log(state.cardapio[0].itens.length + state.cardapio[1].itens.length)
    }, []);
    return (
        <section className={Style.containerPerfil}>
            {state.tipoDeConta == "restaurante" ? <p className={Style.cabecalhoTipo}>Restaurante</p> : <p className={Style.cabecalhoTipo}>Cliente</p>}
            <div className={Style.cabecalhoPerfil}>
                <h2>{state.name}</h2>
                <img src={state.img} alt="" />
            </div>
            <div className={Style.cabecalhoSegundo}>
                <p>avaliações {state.avaliacao}</p>
                <div onClick={()=> navegador('cardapio')}>
                    Cardápio
                    <p>{state.cardapio[0] ? state.cardapio[0].itens.length + state.cardapio[1].itens.length : <></>} itens</p>
                </div>
            </div>

            <div className={Style.containerSegundo}>
                <h4>informações</h4>
                <p  onClick={()=> navegador('cardapio')}>Cardapio</p>
            </div>

            <section className={Style.containerInfos}>
                <div className={Style.div}>
                    <div className={Style.containerEdit}>
                        <h3>Descrição do Restaurante</h3>
                        <button><img src="/public/assets/icons/editor.png" alt="icon editor" /></button>
                    </div>
                    <p className={Style.descricao}>
                        {state.descricao}
                    </p>
                </div>
                <div className={Style.div}>
                    <div className={Style.containerEdit}>
                        <h3>Tipos de Pagamento</h3>
                        <button><img src="/public/assets/icons/editor.png" alt="icon editor" /></button>
                    </div>
                    <p className={Style.descricao}>
                        {state.tipoPagamento}
                    </p>
                </div>

                <div className={Style.editarPerfil}>
                    <button >Editar perfil <img src="/public/assets/icons/editor.png" alt="icon editor editar perfil" /></button>
                </div>
            <p className={Style.estadoDoRestaurante}>{state.fechado ? "Aberto" : "Fechado"}</p>
            <p className={Style.abrirFechar}>{state.fechado ? "Click para Fechar" : "Click Para Abir"}</p>
           
            </section>
        </section>
    )
}
export default Perfil;