import { BsArrowUpRight } from "react-icons/bs";
import { TiHeadphones } from "react-icons/ti";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";


const Project1 = ({project, setproject})=>{
  return <>
  <div className="work-container">
    <div className="left-work-container">
    <span class="Project-number">01</span>
    <span class="Project-name">Mayantra Clone</span>
    <span class="Project-discription">This is a Mayantra-inspired eCommerce website clone built using React. <br></br> It features a modern UI/UX, responsive design, dynamic product listings, <br/>and smooth navigation. Users can easily browse and <br/> purchase their favorite products.</span>
    <span class="Language-used">Html 5 ,  Css 3,  Javascript,   React</span>
    <div className="work-icon-cotainer">
    <span > <BsArrowUpRight className="arrow-icon"/></span>
    <span> <TiHeadphones className="arrow-icon" /></span>


    </div>
    </div>
    <div className="right-work-container">
      <img src="/images/4.png" alt="Mockup website" className="mockup" />
      <div className="right-work-container-icons">
        <span onClick={()=> {setproject(project--)}
          }><FaAngleLeft className="right-arrow-icon" /></span>
        <span  onClick={()=> {setproject(project++)
            if(project>2){
              project =1;
            }
          }
        }
        ><FaAngleRight className="right-arrow-icon"/></span>
      </div>

    </div>
  </div>
  </>
}
export default Project1;