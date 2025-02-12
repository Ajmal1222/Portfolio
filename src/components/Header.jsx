import { useState } from "react";
import Logo from "./Logo";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { use } from "react";

const Header = ()=>{
  const[selectedTab, setselectedTab] = useState("Home")
  const [selectMenu, setselectMenu] = useState(false)
  const [selectMenu2, setselectMenu2] = useState(true)
   const handleMenuBtn = ()=>{
    setselectMenu(!selectMenu)
   }

   const handleMenuBtn2 = ()=>{
    setselectMenu(!selectMenu);
   }
  return <nav >
    <div className="Logo-container">
        <div className="Logo-text"> <Link to="/" className="Luke" onClick={()=> setselectedTab("Home")}>Luke  </Link></div>
        <div className="Logo-dot"></div>
    </div>
    <TiThMenu className="menu-icon" onClick={handleMenuBtn} />
      <ul className={` ${selectMenu ? 'navMenu-container' : ''}`}>
      <TiThMenu className="menu-icon" onClick={handleMenuBtn2} />
      <Link to="/" className={`NavBar-item ${selectedTab === "Home" ? 'underline' : ''}`}
      onClick={()=> setselectedTab("Home")} 
      > <li>Home</li> </Link>
      <Link to="Services" className={`NavBar-item ${selectedTab === "Services" ? 'underline' : ''}`}  
    onClick={()=> setselectedTab("Services")}>  <li>Services</li> </Link>
      <Link to="Resume" className={`NavBar-item ${selectedTab === "Resume" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Resume")}
    > <li>Resume</li></Link> 
      <Link to="Work" className={`NavBar-item ${selectedTab === "Work" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Work")} 
    >  <li>Work</li> </Link>
      <Link to="Contact" className={`NavBar-item ${selectedTab === "Contact" ? 'underline' : ''}`} 
    onClick={()=> setselectedTab("Contact")}
    >  <li>Contact</li> </Link>
        <button>Hire me</button>
      </ul>
      
  </nav> 
} 
export default Header;