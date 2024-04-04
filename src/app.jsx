import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import HomePage from './Components/homePage';
import Perfil from './Components/PagePerfil';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin />} />
          <Route path='/homePage' element={<HomePage />}>
            <Route index element={<Perfil/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
