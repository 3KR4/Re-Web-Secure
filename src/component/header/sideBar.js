import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import logo from '../../img/logo.png';
import profile from '../../img/profile.jpg';
import { Link } from 'react-router-dom';

// ICONS
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PhoneInTalkOutlinedIcon from '@mui/icons-material/PhoneInTalkOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import CloseIcon from '@mui/icons-material/Close';


export default function SideBar () {

  function handleCloseSideBar () {
    document.querySelector(".sideBar").classList.remove("active")
  }

  return(
      <div className="sideBar">

        <div className='logo'>
          <div>
            <img src={logo}  alt="logo" />
            <h2>Re-Web-Secure</h2>
          </div>
          <CloseIcon className='icon' onClick={handleCloseSideBar}/>
        </div>
        
        <Link to='/contact' className='contact'>
          <PhoneInTalkOutlinedIcon className='icon'/>
          <li>Contact Us</li>
        </Link>

        <h4>Menu</h4>
        <ul className="menu">

          <Link to='/home'>
            <HomeOutlinedIcon className='icon'/>
            <li className='active'>Home </li>
          </Link>

          <Link to='/about'>
            <PeopleAltOutlinedIcon className='icon'/>
            <li>About </li>
          </Link>

          <Link to='/projects'>
            <DashboardOutlinedIcon className='icon'/> 
            <li>Projects </li>
          </Link>

          <Link to='/services'>
            <DesignServicesOutlinedIcon className='icon'/>
            <li>Services</li>
          </Link>

        </ul>

        <Link to='/notifications' className='notifications'>
          <div>
            <NotificationsActiveOutlinedIcon className='icon'/>
            <li>Notifications</li>
          </div>
          <span>10</span>
        </Link>

        <h4>Profile</h4>
        <div className='userInfo'>
          <img src= {profile}/>
          <div className='text'>
            <h3>Mahmoud Elshazly</h3>
            <p>3kr4-betterThan-farag-@gmail.com</p>
          </div>
        </div>

        <span className='LogOut'>
          <LogoutIcon className='icon'/> 
          Log out
        </span>

      </div>
  )
}