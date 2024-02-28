import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

export default function Header (props) {
  return(
      <div className="header">
        <div className='logo'>
          <img src={logo}  alt="logo" />
          <h1>Re-Web-Secure</h1>
        </div>
        <ul className="nav">
          <Link to='/home/front'>
            <li className='active'>Home </li>
          </Link>
          <li>About </li>
          <li>Services </li>
          <li>Contect Us </li>
        </ul>
        
        <div onClick={props.clickColorTheme} className={`darkLight ${props.bodyColor == "dark" ? "active" : ""}`}>
          <LightModeOutlinedIcon className='sun icon'/>
          <DarkModeOutlinedIcon className='moon icon'/>
        </div>

      </div>
  )
}