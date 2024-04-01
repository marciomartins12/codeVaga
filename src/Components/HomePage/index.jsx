import { Link, Outlet } from "react-router-dom";
import Styles from "./homepage.module.css";
const HomePage = () =>{
   
    return (
        <section className={Styles.containerHomepage}>
           <p className={Styles.nomesite}>ThurDona</p>
           
            <Outlet/>
        </section>
    )
}
export default HomePage;