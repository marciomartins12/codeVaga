import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './Components/HomePage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <HomePage />
        }/>





        <Route path='/PageLoginRestaurante' element={
          <PageLogin
          escolha = "restaurante"
          />
        }/> 
        <Route path='/PageLoginCliente' element={
          <PageLogin
          escolha = "cliente"
          />
        }/>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
