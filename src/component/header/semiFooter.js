import { Link } from "react-router-dom"
import bgShapeSvg from "../../img/bg-shape.svg"

export default function SemiFooter () {

return(
  <div class="started container">
    <div class="container">
      <img src={bgShapeSvg} alt=""/>
      <h1>At the end, <br/>
      feel free to explore and contact us</h1>
      <Link class="main-btn" to="/contact">Contact Us</Link>
    </div>
  </div>
  )
}