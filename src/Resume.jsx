import { useState } from "react";
import Experience from "./Experience";
import Education from "./Education";
import About from "./About";
import Skills from "./Skills";

const Resume = ()=>{

  const [selectedTab, setselectedTab] = useState("Education");
  return <div className="Resume-container">
    <div className="Left-resume">
      <span className="hire">Why You hire me?</span>
      <span className="description-resume">I am a web developer passionate about modern, <br />
      responsive, and user-friendly</span>
      <button 
      className={`btnExperience ${selectedTab === "Education" ? 'active' : ''}`}
      onClick={()=> setselectedTab("Education")}
      >Education</button>
      
      <button 
      className={`btnExperience ${selectedTab === "Experience" ? 'active' : ''}`}
      onClick={()=> setselectedTab("Experience")}
      >Experience</button>
      
      <button 
      className={`btnExperience ${selectedTab === "Skills" ? 'active' : ''}`}
      onClick={()=> setselectedTab("Skills")}
      >Skills</button>
      <button 
      className={`btnExperience ${selectedTab === "About me" ? 'active' : ''}`}
      onClick={()=> setselectedTab("About me")}
      >About me</button>

    </div>
    
    { selectedTab === "Skills" ? <Skills></Skills> : ''}
    { selectedTab === "About me" ? <About></About> : ''}
    { selectedTab === "Experience" ? <Experience></Experience> : ''}
    { selectedTab === "Education" ? <Education></Education> : ''}


  </div>
}
export default Resume;