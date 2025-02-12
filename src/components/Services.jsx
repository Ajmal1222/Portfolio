import { GoArrowDownRight } from "react-icons/go";
const Services = ()=>{
  return<>
    <div className="services-container">
      <div className="firstRowcontainer">
        <div className="service-container">
          <div className="project-name-container">
            <div>
              <span className="Project-number">01</span>
            </div>
            <div className="arrowcontainer">
                <GoArrowDownRight className="arrow-icon"/>
            </div>
          </div>
          <span className="Project-name">Web Development</span>
          <span className="Project-discription">I am a web developer passionate about crafting modern, responsive, and user-friendly websites using the latest technologies and best practices.</span>
        </div>
        <div className="service-container">
        <div className="project-name-container">
            <div>
              <span className="Project-number">02</span>
            </div>
            <div className="arrowcontainer">
                <GoArrowDownRight className="arrow-icon"/>
            </div>
          </div>
          <span className="Project-name">Web Designing</span>
          <span className="Project-discription">I am a web designer specializing in creating intuitive, user-centered designs that enhance user experiences and align with business goals</span>
        </div>
      </div>
      <div className="firstRowcontainer">
        <div className="service-container">
        <div className="project-name-container">
            <div>
              <span className="Project-number">03</span>
            </div>
            <div className="arrowcontainer">
                <GoArrowDownRight className="arrow-icon"/>
            </div>
          </div>
          <span className="Project-name">SEO</span>
          <span className="Project-discription"> I specialize in optimizing websites to improve search engine rankings, increase organic traffic, and enhance online visibility.</span>
        </div>
        <div className="service-container">
        <div className="project-name-container">
            <div>
              <span className="Project-number">04</span>
            </div>
            <div className="arrowcontainer">
                <GoArrowDownRight className="arrow-icon"/>
            </div>
          </div>
          <span className="Project-name">WordPress Developer</span>
          <span className="Project-discription">I am a web developer passionate about crafting modern,  responsive, and user-friendly websites using the latest  technologies and best practices.</span>
        </div>
      </div>

    </div>
  </>
}
export  default Services;