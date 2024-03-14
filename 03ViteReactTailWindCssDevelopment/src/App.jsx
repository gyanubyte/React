import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Components/Card.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  let myObj = {
    userName : "My Darling",
    age: 24
  }

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded mb-4'>TailWind Test</h1>
      <Card  my = {myObj}/>
    

    </>
  )
}

export default App
