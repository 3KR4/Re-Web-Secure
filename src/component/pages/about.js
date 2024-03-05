import { Link } from "react-router-dom"
import TopPage from "../header/topPage"

import SemiFooter from "../header/semiFooter";
import MainFooter from "../header/footer";
import OurSkills from '../elements/skills'

// ICONS
import EventNoteIcon from '@mui/icons-material/EventNote';
import CodeOffIcon from '@mui/icons-material/CodeOff';
import DrawIcon from '@mui/icons-material/Draw';
import InsightsIcon from '@mui/icons-material/Insights';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

// IMG 
import aboutImg from "../../img/about.jpg"
import Blog1 from "../../img/blog-1.jpg"
import Blog2 from "../../img/blog-2.jpg"
import Blog3 from "../../img/blog3.png"

import Work1 from "../../img/work-steps-1.png"
import Work2 from "../../img/work-steps-2.png"
import Work3 from "../../img/work-steps-3.png"

//img
import testimonials1 from "../../img/test 1.jpg"
import testimonials2 from "../../img/test 2.jpg"
import testimonials3 from "../../img/test 3.jpg"
import testimonials4 from "../../img/test 4.jpg"
import testimonials5 from "../../img/test 5.jpg"
import testimonials6 from "../../img/test 6.jpg"

export default function AboutPage () {


  const teamList = [
    {
      id: 6,
      name: "Ahmed Farag",
      work: "Ui&Ux Developer",
      img: testimonials6,
    },
    {
      id: 1,
      name: "Ahmed Fares",
      work: "cyber security",
      img: testimonials1,
    },
    {
      id: 2,
      name: "Mohamed Fekry",
      work: "Graphic Designer",
      img: testimonials2,
    },
    {
      id: 3,
      name: "Ahmed Shalapy",
      work: "Front end Developer",
      img: testimonials3,
    },
    {
      id: 4,
      name: "Ahmed Hani",
      work: "Back End Developer",
      img: testimonials4,
    },
    {
      id: 5,
      name: "Mahmoud Elshazly",
      work: "Full Stack Developer",
      img: testimonials5,
    },

  ]

  let team = teamList.map((box) => {
    return <div class="box" key={box.id}>
      <div className="lines"></div>
      <div className="imgHolder">
        <div className="lines"></div>
        <img src={box.img} alt="" />
      </div>
      <div className="content"> 
        <div className="mainInfo">
          <h3>{box.name}</h3>
          <span class="title">{box.work}</span>
        </div>
        <p>asda sdasdas</p>
        <p>asda sdasdasasdasd</p>
        <p>asda sdasdasasdasdsadasd</p>
      </div>
    </div>
  })

return(
  <div className="about ">
    <TopPage title="About"/>
  
      <div className="section">
      <div className="container">
          <img src={aboutImg}/>
          <div className="holder">
            <h2 className="mainTitles">we are professional team experience designer</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
            <div className="button">
              <Link>
                Our Projects
              </Link>
              <button><FileDownloadOutlinedIcon className="icon"/>DownLoad CV</button>
            </div>
          </div>
        </div>
      </div>
      <div class="team">
      <div className="container">
        <div class="mainTitle">
          <h1 className='alone'>Our Team Members</h1>
        </div>
        <div class="containerGrid">
          {team}
        </div>
      </div>
    </div>
      <div className="work">
      <div className="container">
          <div className="text">
            <h2 className="mainTitles">Work Process</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
          </div>
          <div className="cards">
            <div className="firstHolder">
              <div className="box">
                <EventNoteIcon className="icon"/>
                <h4>1-Research</h4>
                <p>Libero, doloribus quod, commodi molestiae cum quo</p>
              </div>
              <div className="box">
                <InsightsIcon className="icon"/>
                <h4>2-Analyze</h4>
                <p>Libero, doloribus quod, commodi molestiae cum quo</p>
              </div>
            </div>
            <div className="secondHolder">
            <div className="box">
              <DrawIcon className="icon"/>
              <h4>3-Design</h4>
              <p>Libero, doloribus quod, commodi molestiae cum quo</p>
            </div>
            <div className="box">
              <CodeOffIcon className="icon"/>
              <h4>4-Programming</h4>
              <p>Libero, doloribus quod, commodi molestiae cum quo</p>
            </div>
            </div>
          </div>
        </div>
      </div>
      <div class="work-steps" id="work-steps">
        <div className="container">
          <div className="text">
            <h2 className="mainTitles">What we do</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum. Libero, doloribus quod, commodi molestiae cum quo beatae, cumque corporis recusandae ullam dolorum rerum saepe incidunt delectus alias obcaecati? Ab, nobis rerum.</p>
            <Link>
              Say hello
            </Link>
          </div>

          <div class="info">
          <div class="box">
            <img src={Work1} alt=""/>
            <div class="text">
              <h3>Business Analysis</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione consequatur enim! Ducimus eligendi pariatur atque culpa, quia, in incidunt esse.</p>
            </div>
          </div>

          <div class="box">
            <img src={Work2} alt=""/>
            <div class="text">
              <h3>Architecture</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione consequatur enim! Ducimus eligendi pariatur atque culpa, quia, in incidunt esse.</p>
            </div>
          </div>

          <div class="box">
            <img src={Work3} alt=""/>
            <div class="text">
              <h3>Developement</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur ratione consequatur enim! Ducimus eligendi pariatur atque culpa, quia, in incidunt esse.</p>
            </div>
          </div>

        </div>
        </div>
      </div>
      <div class="blogs">
        <div className="container">
          <div class="mainTitle">
            <h1>Blogs</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.</p>
          </div>
          <div class="holder">
            <div class="card">
              <div class="image"><img src={Blog1}/></div>
              <div class="holder">
                <span>Web Solution</span>
                <h3>Make a better website solution for your product.</h3>
                <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
                <a href="">Read Blog <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>
            <div class="card">
              <div class="image"><img src={Blog2}/></div>
              <div class="holder">
              <span>UI Interface</span>
              <h3>The Science of Color Contrast — An Expert Designer’s Guide</h3>
              <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
              <a href="">Read Blog <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
            <div class="card">
              <div class="image"><img src={Blog3}/></div>
              <div class="holder">
              <span>Web Interface</span>
              <h3>SEO Made Simple: A Step by Step Guide for 2020.</h3>
              <p>Lorem ipsum dolor sit amet, adipscing elitr, sed diam nonumy eirmod tempor ividunt dolore magna.</p>
              <a href="">Read Blog <i class="fa-solid fa-arrow-right"></i></a>
            </div>
            </div>
          </div>
        </div>
      </div>
      <OurSkills/>
      <SemiFooter/>
      <MainFooter/>
  </div>
  )
}