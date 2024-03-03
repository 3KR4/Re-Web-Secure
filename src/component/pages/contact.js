import TopPage from "../header/topPage"
import IconHolder from "../elements/iconHolder"
  
//icon
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MainFooter from "../header/footer";

export default function ContactPage () {

return(
  <>
  <TopPage title="Contact us"/>
  <div class="contact-page">
    <div class="container">
    <div class="info-contact">
        <h1>Lets Discuss Your Project</h1>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</p>
        <div class="address">
          <RoomIcon className="icon"/>
          <div>
          <h3>Address</h3>
          <p>CAIRO.EGYPT</p>
        </div>
        </div>
        <div class="Email">
          <EmailIcon className="icon"/>
          <div>
          <h3>Email us</h3>
          <p>rewebsecure@mail.com</p>
        </div>
        </div>
        <div class="call">
          <CallIcon className="icon"/>
          <div>
            <h3>Call Us Now</h3>
            <p>01150865216</p>
          </div>
        </div>
        <IconHolder/>
      </div>
      <div class="contact">
          <div class="name">
            <label for="">Your name</label>
            <input type="text" placeholder="Enter Your Name" />
          </div>

          <div class="Email">
            <label for="">Email address</label>
            <input type="text" placeholder="Enter Your Email" />
          </div>

          <div class="subject">
            <label for="">Your Subject</label>
            <input type="text" placeholder="Type Your Subject" />
          </div>

          <div class="textarea">
            <label for="">Message</label>
            <textarea rows="6" placeholder="Write Your Message Here"></textarea>
          </div>
          <a class="main-btn" href="">Submit Ticket</a>
      </div>
    </div>
    <MainFooter/>
  </div>

  </>
  )
}