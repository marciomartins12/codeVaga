import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Style from "./pageLogin.module.css";
const PageLogin = ({tipoDeConta, setuser, user}) => {

    const [json, setJson] = useState(null);

    function verificaLog(){
        const usercurrent = localStorage.getItem("userCurrent")
        if (usercurrent) {
            const usercurrentjson = JSON.parse(usercurrent)
            enviarForm(usercurrentjson.email, usercurrentjson.senha)
        }
    }
    useEffect(() => {
        async function fetchData() {
            try {
                let response;
                let jsonData;

                if (tipoDeConta == "restaurante") {
                    response = await fetch("src/Services/RestaurantesContas.json");
                    jsonData = await response.json();
                } else {
                    response = await fetch("src/Services/cliente.json");
                    jsonData = await response.json();
                }
                setJson(jsonData);
            } catch (error) {
                console.error("Erro ao carregar JSON:", error);
            }
        }
        fetchData();
    }, []);
    useEffect(() => {
        if (json) {
            verificaLog();
        }
    }, [json]);

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");
    const [fal, setfal] = useState(false);
    const Navigate = useNavigate();

    function enviarForm(email, senha) {
        const pacote = json.find((e) => e.email === email);

        if (pacote) {
            if(pacote.senha === senha){
                window.localStorage.setItem("userCurrent", JSON.stringify({ email: email, senha: senha }))
                setuser([email, senha, tipoDeConta]);
                Navigate(`${tipoDeConta == "restaurante" ? "/homepagerestaurante" : "/homepagecliente"}`)
                return
            }
        }
            setfal(true);
    }
    return (
        <section className={Style.containerPageLogin}>
            <p>Fazer login {tipoDeConta.charAt(0).toUpperCase() + tipoDeConta.substring(1)}</p>
            <p className={Style.dados}>coloque seus dados</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    enviarForm(email, senha)
                }
                }>
                <div className={Style.containerinputs}>
                    <img src={`src/Components/assets/icons/${tipoDeConta == "restaurante" ? "restaurante" : "pessoa"}.png`} alt="icon restaurantes" />
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
                <button className={Style.btn} disabled={senha.length >= 8 ? false : true} >Entrar</button>
                <button className={Style.criarconta}>criar conta</button>
            </form>
        </section>
    )
};

export default PageLogin;