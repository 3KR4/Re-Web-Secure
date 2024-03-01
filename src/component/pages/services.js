import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLaptopCode, faPenRuler, faUserShield, faEarthAmericas, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import TopPage from "../header/topPage"
import IconHolder from "../elements/iconHolder"
import StarsHolder from '../elements/stars'
import OurSkills from '../elements/skills'
import { Link } from "react-router-dom"
  
//img
import testimonials1 from "../../img/test 1.jpg"
import testimonials2 from "../../img/test 2.jpg"
import testimonials3 from "../../img/test 3.jpg"
import testimonials4 from "../../img/test 4.jpg"
import testimonials5 from "../../img/test 5.jpg"
import testimonials6 from "../../img/test 6.jpg"

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
    <div class="testimonials" id="testimonials">
    <div class="mainTitle">
        <h1 className='alone'>Our Clients Testimonials</h1>
      </div>
      <div class="container">
        <div class="box">
          <img decoding="async" src={testimonials1} alt="" />
          <h3>Ahmed Fares</h3>
          <span class="title">cyber security</span>
          <StarsHolder/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="box">
          <img decoding="async" src={testimonials2} alt="" />
          <h3>ahmed fikry</h3>
          <span class="title">Graphic Designer</span>
          <StarsHolder/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="box">
          <img decoding="async" src={testimonials3} alt="" />
          <h3>Ahmed Shalapy</h3>
          <span class="title">Front end Developer</span>
          <StarsHolder/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="box">
          <img decoding="async" src={testimonials4} alt="" />
          <h3>Ahmed Hani</h3>
          <span class="title">Front end Developer</span>
          <StarsHolder/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="box">
          <img decoding="async" src={testimonials5} alt="" />
          <h3>Mahmoud Elshazly</h3>
          <span class="title">Full Stack Developer</span>
          <StarsHolder/>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div class="box">
          <img decoding="async" src={testimonials6} alt="" />
          <h3>Ahmed Farag</h3>
          <span class="title">Ui&Ux Developer</span>
          <StarsHolder/>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

      </div>
    </div>
    <OurSkills/>
  </div>
  )
}