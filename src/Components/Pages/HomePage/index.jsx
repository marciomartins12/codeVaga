import { Link } from "react-router-dom";
import Style from "./homepage.module.css";

const HomePage= ()=>{
    return (
        <>
        <nav>
            <Link><img src="" alt="logo da escola"/></Link>

            <Link to="/login">Login</Link>
            <Link to="/register">Cadastrar</Link>
        </nav>
        </>
    )
};

export default HomePage;