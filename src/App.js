import {BrowserRouter} from 'react-router-dom'
import {Routes} from 'react-router-dom'
import {Route} from 'react-router-dom'
import React from 'react'
import Login from './components/Login'
import Header from './components/Header'
import Home from './components/Home'
import Detail from './components/Detail'
import "./App.css"

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route  path="/" element={<Login/>}></Route>
        <Route  path="/home" element={<Home/>}></Route>
        <Route  path="/deatil/:id" element={<Detail/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
