import { FaPhone } from "react-icons/fa6";
import { MdMail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const Contact = ()=>{
  return <>
  <div className="contact-container">
    <div className="left-contact">
      <span className="lets-talk">Lets Work Together</span>
      <span className="description-contact">We’d love to hear from you! Contact us with your questions or feedback, and we’ll respond as soon as possible.</span>
      <div className="form-container">
        <div className="form-name-container">
          <input type="text" className="inputBox" placeholder="FirstName"/>
          <input type="text" className="inputBox" placeholder="LastName"/>
        </div>
        <div className="form-name-container">
          <input type="text" className="inputBox" placeholder="Email addreses"/>
          <input type="text" className="inputBox" placeholder="Phone Number"/>
        </div>
        <div className="form-name-container">
          <input type="text" className="inputBox-email" placeholder="Email addreses"/>
        </div>
        <div className="form-name-container">
          <textarea rows={10} cols={70} className="contact-description" disabled placeholder="Type Your Message Here"></textarea>
        </div>
        <div className="form-name-container">
         <button className="btnMessage">Send Message</button>
        </div>
      </div>
    </div>
    <div className="right-contact">
      <div className="phoneDetails">
        <span ><FaPhone className="phone-icone" /></span>
        <div className="number-text">
          <span>Phone</span>
          <span>(+92) 317 6753 902</span>
        </div>
      </div>
      <div className="phoneDetails">
        <span ><MdMail className="phone-icone" /></span>
        <div className="number-text">
          <span>Email</span>
          <span> muhammadajmalaslam6@gmail.com</span>
        </div>
      </div>
      <div className="phoneDetails">
        <span ><IoLocationSharp className="phone-icone" /></span>
        <div className="number-text">
          <span>Location</span>
          <span>Ada Lar Multan, Pakistan</span>
        </div>
      </div>
    </div>
  </div>
  </>
}
export default Contact;