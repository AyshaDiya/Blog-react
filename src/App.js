import logo from './logo.svg';
import './App.css';
import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Addblog from './components/Addblog';
import Api from './components/Api';

function App () {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
      <Route path='/t' element={<Api/>}/>
      <Route path='/' element= {<Addblog/>}/>
      

      </Routes>
    </div>
  )
}

export default App
