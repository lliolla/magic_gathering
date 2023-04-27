import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import './index.scss'
 import Home from './pages/home/Home'
 import NotFound from './pages/not found/NotFound'

function App() {
  

  return (
  <div className="app">
<BrowserRouter>

    <Routes>    
       <Route path="/" element={ <Home/> } />
       <Route path="*" element={ <NotFound /> } />
    </Routes>   
</BrowserRouter>    
  </div>
  )
}

export default App
