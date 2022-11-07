import { Routes, Route, } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Cadastro from '../src/Pages/Cadastro/Cadastro'

const Routers = () => {
  return (
    //rotas das paginas que sao exibidas apos o /
    <Routes>
      
      <Route path='/' element={<Home/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      

    </Routes>
  )
}

export default Routers