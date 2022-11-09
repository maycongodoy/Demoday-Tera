import { Routes, Route, } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Cadastro from '../src/Pages/Cadastro/Cadastro'
import Login from './Pages/Login/Login';

const Routers = () => {
  return (
    //rotas das paginas que sao exibidas apos o /
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>}/>
      

    </Routes>
  )
}

export default Routers