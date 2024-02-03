
import Style from "./loginpage.module.css";
import { useState } from "react";

const LoginPage = () => {
    const [troca, settroca] = useState(false);
    const [typeOfConta, setTypeOfConta] = useState(null);
    const trocar = () => {
        settroca(!troca);
    }
    const trocaTipoDeConta = (tipoDeConta) => {
        setTypeOfConta(tipoDeConta);
        console.log(tipoDeConta)
    }
    return (
        <>
            <div className={`${Style.container} ${troca == true? Style.active: ""}`} id="container">

                <div className={`${Style.formcontainer} ${Style.signup}`}>
                    <form>
                        <h2>Cadastrar Aluno</h2>
                
                        <input type="text" placeholder="Name" />
                        <button>Entre em contato</button>
                    </form>
                </div>

                <div className={`${Style.formcontainer} ${Style.signin}`}>
                    <form>
                        <h2>Tipo de conta</h2>
                        <div className={Style.typeofC}>
                            <div className={typeOfConta === "aluno"? Style.selected : ""} onClick={()=>trocaTipoDeConta("aluno")}>
                                <img src="../public/assets/aluno.png" alt="Logo Aluno" />
                                <h3>Aluno</h3>
                            </div>
                            <div className={typeOfConta === "professor"? Style.selected : ""} onClick={()=>trocaTipoDeConta("professor")}>
                                <img src="../public/assets/professor.png" alt="Logo Professor" />
                                <h3>Professor</h3>
                            </div>
                            <div className={typeOfConta === "admin"? Style.selected : ""} onClick={()=>trocaTipoDeConta("admin")}>
                                <img src="../public/assets/admin.png" alt="Logo admin" />
                                <h3>Admin</h3>
                            </div>
                        </div>
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <a href="#">esqueceu sua senha?</a>
                        <button>Entrar</button>
                    </form>
                </div>


                <div className={`${Style.togglecontainer}`}>
                    <div className={Style.toggle}>
                        <div className={`${Style.togglepanel} ${Style.toggleleft}`}>
                            <h1>Bem vindo de volta!</h1>
                            <p>Se você já tem uma conta click em sing in</p>
                            <button className={Style.hidden} onClick={()=>trocar()}>Sign In</button>
                        </div>
                        <div className={`${Style.togglepanel} ${Style.toggleright}`}>
                            <h2>Olá, Amigo(a)!</h2>
                            <p>Entre em Contato com nossos atendendes para realizar o cadastro</p>
                            <button className={Style.hidden} onClick={()=> trocar()} id="register">Cadastrar</button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )
};

export default LoginPage;

// const container = document.getElementById('container');
// const registerBtn = document.getElementById('register');
// const loginBtn = document.getElementById('login');

// registerBtn.addEventListener('click', () => {
//     container.classNameList.add("active");
// });

// loginBtn.addEventListener('click', () => {
//     container.classNameList.remove("active");
// });