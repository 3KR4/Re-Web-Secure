import { Link } from "react-router-dom"
import logo from '../../img/logo.png';
import IconHolder from "../elements/iconHolder";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faLocationDot, faClock, faPhoneVolume } from "@fortawesome/free-solid-svg-icons";


export default function MainFooter () {

return(
<div class="footer">
  <div class="container">
    <div class="box">
      <h3>Web<span>Secure</span></h3>
      <IconHolder/>
      <p class="text">
        sadjghask asdjk hajksdha jka sdhjkaskj dha jksdha sdjhkas hjdjhkasdhkj asjk dahjskd hjkasdkj asjhkdhjkasdhjkasd askdjaskldj a
      </p>
    </div>
    <div class="link-box">
      <h4>Quick Links</h4>
      <ul class="links">
        <Link><FontAwesomeIcon className="icon" icon={faAnglesRight} /> Home</Link>
        <Link><FontAwesomeIcon className="icon" icon={faAnglesRight} /> About</Link>
        <Link><FontAwesomeIcon className="icon" icon={faAnglesRight} /> Projects</Link>
        <Link><FontAwesomeIcon className="icon" icon={faAnglesRight} /> Services </Link>
        <Link><FontAwesomeIcon className="icon" icon={faAnglesRight} /> Contact Us</Link>
      </ul>
    </div>
    <div class="box">
      <div class="line">
      <FontAwesomeIcon className="icon"  icon={faLocationDot} />
        <div class="info">Egypt, Cairo, Zahraa Nasr City 2091, First Floor, Flat 14</div>
      </div>
      <div class="line">
      <FontAwesomeIcon className="icon" icon={faClock} />
        <div class="info">Business Work Hours: From 08:00 Am To 12:00 Pm</div>
      </div>
      <div class="line">
      <FontAwesomeIcon className="icon" icon={faPhoneVolume} />
        <div class="info">
          <span>+201150865211</span>
          <span>+201020755331</span>
        </div>
      </div>
    </div>
  </div>
  <p class="copyright">Designed and Developed by - Wep Secure</p>
</div>
  )
}










