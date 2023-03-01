import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '../components/template/main/Main'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers