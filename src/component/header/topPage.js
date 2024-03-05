import { Link } from "react-router-dom"
import { useParams } from 'react-router-dom'
// ICONS
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';

export default function TopPage (props) {
return(
  <div className="pagesTop">
    <div class="container">
      <h4 class="pageName1">{props.title}</h4>
      <div class="pages">
        <div class="home">
        <HomeOutlinedIcon className="icon"/>
        <Link to='/home/front'>
          Home
        </Link>
        </div>
        <KeyboardArrowRightOutlinedIcon className="icon"/>
        <h5 class="pageName2">{props.title}</h5>
      </div>
    </div>
  </div>
  )
}