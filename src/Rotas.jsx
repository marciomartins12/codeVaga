import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./Components/Pages/HomePage"
function Rotas() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={
      <HomePage/>
    }/>

    </Routes>
    </BrowserRouter>
  )
}

export default Rotas
