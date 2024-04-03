import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { logar } from "../../Redux/UserSlice"
import Style from "./HomePage.module.css";
import { useDispatch, useSelector } from "react-redux";


const HomePage = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.user);
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('userCurrent'));
        if (storedUser) {
            const [email, senha, tipo] = storedUser;
            dispatch(logar([email, senha, tipo]));
        }
    }, [dispatch]);
    return (
        <section>
            <h2>aaaa{state.nome}</h2>
            {state.email}
            {state.isLogged? "aiaiia" : "uiuiu"}
            <Outlet />
            <nav> aaaaaaaaaaaa</nav>

        </section>
    )
}

export default HomePage;