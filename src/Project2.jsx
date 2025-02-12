import { BsArrowUpRight } from "react-icons/bs";
import { TiHeadphones } from "react-icons/ti";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const Project2 = ({project, setproject})=>{
  return <>
  <div className="work-container">
    <div className="left-work-container">
    <span class="Project-number">02</span>
    <span class="Project-name">Fullstack Project</span>
    <span class="Project-discription">I am a web developer passionate about crafting modern, <br/> responsive, and user-friendly websites using the latest  <br/>technologies and best practices.</span>
    <span class="Language-used">Html 5 ,  Css 3,  Javascript,   React, NodeJs</span>
    <div className="work-icon-cotainer">
    <span > <BsArrowUpRight className="arrow-icon"/></span>
    <span> <TiHeadphones className="arrow-icon" /></span>


    </div>
    </div>
    <div className="right-work-container">
      <img src="/images/Todomockup.png" alt="Mockup website" className="mockup" />
      <div className="right-work-container-icons">
        <span ><FaAngleLeft className="right-arrow-icon" onClick={()=> {setproject(1)}
          }/></span>
        <span><FaAngleRight className="right-arrow-icon" onClick={()=>{ setproject(project++)
          if(project>2) project =1;

        }}
        
        /></span>
      </div>

    </div>
  </div>
  </>
}
export default Project2;