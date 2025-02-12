import { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = ({selectedTab, setselectedTab})=>{
  return<>
  <div className="NavBar-Container">
    <Link to="/" className={`NavBar-item ${selectedTab === "Home" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Home")}
    >Home</Link>
    <Link to="Services" className={`NavBar-item ${selectedTab === "Services" ? 'underline' : ''}`}  
    onClick={()=> setselectedTab("Services")}
    >Services</Link>
    <Link to="Resume" className={`NavBar-item ${selectedTab === "Resume" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Resume")}
    >Resume</Link>
    <Link to="Work" className={`NavBar-item ${selectedTab === "Work" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Work")} 
    >Work</Link>
    <Link to="Contact" className={`NavBar-item ${selectedTab === "Contact" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Contact")}
    >Contact</Link>
    <button>Hire me</button>

  </div>
  </>
}
export default NavBar;