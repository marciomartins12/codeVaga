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
        img: "",
        descricao: "",
        cardapio: [],
        localizacao: "",
        avaliacao: "",
        fechado: true,
        tipoPagamento : ""
    },
    reducers: {
        logar(state, { payload }) {
            const [email, senha, tipo] = payload;
            const contaEncontrada = contas.find(conta => conta.email === email && conta.senha === senha && conta.tipoDeConta === tipo)
            if (contaEncontrada) {
                localStorage.setItem("userCurrent", JSON.stringify([email, senha, tipo]));
                return {
                    ...state,
                    isLogged: true,
                    name: contaEncontrada.nome,
                    email: contaEncontrada.email,
                    tipoDeConta: contaEncontrada.tipoDeConta,
                    senhaErrada: false,
                    img: contaEncontrada.img,
                    descricao: contaEncontrada.descricao,
                    cardapio: contaEncontrada.cardapio,
                    localizacao: contaEncontrada.localizacao,
                    avaliacao: contaEncontrada.avaliacao,
                    fechado: contaEncontrada.fechado,
                    tipoPagamento : contaEncontrada.tipoPagamento
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