import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLaptopCode, faPenRuler, faUserShield, faEarthAmericas, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import TopPage from "../header/topPage"
import MainFooter from "../header/footer";
import { Link } from "react-router-dom"

export default function ServicesPage () {
return(
  <div class="services-page">
    <TopPage title="Services"/>
    <div class="services" id="services">
    <div class="mainTitle">
        <h1 className='alone'>Our Servives</h1>
      </div>
      <div class="container">

        <div class="box">
          <div>
        <FontAwesomeIcon className='icon' icon={faPenToSquare} />
          <h3>decide together</h3>
          </div>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

        <div class="box">
          <div>
        <FontAwesomeIcon className='icon' icon={faPenRuler} />
          <h3>Interface design</h3>
          </div>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

        <div class="box">
          <div>
          <FontAwesomeIcon className='icon' icon={faLayerGroup} />
          <h3>create database</h3>
          </div>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

        <div class="box">
          <div>
        <FontAwesomeIcon className='icon' icon={faLaptopCode} />
          <h3>develop your website</h3>
          </div>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

        <div class="box">
          <div>
        <FontAwesomeIcon className='icon' icon={faUserShield} />
          <h3>Make it save</h3>
          </div>
          <div class="info">
            <a href="#">Design</a>
          </div>
        </div>

        <div class="box">
          <div>
        <FontAwesomeIcon className='icon' icon={faEarthAmericas} />
          <h3>Marketing your project</h3>
          </div>
          <div class="info">
            <a href="#">Details</a>
          </div>
        </div>

      </div>
    </div>
      <MainFooter/>
  </div>
  )
}