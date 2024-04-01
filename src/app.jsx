import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin />}/>
            
          

          {/* homepage restaurante
          <Route path='/homepagerestaurante' element={<PaginaRestaurante
            user={user}
            dados={dados}
          />}>
            <Route index element={<div>Seja Bem vindo!</div>} />
            <Route path='perfil' element={<RestaurantePerfil />} />
            <Route path='cardapio' element={<RestaurantePerfil />} />
            <Route path='pedidos' element={<RestaurantePerfil />} />
          </Route>*/}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
