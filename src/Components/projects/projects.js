import React from 'react'
import './project.css'
import { goods} from './projects-data.js';
import { map } from 'async';

export default function projects() {
  const item =goods.map(({photoUrl,title,viewCode,viewProject},index)=>{
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
