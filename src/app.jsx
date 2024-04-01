import HomePage from './Components/HomePage'
import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import PaginaRestaurante from './Components/Restaurante/Pages/PaginaInicial'
import RestaurantePerfil from './Components/Restaurante/Pages/PaginaPerfil'
import TipoDeConta from './Components/HomePage/TipoDeConta'

const App = () => {
  const [dados, setDados] = useState('');
  const [user, setUser] = useState({ email: '', senha: '', tipoDeConta: '' });
  const [tipoDeConta, setTipoDeConta] = useState('');

  useEffect(()=>{
    let storagelocal =localStorage.getItem("userCurrent");
    let ljson = JSON.parse(storagelocal)
    if(ljson){
      setUser(ljson)
      console.log("olha user",user)
    }
  },[])
  useEffect(() => {
    async function buscaDados() {
      try {
        const { email, senha, tipoDeConta } = user;
        console.log(email, senha, tipoDeConta);
        console.log("aiaiai")
          let todosDados;
          if (tipoDeConta === "restaurante") {
            todosDados = await fetch("src/Services/RestaurantesContas.json");
            console.log("todos os dados", todosDados)
          } else {
            todosDados = await fetch("src/Services/cliente.json");
          }
          const todosDadosJson = await todosDados.json();
          const dadosBuscados = todosDadosJson.find((e) => e.email === email);
          setDados(dadosBuscados);
          console.log("aqui",dados);
        
      } catch (error) {
        console.log("erro:", error);
      }
    }
    buscaDados();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />}>
            <Route index element={<TipoDeConta
              setTipoDeConta={(e) => setTipoDeConta(e)}
            />} />
            <Route path='/PageLogin' element={<PageLogin
              tipoDeConta={tipoDeConta}
              setUser={(e) => setUser(e)}
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
