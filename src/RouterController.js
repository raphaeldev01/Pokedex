import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import ByType from './Pages/ByType/ByType'
import Pokemon from './Pages/Pokemon/Pokemon'

const Router = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/type/:id' element={<ByType />} />
        <Route path='/pokemon/:id' element={<Pokemon />} />
    </Routes>
  ) 
}

export default Router
