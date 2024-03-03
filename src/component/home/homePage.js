import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MySwiper } from './projectsSwiper'

// ICONS
import Facebock from '../../img/facebock.jpg';
import Sigma from '../../img/sigma.jpg';
import Blink from '../../img/blink.png';
import Base from '../../img/base.png';

// IMGS

import frontImg from '../../img/Programming-amico.png';
import uiux from '../../img/uiandux.png';
import backend from '../../img/back end.png';
import designer from '../../img/graphic designer.png';
import cyberSecurity from '../../img/cyperSecrity.png';

import {v4 as uuid} from 'uuid'

import Header2 from '../header/Header2'
import Header3 from '../header/Header3'
import FrontProject from '../home/frontProjects'
import HomeText from '../home/homeText'


const homeInfo = [
  {
    id: "front",
    title:"Front End Developing",
    detailes:"At Web Secure, we specialize in Front End development and Our goal is to help the client implement his plans and turn them into reality in the best possible way.",
    img:frontImg,
    color: "#2a84ff",
    info:[
      { 
        id:1,
        title:"Expertise:",
        text:"Our team brings years of experience and expertise to every project.",
      },
      { 
        id:2,
        title:"Custom Solutions:",
        text:"We tailor our services to meet your specific needs and goals Customer ",
      },
      { 
        id:3,
        title:"Satisfaction:",
        text:"Your satisfaction is our top priority. We strive to exceed your expectations at every step of the way.",
      },
      { 
        id:4,
        title:"Innovation:",
        text:"We stay up-to-date with the latest trends and technologies to deliver cutting-edge solutions.",
      },
      {
        id:5,
        text:"Explore our website to learn more about our services, see our portfolio, and contact us to discuss how we can help you achieve your goals.",
      },
      
    ],
    projects:[
      {
        id: uuid(),
        img: Facebock,
        name: "facebock",
        link: "",
        title: "Sosial Media",
        active:true,
      },
      {
        id: uuid(),
        img: Sigma,
        name: "sigma",
        link: "",
        title: "hardware shop",
      },
      {
        id: uuid(),
        img: Blink,
        name: "blink",
        link: "",
        title: "company",
      },
      {
        id: uuid(),
        img: Base,
        name: "base",
        link: "",
        title: "portfolyo",
      },
    ]
  },
  {
    id:"uiux",
    title:"UI and UX Developing",
    detailes:"At Web Secure we specialize in crafting intuitive and user-friendly digital experiences. Our team of dedicated UI/UX designers is here to help you achieve your goals and create impactful solutions that resonate with your audience.",
    img:uiux,
    color: "#27ae60",
    info:[
      { 
        id:1,
        title:"User Research and Analysis:",
        text:"We delve deep into understanding your target audience, their behaviors, and needs to create user-centric designs that meet their expectations.",
      },
      { 
        id:2,
        title:"Wireframing and Prototyping:",
        text:"We develop wireframes and prototypes to visualize the layout, structure, and flow of your digital product, ensuring seamless navigation and usability.",
      },
      { 
        id:3,
        title:"Visual Design:",
        text:"Our designers bring concepts to life with captivating visuals, striking graphics, and cohesive branding elements that enhance the overall user experience.",
      },
      { 
        id:4,
        title:"Usability Testing:",
        text:"We conduct thorough usability testing to identify any pain points or areas for improvement, ensuring that your design meets user needs and preferences.",
      },
      {
        id:5,
        title:"Responsive Design:",
        text:"Our designs are responsive and adaptable across various devices and screen sizes, providing a consistent and optimized experience for all users.",
      },
      
    ],
    projects:[
      {
        id: uuid(),
        img: Facebock,
        name: "facebock",
        link: "",
        title: "Sosial Media",
        active: true,
      },
      {
        id: uuid(),
        img: Sigma,
        name: "sigma",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Blink,
        name: "blink",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Base,
        name: "base",
        link: "",
        title: "Sosial Media",
      },
    ]
  },
  {
    id:"backend",
    title:"Back End Developing",
    detailes:"Welcome to Web Secure, your trusted partner for robust and scalable backend solutions. Our team of experienced developers specializes in building secure, efficient, and high-performing backend systems tailored to meet your unique business needs.",
    img:backend,
    color: "#fe5b3d",
        info:[
      { 
        id:1,
        title:"Custom Backend Development:",
        text:"We design and develop custom backend solutions from the ground up, leveraging the latest technologies and best practices to ensure optimal performance and reliability.",
      },
      { 
        id:2,
        title:"API Development and Integration:",
        text:"We create RESTful APIs and integrate them seamlessly with your frontend or third-party services, enabling smooth communication and data exchange between different components of your application.",
      },
      { 
        id:3,
        title:"Database Design and Management:",
        text:"Our experts design and optimize databases to efficiently store, retrieve, and manage your data, ensuring scalability, security, and data integrity.",
      },
      { 
        id:4,
        title:"Authentication and Authorization:",
        text:"We implement robust authentication and authorization mechanisms to protect your application's resources and ensure that only authorized users have access to sensitive data and functionalities.",
      },     
    ],
    projects:[
      {
        id: uuid(),
        img: Facebock,
        name: "facebock",
        link: "",
        title: "Sosial Media",
        active: true,
      },
      {
        id: uuid(),
        img: Sigma,
        name: "sigma",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Blink,
        name: "blink",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Base,
        name: "base",
        link: "",
        title: "Sosial Media",
      },
    ]
  },
  {
    id:"graphic",
    title:"Graphic Design",
    detailes:"Welcome to Web Secure, where creativity meets precision in graphic design. Our talented team of designers is passionate about bringing your vision to life and crafting visually stunning designs that captivate your audience and elevate your brand.",
    img:designer,
    color: "#e84393",
        info:[
      { 
        id:1,
        title:"Brand Identity Design:",
        text:"We specialize in creating unique and memorable brand identities that reflect your company's values, personality, and vision. From logo design to brand guidelines, we ensure consistency and coherence across all your branding materials.",
      },
      { 
        id:2,
        title:"Print Design:",
        text:"Whether you need business cards, brochures, flyers, or posters, we design eye-catching print materials that leave a lasting impression. Our attention to detail and commitment to quality ensure that your printed materials stand out in a crowded marketplace.",
      },
      { 
        id:3,
        title:"Packaging Design:",
        text:"We understand the importance of packaging in communicating your brand identity and enticing customers. Our packaging designs are not only visually appealing but also functional, ensuring that your products stand out on the shelf and leave a lasting impression.",
      },
    ],
    projects:[
      {
        id: uuid(),
        img: Facebock,
        name: "facebock",
        link: "",
        title: "Sosial Media",
        active: true,
      },
      {
        id: uuid(),
        img: Sigma,
        name: "sigma",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Blink,
        name: "blink",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Base,
        name: "base",
        link: "",
        title: "Sosial Media",
      },
    ]
  },
  {
    id:"cyberSecurity",
    title:"Cyber Security",
    detailes:"Welcome to Web Secure, your trusted partner in Cyber Security solutions. In today's digital age, protecting your data and infrastructure is more critical than ever. At Web Secure, we specialize in providing comprehensive Cyber Security services to safeguard your business against evolving cyber threats and ensure peace of mind.",
    img:cyberSecurity,
    color: "#f39c12",
        info:[
      { 
        id:1,
        title:"Risk Assessment and Management:",
        text:"We conduct thorough risk assessments to identify vulnerabilities and assess the potential impact of cyber threats on your organization.",
      },
      { 
        id:2,
        title:"Network Security:",
        text:"Protecting your network infrastructure is paramount to preventing unauthorized access and data breaches. We offer robust network security solutions, including firewalls, intrusion detection systems, and secure VPNs, to defend against external threats and safeguard your sensitive information.",
      },
      { 
        id:3,
        title:"Endpoint Protection: ",
        text:"With the proliferation of remote work and mobile devices, securing endpoints such as laptops, smartphones, and tablets is crucial. Our endpoint protection solutions offer advanced malware detection, encryption, and remote wipe capabilities to protect your devices and data wherever they go.",
      },
    ],
    projects:[
      {
        id: uuid(),
        img: Facebock,
        name: "facebock",
        link: "",
        title: "Sosial Media",
        active: true,
      },
      {
        id: uuid(),
        img: Sigma,
        name: "sigma",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Blink,
        name: "blink",
        link: "",
        title: "Sosial Media",
      },
      {
        id: uuid(),
        img: Base,
        name: "base",
        link: "",
        title: "Sosial Media",
      },
    ]
  },
]


export default function HomePage () {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);


  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 995px)');
    const handleMediaQueryChange = (mediaQueryList) => {
      setIsSmallScreen(mediaQueryList.matches);
    };
    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);
    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, [])

  const { type } = useParams();
  const nowPage = homeInfo.find((page) => page.id === type) || homeInfo[0];
  console.log(type);
  document.documentElement.style.setProperty('--main-color', nowPage.color);

  return (
      <div className='landing'>
        <Header3/>
          <div className='content container'>
          {isSmallScreen ? (
            <MySwiper nowPage={nowPage}/>
          ) : (
            <FrontProject nowPage={nowPage}/>
          )}
            <HomeText nowPage={nowPage}/>
          </div>
        <Header2/>
      </div>
  )
}