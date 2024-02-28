import { useEffect, useState } from 'react'

export default function FrontProject (props) {

  const page = props.nowPage.projects


  const projectsRendering = page.map((x) => {
    return <div className={x.active == true ? "box active" : "box"} key={x.id}>
      <img src={x.img}/>
      <h4>{x.name}</h4>
      <p>{x.title}</p>
    </div>
  })

  return(
    <div className='projectsHolder'> 
      {projectsRendering}
    </div>
  )
}



