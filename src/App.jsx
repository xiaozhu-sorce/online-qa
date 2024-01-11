import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router'
import LoginPage from './pages/auth/login'
import AHome from './pages/ahome'
import UHome from './pages/uhome'
import User from './pages/user'
import Password from './pages/auth/password'
import ProfileEdit from './pages/auth/profileEdit'
import Chat from './pages/chat/chat'
import Data from './pages/data'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/admin' element={<AHome />}>
        <Route path='user' element={<User />} />
        <Route path='data' element={<Data />} />
      </Route>
      <Route path='/chat' element={<Chat />} />
      <Route path='/user' element={<UHome />}>
        <Route path='pwd' element={<Password />} />
        <Route path='profile' element={<ProfileEdit />} />
      </Route>
    </Routes>
  )
}

export default Router
