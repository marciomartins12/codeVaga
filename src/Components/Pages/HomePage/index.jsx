import { Link } from "react-router-dom";
import Style from "./homepage.module.css";

const HomePage = () => {
    return (
        <>
            <nav>
                <Link><img src="" alt="logo da escola" /></Link>

                <Link to="/login">Login</Link>
                <Link to="/register">Cadastrar</Link>
            </nav>


            <section>
                <div>
                    <img src="" alt="volta às aulas" />
                    <h2>Aprender é a melhor aventura!</h2>
                </div>
                <div>
                    <img src="" alt="duas meninas se abraçando na escola" />
                </div>
                <div>
                    <div>
                        <h3>Venha para a melhor escola</h3>
                        <div>
                            <div>
                                <span>
                                    50%
                                </span>
                                <p>de desconto</p>
                            </div>
                            R$ 70.00
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <h4>Lista de Disciplinas Oferecidas:</h4>
                    <ul>
                        <li>Matemática</li>
                        <li>Português</li>
                        <li>Ciências</li>
                        <li>História</li>
                        <li>Geografia</li>
                    </ul>
                </div>
                <div>
                    <h4>Informação sobre Tecnologia no ensino:</h4>
                    <ul>
                        <li>Uso de Ferramentas modernas para melhor aprendizagem.</li>
                        <li>Recursos educacionais digitais</li>
                    </ul>


                </div>
                <div>
                    <h4>Suporte Pscicológico</h4>
                    <ul>
                        <li>Disponibilidade de encontros individuais com pscicólogo</li>
                        <li>Foco no bem-estar emocional e apoio aos alunos</li>
                    </ul>
                </div>


            </section>
            <footer>
                <p>emaildaescolinhadereforcofake123@gmail.com</p>
                <p>55 989812121212</p>

<div>
    Mais informações
    <img src="" alt="logo whatsapp" />
</div>
            </footer>
        </>
    )
};

export default HomePage;