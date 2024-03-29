import { useEffect, useState } from "react";
import Style from "./pageLogin.module.css";
const PageLogin = ({ escolha }) => {

    const [json, setJson] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                let response;
                let jsonData;
                if (escolha == "restaurante") {
                    response = await fetch("src/Services/restaurantes.json");
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

    const [email, setemail] = useState();
    const [senha, setsenha] = useState();

    function enviarForm(email, senha) {
        const pacote = json.find((e) => e.email === email)
        if (pacote) {
            pacote.senha === senha ? console.log("acertou ") : console.log("errou a senha ")
        } else {

            console.log("fuddio")
        }

    }
    return (
        <section className={Style.containerPageLogin}>
            <p className={Style.nome}>ThurDona</p>
            <p>Fazer login {escolha.charAt(0).toUpperCase() + escolha.substring(1)}</p>
            <p className={Style.dados}>coloque seus dados</p>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    enviarForm(email, senha)
                }
                }>
                <div>
                    <img src={`src/Components/assets/icons/${escolha == "restaurante" ? "restaurante" : "pessoa"}.png`} alt="icon restaurantes" />
                    <input onChange={(e) => {
                        setemail(e.target.value)
                        console.log(email)
                    }} value={email}
                        type="email"
                        placeholder="email"
                        required={true}
                    />
                </div>
                <div>
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
                    <button className={Style.btn} >Entrar</button>
            </form>
        </section>
    )
};

export default PageLogin;