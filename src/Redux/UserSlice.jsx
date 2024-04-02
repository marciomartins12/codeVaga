import { createSlice } from "@reduxjs/toolkit";
import contas from "../Services/contas.json"
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
            const contaEncontrada = contas.find(conta => conta.email === email && conta.senha === senha && conta.tipoDeConta === tipo)
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