import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faLaptopCode, faPenRuler, faUserShield, faEarthAmericas, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import AccountTreeIcon from '@mui/icons-material/AccountTree';

import { useState } from 'react';
import TopPage from "../header/topPage"
import MainFooter from "../header/footer";
import { Link } from "react-router-dom"
import {v4 as uuid} from 'uuid'

import VisibilityIcon from '@mui/icons-material/Visibility';

// IMAGES
import Facebock from '../../img/facebock.jpg';
import WebSecure from '../../img/web secure.png';
import Sigma from '../../img/sigma.jpg';
import Blink from '../../img/blink.png';
import Base from '../../img/base.png';
import Spark from '../../img/spark.png';
import Uidek from '../../img/uidek.png';
import RentCar from '../../img/rent a car.png';
import Drivery from '../../img/drivery.png';
import Hardware from '../../img/hardware.png';

import Html from '../../img/projectIcon/html.png';
import Css from '../../img/projectIcon/css.png';
import Js from '../../img/projectIcon/js.png';
import Bootstrap from '../../img/projectIcon/bootstrap.png';
import React from '../../img/projectIcon/react.png';
import Node from '../../img/projectIcon/node js.png';
import Figma from '../../img/projectIcon/figma.png';

const allProjects = [
  {
    id: uuid(),
    img: WebSecure,
    name: "Web Secure",
    title: "Company",
    time: "4 Days ago",
    link: "",
    type: "Website",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      React,
      Node,
    ]
  },
  {
    id: uuid(),
    img: Facebock,
    name: "facebock",
    title: "Social Media",
    time: "3 weaks ago",
    link: "",
    type: "Website",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      Js,
      Bootstrap,
      React,
      Node,
    ]
  },
  {
    id: uuid(),
    img: Sigma,
    name: "sigma",
    title: "hardware shop",
    time: "1 month ago",
    link: "https://3kr4.github.io/Shop-Grids/index.html",
    type: "Ui&Ux",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      Js,
      Bootstrap,
    ]
  },
  {
    id: uuid(),
    img: Blink,
    name: "blink",
    title: "company",
    time: "24 days ago",
    link: "",
    type: "Ui&Ux",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      Bootstrap,
    ]
  },
  {
    id: uuid(),
    img: Base,
    name: "base",
    title: "portfolyo",
    time: "14 hours ago",
    link: "",
    type: "Graphic Design",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      Js,
      Bootstrap,
    ]
  },
  {
    id: uuid(),
    img: Spark,
    name: "Spark",
    title: "company",
    time: "6 month ago",
    link: "",
    type: "Graphic Design",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
    ]
  },
  {
    id: uuid(),
    img: Uidek,
    name: "Uidek",
    title: "company",
    time: "6 month ago",
    link: "",
    type: "Microsoft",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
      Bootstrap,
    ]
  },
  {
    id: uuid(),
    img: RentCar,
    name: "rent car",
    title: "company",
    time: "9 month ago",
    link: "",
    type: "Microsoft",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
    ]
  },
  {
    id: uuid(),
    img: Drivery,
    name: "drivery",
    title: "company",
    time: "11 month ago",
    link: "",
    type: "Ui&Ux",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
    ]
  },
  {
    id: uuid(),
    img: Hardware,
    name: "hardware",
    title: "eComers",
    time: "1 Year ago",
    link: "",
    type: "Website",
    details: "Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we help you achieve  your Goals",
    buildBy: [
      Html,
      Css,
    ]
  },
]

export default function ProjectsPage () {

  const [currentActive, setCurrentActive] = useState("ALL");
  const [arr, setArr] = useState(allProjects);

  const filterLi = [
    "Website",
    "Ui&Ux",
    "Graphic Design",
    "Microsoft",
  ]
const handleClick = (buttonCategory) => {
  setCurrentActive(buttonCategory);
  const newArr = allProjects.filter((item) => item.type === buttonCategory);
  setArr(newArr);
};

let projectsLoop = arr.map((box) => {
  return <div key={box.id} className='box'>
    <div className='image'>
      <span>{box.time}</span>
      <img src={box.img}/>
    </div>
    <div className='text'>
      <div>
        <h3>{box.name} - {box.title}</h3>
        <p>{box.details}</p>
      </div>
      <div className='holder'>
        <Link to={box.link}>
          <VisibilityIcon className='icon'/>
          Preview
        </Link>
        <div className='images'>
          {box.buildBy.map((url) => (
            <img src={url} />
          ))}
        </div>
      </div>
    </div>
  </div>
})

return(
  <div class="Projects-page">
    <TopPage title="Projects"/>
      <div className='projects container'>
        <div class="mainTitle">
          <h1>Our Projects</h1>
          <p>Welcome to Our Portfolio, Explore Our Projects and Get in Touch!</p>
        </div>
        <ul className='sectionFilter'>
          <li className={currentActive === "ALL" ? "active" : null}
            onClick={() => {
              setCurrentActive("ALL");
              setArr(allProjects);
            }}>
              ALL
          </li>
          {filterLi.map((li) => {
            console.log(li);
            return <li className={currentActive == li ? "active" : null}
              onClick={() => {
                handleClick(li);
              }}>{li}
            </li>
          })}
        </ul>
        <div className='allprojects'>
          {projectsLoop}
        </div>
        <ul className="pagination" style={{ display: arr.length < 9 ? "none" : "flex" }}>
          <li>Prev</li>
          <li class="active">1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>Next</li>
        </ul>
      </div>
    <MainFooter/>
  </div>
  )
}