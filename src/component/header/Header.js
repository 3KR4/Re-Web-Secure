import logo from '../../img/logo.png';
import { NavLink } from 'react-router-dom';
import SideBar from './sideBar'

import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import DehazeIcon from '@mui/icons-material/Dehaze';


export default function Header (props) {

function handleOpenSideBar () {
  document.querySelector(".sideBar").classList.add("active")
}

return(
  <>
  <div className="header">
    <div className='logo'>
      <img src={logo}  alt="logo" />
      <h1>Re-Web-Secure</h1>
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
      <div onClick={props.clickColorTheme} className={`darkLight ${props.bodyColor == "dark" ? "active" : ""}`}>
        <LightModeOutlinedIcon className='sun icon'/>
        <DarkModeOutlinedIcon className='moon icon'/>
      </div>
    </div>

  </div>
  <SideBar />
  </>
  )
}