import { Link } from "react-router-dom";

const Logo = ({selectedTab, setselectedTab})=>{
return <div className="Logo">
    
          <div className="Logo-text"> <Link to="/" className="Luke" onClick={()=> setselectedTab("Home")}>Luke  </Link></div>
          <div className="Logo-dot"></div>
   
      </div>
}
export default Logo;