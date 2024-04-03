import { useEffect, useState } from "react";
import Style from "./pageLogin.module.css";
import { useDispatch, useSelector } from "react-redux";
import { logar } from "../../Redux/UserSlice";
import { useNavigate } from "react-router-dom";
const PageLogin = () => {


    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");
    const [contaSelecionada, setcontaS] = useState('');
    const [fal, setfal] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector(state => state.user);


    function enviarForm(email, senha, contaSelecionada) {
        dispatch(logar([email, senha, contaSelecionada]))
    }
   
    useEffect(() => {
        if (state.isLogged) {
            navigate("homePage");
        } else {
            console.log("erro senha");
        }
    }, [state.isLogged]);

    useEffect(() => {
        if (state.senhaErrada == true) {
            setfal(true);
        }
    }, [state.senhaErrada]);

    return (
        <section className={Style.containerPageLogin}>
            <>
                <p>voce deseja entrar como:</p>
                <p className={Style.span}>selecione um:</p>
                <div className={Style.containerSelector}>
                    <div className={`${Style.taga}  ${contaSelecionada == "cliente" ? Style.selecionado : ''}`} onClick={() => setcontaS('cliente')}>
                        <img src="src/Components/assets/icons/pessoa.png" alt="icon pessoa" />
                        pessoa
                    </div>
                    <div className={`${Style.taga}  ${contaSelecionada == "restaurante" ? Style.selecionado : ''}`} onClick={() => setcontaS('restaurante')}>
                        <img src="src/Components/assets/icons/restaurante.png" alt="icon restaurante" />
                        restaurante
                    </div>
                </div>
            </>
            <p className={Style.dados}>coloque seus dados</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    enviarForm(email, senha, contaSelecionada);
                }
                }>
                <div className={Style.containerinputs}>
                    <img src={`src/Components/assets/icons/email.png`} alt="icon restaurantes" />
                    <input onChange={(e) => {
                        setemail(e.target.value)
                    }} value={email}
                        type="email"
                        placeholder="email"
                        required={true}
                    />
                </div>
                <div className={Style.containerinputs}>
                    <img src="src/Components/assets/icons/password.png" alt="" />
                    <input
                        onChange={(e) => {
                            setsenha(e.target.value)
                        }}
                        value={senha}
                        type="password"
                        placeholder="senha"
                        required={true}
                    />
                </div>
                {fal ? <p className={Style.mensagemsenhaerrada}>senha ou email incorreto. Tente novamente.</p> : <></>}
                <button className={Style.btn} disabled={senha.length >= 8 && contaSelecionada ? false : true} >Entrar</button>
                <button className={Style.criarconta}>criar conta</button>
            </form>
        </section>
    )
};

export default PageLogin;