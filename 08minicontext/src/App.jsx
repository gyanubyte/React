import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {

  console.log("gyanendra app ")
  return (
    <UserContextProvider>
      <h1>Gyanendra kumar</h1>
         <Login/>
         <Profile/>
    </UserContextProvider>
  )
}

export default App
