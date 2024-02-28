import { useState } from 'react'
import { useParams } from 'react-router-dom'

// ICONS
import Facebock from '../../img/facebock.jpg';
import Sigma from '../../img/sigma.jpg';
import Blink from '../../img/blink.png';
import Base from '../../img/base.png';
import Spark from '../../img/spark.png';

// IMGS
import frontImgDark from '../../img/frontend dark.gif';
import frontImgLight from '../../img/frontend light.gif';
import uiuxDark from '../../img/uiandux dark.gif';
import uiuxLight from '../../img/uiandux light.gif';
import backendDark from '../../img/back end darck.gif';
import backendLight from '../../img/back end light.gif';
import designerDark from '../../img/graphic designer dark.gif';
import designerLight from '../../img/graphic designer light.gif';
import cyberSecurityDark from '../../img/cyperSecrity dark.gif';
import cyberSecurityLight from '../../img/cyperSecrity light.gif';

import {v4 as uuid} from 'uuid'

import Header2 from '../header/Header2'
import Header3 from '../header/Header3'
import FrontProject from '../home/frontProjects'
import HomeText from '../home/homeText'


const homeInfo = [
  {
    id: "front",
    title:"Front End Devolober",
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img1:frontImgDark,
    img2: frontImgLight,
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
    title:"UI and UX Devolober",
    detailes:"asKldhA SKJdhAS JKdhASKJ: dhASJK dhASKJHasdajsk fWJKHFgSADHJ FvSDHJKfgAS HFgALJHYGfVASB FshjsDVDfhjkSADGGVGf ASDasKLD hjASKD hASJKL D             aJKSDhASJKDgAS KJdSAJK dhsa djksAHdj          aJSKDhAS JkdsaH dkjsAH DaJSKDHJGK fvbSADHJf gvSADJKHF gSDHJKF gs fgAJKHFAHJf gAHJKLf gAFj; hAFGkjlhSDGfhkhjLASDGF AJLH FgALJHSF gaLorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod  Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img1:uiuxDark,
    img2: uiuxLight,
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
    title:"Back End Devolober",
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img1:backendDark,
    img2: backendLight,
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
    title:"Graphic Designer",
    detailes:"Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna. Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.",
    img1:designerDark,
    img2: designerLight,
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
    img1:cyberSecurityDark,
    img2: cyberSecurityLight,
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

  const { type } = useParams();
  const nowPage = homeInfo.find((page) => page.id === type) || homeInfo[0];

  document.documentElement.style.setProperty('--main-color', nowPage.color);

  return (
    <>
      <Header2/>
      <Header3/>
      <div className='landing'>
        <FrontProject nowPage={nowPage}/>
        <HomeText nowPage={nowPage}/>
      </div>
    </>
  )
}
