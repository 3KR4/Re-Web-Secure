import { useState, useEffect } from 'react';
import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';
import SideBar from './sideBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';

export default function Header (props) {

function handleOpenSideBar () {
  document.querySelector(".sideBar").classList.add("active")
}
const [isVisible, setIsVisible] = useState(false);

  function handleScroll() {
    if (window.scrollY >= 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }
  window.addEventListener('scroll', handleScroll);
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

const [darkTheme, setDarkTheme] = useState(localStorage.getItem("currentDarkMode") ?? "light")

useEffect(() => {
  if(darkTheme === "light"){
    document.body.classList.remove("dark");
    document.body.classList.add("light");
  }else{
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  }
}, [darkTheme])

return(
  <>
  <button  onClick={scrollToTop} class={`scrollButton ${isVisible ? 'show scrollBar' : 'scrollBar'}`}><FontAwesomeIcon icon={faAnglesUp}/></button>
  <div className="header">
    <div className='logo'>
      <img src={logo}  alt="logo" />
      <h1>Web Secure</h1>
    </div>

      <ul className="nav">

      <NavLink to='/home/front'>
        Home 
      </NavLink>

      <NavLink to='/about'>
        About 
      </NavLink>

      <NavLink to='/projects'>
        Projects 
      </NavLink>

      <NavLink to='/services'>
        Services 
      </NavLink>

      <NavLink to='/contact'>
        Contect Us 
      </NavLink>

      </ul>

    <div className='barsHolder'>

      <DehazeIcon className='icon bars' onClick={handleOpenSideBar}/>
      <div onClick={()=> {
            localStorage.setItem("currentDarkMode" , darkTheme === "dark" ? "light" : "dark")
            setDarkTheme(localStorage.getItem("currentDarkMode"))
          }} className= 'darkLight'>
        {darkTheme === "dark" ? <LightModeOutlinedIcon className='sun icon'/> : <DarkModeOutlinedIcon className='moon icon'/>}
      </div>
    </div>

  </div>
  <SideBar />
  </>
  )
}









