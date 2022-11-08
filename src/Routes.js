import { Routes, Route, Navigate } from 'react-router-dom'

import App from './App'
import { Cadastro } from './components'

const Routers = () => {
  return (
    //rotas das paginas que sao exibidas apos o /
    <Routes>
      <Route path='/' element={<App to={'/home'}/>}/>
      
      <Route path='cadatro' element={<Cadastro/>}/>

    </Routes>
  )
}

export default Routers