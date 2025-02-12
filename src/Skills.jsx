import { ImHtmlFive } from "react-icons/im";
import { FaCss3 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";





const Skills = ()=>{
  return <div className="right-resume">
    <span className="title-experience">My Skills</span>
    <span className="experience-description">I specialize in optimizing websites to improve search engine
    rankings, increase organic traffic</span>
    <div className="skills-row1">
      <span className="skils-icon-container"> <ImHtmlFive className="skills-icone" /> </span>
      <span className="skils-icon-container"> <FaCss3 className="skills-icone" /> </span>
      <span className="skils-icon-container"> <IoLogoJavascript className="skills-icone" /> </span>
      <span className="skils-icon-container"> <FaReact className="skills-icone" /> </span>
      <span className="skils-icon-container"> <RiTailwindCssFill className="skills-icone" /></span>
      <span className="skils-icon-container"> <FaBootstrap className="skills-icone" /></span>
    </div>
    <div className="skills-row1">
      

    </div>
  </div>
}
export default Skills;