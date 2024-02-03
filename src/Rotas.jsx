import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Components/Pages/PageLogin"

function Rotas() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <LoginPage/>
    }/>

    </Routes>
    </BrowserRouter>
  )
}

export default Rotas
