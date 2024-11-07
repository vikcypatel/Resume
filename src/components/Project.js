import React from 'react';


const Project = ({ item }) => {
  return (
    <div className="project-card flex flex-col items-center text-center">
      <div className="project-image-wrapper relative mb-8">
        <img src={item.image} className="rounded-2xl project-image" alt="" />
        <div className="project-overlay absolute inset-0 flex flex-col justify-end p-4">
          <h3 className="text-2xl font-semibold capitalize fade-in-bottom text-white">
            {item.name}
          </h3>
        </div>
      </div>
      <p className="capitalize text-accent text-sm mb-3">{item.category}</p>
    </div>
  );
};

export default Project;
