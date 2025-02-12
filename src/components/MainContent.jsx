import { FiDownload } from "react-icons/fi";
import { FaHeadphones } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { FaYoutube } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import Stats from "./Stats";




const MainContent =()=>{
  return<> 
  <div className="Main-content-container">
    <div className="Main-text">
    <span >Software Developer </span>
    <span className="Hello">Hello I'm</span>
    <span className="name">Ajmal Aslam </span>
    <span>I excel ar crafting elegant digital experience and <br /> I am proficient in various programming languages <br /> and technologies.</span>
    <div className="buttons-container">
      <div>
     <a href="/ajmal.pdf"  download="Ajmal_cv.pdf"> <button className="btnDownload" >Download CV <FiDownload className="download" /></button> </a>
      </div>
      <div >
      <FaHeadphones className="headPhone-icon1" />
      </div>
      <div >
      <SiIndeed className="headPhone-icon1"/>
      </div>
      <div >
      <FaYoutube className="headPhone-icon1"/>
      </div>
      <div >
      <FaTwitter className="headPhone-icon1"/>
      </div>
    </div>
    </div>
    <div className="Main-img">
    <img src="/images/ajmal.jpg" alt="Ajmal Photo" />
    </div>
  </div>
  <Stats></Stats>
  </>
}
export default MainContent;