import HomePage from './Components/HomePage'
import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import HomepageRestaurante from './Components/Restaurante/Pages'
const App = ()=>{
    const [user, setuser] = useState(null);
    return (

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
            <HomepageRestaurante
              id={user}
            />
          } />
  
  
        </Routes>
      </BrowserRouter>
    )
}
export default App;