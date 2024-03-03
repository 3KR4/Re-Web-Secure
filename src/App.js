import './css/master.css';


import Container from '@mui/material/Container';
import {useState , useEffect} from 'react'
import {v4 as uuid} from 'uuid'

import {BrowserRouter ,Route, Routes, Link } from 'react-router-dom';

import Header from './component/header/Header'
import HomePage from './component/home/homePage'
import AboutPage from './component/pages/about'
import ContactPage from './component/pages/contact'
import ServicesPage from './component/pages/services'


function App() {

  return (
    <div className={`App`}>
        <Header/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/home/:type' element={<HomePage/>}/>
        <Route path='/about' element={<AboutPage/>}/>
        {/* <Route path='/projects' element={<PrjectsPage/>}/> */}
        <Route path='/services' element={<ServicesPage/>}/>
        <Route path='/contact' element={<ContactPage/>}/> 
      </Routes>
    </div>
  );
}

export default App;