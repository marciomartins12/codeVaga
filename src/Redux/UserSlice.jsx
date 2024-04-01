import { createSlice } from "@reduxjs/toolkit";
import Restaurante from "../Services/RestaurantesContas.json"
import Cliente from "../Services/cliente.json"
export const slice = createSlice({
    name: "user",
    initialState: {
        nome: "",
        email: "",
        tipoDeConta: "",
        isLogged: false,
        senhaErrada: false,
    },
    reducers: {
        logar(state, { payload }) {
            console.log("dispatch logar", payload)
            const [email, senha, tipo] = payload;
            const contaEncontrada = Restaurante.find(conta => conta.email === email && conta.senha === senha && conta.tipoDeConta === tipo) ||
                Cliente.find(conta => conta.email === email && conta.senha === senha && conta.tipoDeConta === tipo);
            console.log(contaEncontrada)
            if (contaEncontrada) {
                localStorage.setItem("userCurrent", [email, senha])
                return {
                    ...state,
                    isLogged: true,
                    name: contaEncontrada.nome,
                    email: contaEncontrada.email,
                    tipoDeConta: contaEncontrada.tipoDeConta,
                    senhaErrada: false
                }
            }
            return {
                ...state,
                senhaErrada: true
            }
        },
        // adicionaTipoConta(state, { payload }) {
        //     return { ...state, tipoDeConta: payload }
        // }
    }
})

export const { logar } = slice.actions

export const selectUser = state => state.user

export default slice.reducer