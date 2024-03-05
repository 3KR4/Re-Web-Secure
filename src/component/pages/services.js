import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrochip, faBolt, faVolleyball,faPenToSquare, faLaptopCode, faPenRuler, faUserShield, faEarthAmericas, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
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
    <div class="pricing" id="pricing">
    <div class="mainTitle">
        <h1 className='alone'>Pricing Plane</h1>
      </div>
      <div class="container">
        <div class="box">
          <div class="title">basic
          <FontAwesomeIcon className='icon' icon={faVolleyball} />

          <div class="price">
            <span class="amount">499$</span>
          </div>
          </div>
          <ul>
            <li>Basic Website Development</li>
            <li>Landing Page</li>
            <li>Contact Page</li>
            <li>Standard SEO Optimization</li>
          </ul>
          <Link to="/contact">Contact Now</Link>
        </div>
        <div class="box popular">
          <div class="title">advanced
          <FontAwesomeIcon className='icon' icon={faBolt} />
          <div class="price">
            <span class="amount">999$</span>
          </div>
          </div>
          <ul>
            <li>Everything in Starter, plus:</li>
            <li>Enhanced Website Functionality</li>
            <li>E-commerce Integration</li>
            <li>Advanced SEO Strategies</li>
          </ul>
          <Link to="/contact">Contact Now</Link>
        </div>
        <div class="box">
          <div class="title">Professional
          <FontAwesomeIcon className='icon' icon={faMicrochip} />
          
          <div class="price">
            <span class="amount">2000$</span>
          </div>
          </div>
          <ul>
            <li>Everything in Advanced, plus</li>
            <li>Custom Web Applications</li>
            <li>Priority Support</li>
            <li>Security Enhancements</li>
          </ul>
          <Link to="/contact">Contact Now</Link>
        </div>
      </div>
    </div>
    <MainFooter/>
  </div>
  )
}