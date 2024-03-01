import IconHolder from '../elements/iconHolder';
import { NavLink } from 'react-router-dom';
import { useParams } from 'react-router-dom'

export default function Header2 () {
  const { type } = useParams();

  return(
    <div className='header2'>
      <ul className="nav">

      <NavLink to="/home/front" className={type == undefined ? 'headr2Li active' : 'headr2Li'}>
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