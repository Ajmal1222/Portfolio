import Project1 from "./Project1";
import { useState } from "react";
import Project2 from "./Project2";


const Work = ()=>{
  const [project,setproject] = useState(1)
  return <>
  {project === 1 ? <Project1 project={project} setproject={setproject}></Project1> : ''}
  {project === 2 ? <Project2 project={project} setproject={setproject}></Project2> : ''}
  
  </>
}
export default Work;