import './css/master.css';


import Container from '@mui/material/Container';
import {useState , useEffect} from 'react'
import {v4 as uuid} from 'uuid'

import {BrowserRouter ,Route, Routes, Link } from 'react-router-dom';

import Header from './component/header/Header'

import HomePage from './component/home/homePage'


function App() {

const [bodyColor , setBodyColor] = useState("")

  useEffect(() => {
    let getTheme = localStorage.getItem("theme");
    if (getTheme == "light-mode") {
      setBodyColor("light")
      localStorage.setItem("theme", "light-mode");
    } else {
      setBodyColor("dark")
      localStorage.setItem("theme", "dark-mode");
    }
  }, {})

  function clickColorTheme () {
    if (bodyColor == "dark") {
      localStorage.setItem("theme", "light-mode");
      setBodyColor("light")
    } else {
      localStorage.setItem("theme", "dark-mode");
      setBodyColor("dark")
    }
  };

  return (
    <div className={`App body ${bodyColor == "dark" ? "dark" : "light"}`}>
      <Header bodyColor={bodyColor} clickColorTheme={clickColorTheme}/>

      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path='/home/:type' element={<HomePage/>}/>
      </Routes>
    </div>
  );
}

export default App;




