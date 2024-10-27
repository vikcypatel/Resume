import React, { useState,useEffect } from 'react'

// import project data
import {projectsData} from '../data'

// import project nav data
import { projectsNav } from '../data'

// import components
import Project from './Project'

function Projects() {
  const [item, setItem] = useState({name:'all'});
  const [projects, setProjects] = useState([]);
  const [active,  setActive] = useState(0);
  useEffect(()=>{
    // get project based on projects
    if(item.name=== 'all') {
      setProjects(projectsData);
    }else{
      const newPrjects = projectsData.filter(
        (project) => {
            return project.category.toLocaleLowerCase() === item.name;
        });
        setProjects(newPrjects);
    }
  },[item]);

const handleClick = (e,index) => {
  setItem({name: e.target.textContent.toLocaleLowerCase()})
  setActive(index);
}
  return (
    <div>
      {/* Nav */}
      <nav className='mb-12 max-w-xl mx-auto'>
        <ul className='flex flex-col md:flex-row justify-evenly items-center text-white'>
          {projectsNav.map((item,index)=>{
            return <li onClick={(e) => {
              handleClick(e, index);
            }} className ={`${active === index ?'active': ''} cursor-pointer capitalize m-4  `} key={index}>{item.name}</li>
          })}
        </ul>
      </nav>
      {/* project grid */}
      <section className='grid lg:grid-cols-3 gap-y-12 lg:gap-x-12 lg:gap-y-8'>
        {projects.map((item) => {
            return <Project item={item} key={item.id}/>
        })}
      </section>
    </div>
  )
}

export default Projects