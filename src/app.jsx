import HomePage from './Components/HomePage'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import PaginaRestaurante from './Components/Restaurante/Pages/PaginaInicial'


const App = () => {
  const [user, setuser] = useState(null);
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={
            <HomePage />
          } />

          <Route path='/PageLoginRestaurante' element={
            <PageLogin
              setid={(e) => setuser(e)}
              escolha="restaurante"
            />
          } />
          <Route path='/PageLoginCliente' element={
            <PageLogin
              setid={(e) => setuser(e)}
              escolha="cliente"
            />
          } />

          {/* homepage restaurante */}
          <Route path='/homepagerestaurante' element={
            <PaginaRestaurante
              id={user}
            />
          }>




          </Route>


        </Routes>
      </BrowserRouter>
     
    </div>
  )
}
export default App;