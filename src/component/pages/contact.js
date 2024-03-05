import TopPage from "../header/topPage"
import IconHolder from "../elements/iconHolder"
//icon
import RoomIcon from '@mui/icons-material/Room';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MainFooter from "../header/footer";

import { useState } from "react";
import emailjs from 'emailjs-com';


export default function ContactPage () {
  const [form, setForm] = useState({
    name:"",
    phone:"" ,
    email:"",
    subject:"",
  })
  const [invalidInputs, setInvalidInputs] = useState([]);

  const checkName = () => {
    if (form.name.length < 4) {
      setInvalidInputs([...invalidInputs, 'name']);
    } else {
      setInvalidInputs(invalidInputs.filter(input => input !== 'name'));
    }
  };

  const checkPhone = () => {
    if (form.phone.length < 10 || form.phone.length > 12*9) {
      setInvalidInputs([...invalidInputs, 'phone']);
    } else {
      setInvalidInputs(invalidInputs.filter(input => input !== 'phone'));
    }
  };

  const checkEmail = () => {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!form.email.match(emailPattern)) {
      setInvalidInputs([...invalidInputs, 'email']);
    } else {
      setInvalidInputs(invalidInputs.filter(input => input !== 'email'));
    }
  };

  const checkSubject = () => {
    if (form.subject.length < 4) {
      setInvalidInputs([...invalidInputs, 'subject']);
    } else {
      setInvalidInputs(invalidInputs.filter(input => input !== 'subject'));
    }
  };

const handleSubmit = (event) => {
  event.preventDefault();
  // if (!form.name || !form.phone || !form.email || !form.subject) {
  //   alert("Please fill in all fields");
  //   return;
  // }
  checkName();
  checkPhone();
  checkEmail();
  checkSubject();

  console.log(invalidInputs);

  if (invalidInputs.length == 0) {
    const servicId = 'service_hbui60s'
    const templateId = 'template_xsgfqu7'
    const publicId = 'v5g-oKR19wGPmZW7d'
    const templateParams = {
      from_name: form.name,
      from_phone: form.phone,
      from_email: form.email,
      to_name: "Web Secure",
      message: form.subject,
  }
    emailjs.send(servicId, templateId, templateParams, publicId)
    .then((response) => {
    console.log(response);
    setForm({
      name: '',
      email: '',
      phone: '',
      subject: ''
    });
    }).catch((error) => {
      console.log(error);
    })
  }
};




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
      <form class="contact" onSubmit={handleSubmit}>

          <div class="name">
            <label for="">Your Name</label>
            <input id="nameInput" type="text" placeholder="Enter Your Name" 
              value={form.name} 
              onChange={(event) => {
                setForm({...form, name:event.target.value})
              }} onKeyUp={checkName}/>
              <span className={invalidInputs.includes('name')  ? "error invaled" : "error"}>Please Enter Your Full Name</span>
          </div>

          <div class="Numper">
            <label for="">Phone Numper</label>
            <input id="PhoneInput" type="text" placeholder="Enter Your Phone Numper" 
              value={form.phone} 
              onChange={(event) =>{
                setForm({...form, phone:event.target.value})
              }}
              onKeyUp={checkPhone}/>
              <span className={invalidInputs.includes('phone')  ? "error invaled" : "error"}>Please Enter a Valid Numper</span>
          </div>

          <div class="Email">
            <label for="">Email Address</label>
            <input id="EmailInput" type="text" placeholder="Enter Your Email Address" 
              value={form.email} 
              onChange={(event) => {
                setForm({...form, email:event.target.value})
              }} onKeyUp={checkEmail}/>
              <span className={invalidInputs.includes('email')  ? "error invaled" : "error"}>You should ensure that the email is written correctly.</span>
          </div>

          <div  class="textarea">
            <label for="">Message</label>
            <textarea id="subjectInput" rows="6" placeholder="How can we help  you in executing your project?"
              value={form.subject} 
              onChange={(event) => {
                setForm({...form, subject:event.target.value})
              }} onKeyUp={checkSubject}>
            </textarea>
            <span className={invalidInputs.includes('subject')  ? "error invaled" : "error"}>How can we help  you in executing your project?</span>
          </div>
          <button type="submit" class="main-btn">Submit Ticket</button>
      </form>
    </div>
    <MainFooter/>
  </div>
  </>
  )
}