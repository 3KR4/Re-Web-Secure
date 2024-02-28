import IconHolder from '../header/iconHolder';
import { NavLink } from 'react-router-dom';
export default function Header2 () {


  return(
    <div className='header2'>
      <ul className="nav">

      <NavLink to="/home/front" className='headr2Li'>
        Front End 
      </NavLink>

      <NavLink to="/home/uiux" className='headr2Li'>
        UI & UX 
      </NavLink>

      <NavLink to="/home/backend" className='headr2Li'>
        Back End
      </NavLink>

      <NavLink to="/home/graphic" className='headr2Li'>
        Graphic Designer 
      </NavLink>


      <NavLink to="/home/cyberSecurity" className='headr2Li'>
        Cyber Security
      </NavLink>

      </ul>
      <IconHolder/>
    </div>
  )
}