import { useState } from 'react'

import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import Success from './components/Success'


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Home /> }/>

          <Route path='/success' element = {<Success />}/>
          <Route path='/error?' element = {<Error />} />

          
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
