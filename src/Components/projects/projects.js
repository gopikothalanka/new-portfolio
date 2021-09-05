import React from 'react'
import './project.css'
import { details} from './projects-data.js';


export default function projects() {
  const item =details.map(({photoUrl,title,viewCode,viewProject},index)=>{
    return(
      <div className="item" key={index}>
      <img src={photoUrl} alt={title}  />
      <div className="details">
        <h2>{title} </h2>
        <ul>
          <li><a href={viewCode}>view code</a></li>
          <li><a href={viewProject}>view project</a></li>
        </ul>
      </div>
     </div>
    )

  })
  
  return (
    <div className="projects" id="projects" >
      <h1>Projects</h1>
   
      <div className="warp">
      {item}
      </div>

    </div>
  )
}
