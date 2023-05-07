import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Nav from './components/nav/Nav'
import Asia from './pages/Asia'
import Europe from './pages/Europe'
import Africa from './pages/Africa'
import Oceania from './pages/Oceania'
import Americas from './pages/Americas'
import Error from './pages/Error'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/asia' element={<Asia/>}/>
        <Route path='/europe' element={<Europe/>}/>
        <Route path='/africa' element={<Africa/>}/>
        <Route path='/oceania' element={<Oceania/>}/>
        <Route path='/americas' element={<Americas/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  )
}

export default App
