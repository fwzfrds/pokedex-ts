import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../components/template/login/Login'
import Main from '../components/template/main/Main'
import AuthUser from '../helper/authUser'
import IsUserLogin from '../helper/isUserLogin'

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthUser><Main /></AuthUser>} />
        <Route path="/login" element={<IsUserLogin><Login /></IsUserLogin>} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers