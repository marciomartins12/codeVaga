import HomePage from './Components/HomePage'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import PaginaRestaurante from './Components/Restaurante/Pages/PaginaInicial'
import RestaurantePerfil from './Components/Restaurante/Pages/PaginaPerfil'
import TipoDeConta from './Components/HomePage/TipoDeConta'




const App = () => {
  const [dados, setdados] = useState('');
  const [user, setuser] = useState('');
  const [tipoDeConta, setTipodeDeConta] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {

        let [email, senha, tipoDeConta] = user;
        if (email && senha && tipoDeConta) {
          if (tipoDeConta === "restaurante") {
            let todosDados = await fetch("src/Services/RestaurantesContas.json");
            let todosDadosJson = todosDados.json();
            let dadosBuscados = todosDadosJson.find((e) => e.email === email);
            setdados(dadosBuscados);
            console.log(dados)
          } else {
            let todosDados = await fetch("src/Services/cliente.json");
            let todosDadosJson = todosDados.json();
            let dadosBuscados = todosDadosJson.find((e) => e.email === email);
            setdados(dadosBuscados);
          }
        }
      } catch {
        console.log("erro");
      }
    }
  }, [user])


  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route index element={<TipoDeConta
              setTipoDeConta={(e) => setTipodeDeConta(e)}
            />} />
            <Route path='/PageLogin' element={<PageLogin
              tipoDeConta={tipoDeConta}
              setuser={(e) => setuser(e)}
              user={user}
            />} />
          </Route>

          {/* homepage restaurante */}
          <Route path='/homepagerestaurante' element={<PaginaRestaurante
            user={user}
            dados={dados}
          />}>
            <Route index element={<div>Seja Bem vindo!</div>} />
            <Route path='perfil' element={<RestaurantePerfil />} />
            <Route path='cardapio' element={<RestaurantePerfil />} />
            <Route path='pedidos' element={<RestaurantePerfil />} />
          </Route>


        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default App;