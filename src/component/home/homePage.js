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
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img:frontImg,
    color: "#2a84ff",
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
    detailes:"asKldhA SKJdhAS JKdhASKJ: dhASJK dhASKJHasdajsk fWJKHFgSADHJ FvSDHJKfgAS HFgALJHYGfVASB FshjsDVDfhjkSADGGVGf ASDasKLD hjASKD hASJKL D             aJKSDhASJKDgAS KJdSAJK dhsa djksAHdj          aJSKDhAS JkdsaH dkjsAH DaJSKDHJGK fvbSADHJf gvSADJKHF gSDHJKF gs fgAJKHFAHJf gAHJKLf gAFj; hAFGkjlhSDGfhkhjLASDGF AJLH FgALJHSF gaLorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod  Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img:uiux,
    color: "#27ae60",
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
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img:backend,
    color: "#fe5b3d",
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
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img:designer,
    color: "#e84393",
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
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img:cyberSecurity,
    color: "#f39c12",
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