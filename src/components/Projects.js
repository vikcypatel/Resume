import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import { projectsData } from '../data'; // Import project data
import { projectsNav } from '../data'; // Import project navigation data
import Project from './Project';
import 'animate.css'; // Import animate.css for animations

function Projects() {
  const [item, setItem] = useState({ name: 'all' });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const filteredProjects = projectsData.filter(
        (project) => project.category.toLocaleLowerCase() === item.name
      );
      setProjects(filteredProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent.toLocaleLowerCase() });
    setActive(index);
  };

  return (
    <div>
      {/* Nav */}
      <nav className="mb-12 max-w-xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-evenly items-center text-white">
          {projectsNav.map((item, index) => {
            return (
              <NavWithAnimation
                key={index}
                index={index}
                active={active}
                handleClick={handleClick}
                item={item}
              />
            );
          })}
        </ul>
      </nav>

      {/* Project Grid */}
      <section className="grid lg:grid-cols-3 gap-y-12 lg:gap-x-12 lg:gap-y-8">
        {projects.map((item, index) => {
          return (
            <div key={item.id} className="project-item">
              <ProjectWithAnimation item={item} index={index} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

// Nav Component with Intersection Observer for fadeInLeft animation
const NavWithAnimation = ({ item, index, active, handleClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Trigger animation when 30% of the element is in view
  });

  return (
    <li
      ref={ref}
      onClick={(e) => handleClick(e, index)}
      className={`cursor-pointer capitalize m-4 ${inView ? 'animate__animated animate__fadeInLeft' : ''} ${active === index ? 'active' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each nav item
    >
      {item.name}
    </li>
  );
};

// Project Component with Intersection Observer for fadeInBottom animation
const ProjectWithAnimation = ({ item, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only animate once
    threshold: 0.3, // Trigger animation when 30% of the project is in view
  });

  return (
    <div
      ref={ref}
      className={`animate__animated ${inView ? 'animate__fadeInUp' : ''}`} // fadeInBottom effect with fadeInUp as fallback
      style={{ animationDelay: `${index * 0.1}s` }} // Staggered delay for each project
    >
      {inView && <Project item={item} />} {/* Only show project after animation starts */}
    </div>
  );
};

export default Projects;
