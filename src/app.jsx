import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import HomePage from './Components/homePage';
import Perfil from './Components/PagePerfil';
import CardapioRestaurante from './Components/PageCardapio';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin />} />
          <Route path='/homePage' element={<HomePage />}>
            <Route index element={<Perfil />} />
            <Route path='pedidos' element={<>pedidos</>} />
            <Route path='cardapioRestaurante' element={<CardapioRestaurante />} />
            <Route path='cardapioCliente' element={<>Cardapio Cliente</>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
