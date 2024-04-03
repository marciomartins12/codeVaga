import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageLogin from './Components/PageLogin'
import HomePage from './Components/homePage';
const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageLogin />}/>
          <Route path='/homePage' element={<HomePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
