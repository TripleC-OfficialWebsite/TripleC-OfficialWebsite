import React, { useState, useEffect } from 'react';
import LabelJson from "../../Content/projects.json";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("../../Content/projects.json")
      .then(response => response.json())
      .then(data => setProjects(Object.values(data)))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      {projects.map(project => (
        <div key={project.title}>
          <h2>{project.title}</h2>
          <p>Timeline: {project.timeline}</p>
          <p>{project.description}</p>
          <h3>Tech Stack:</h3>
          <ul>
            {project.techStack.map(tech => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
          <h3>Pictures:</h3>
          <ul>
            {project.pictures.map(picture => (
              <li key={picture }><img src={picture } alt={ project.title } /></li>
            ))}
          </ul>
          <h3>Links:</h3>
          <ul>
            <li><a href={project.links.demo}>Demo</a></li>
            <li><a href={project.links.repo}>Repository</a></li>
            <li><a href={project.links.contact}>Contact</a></li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Projects;