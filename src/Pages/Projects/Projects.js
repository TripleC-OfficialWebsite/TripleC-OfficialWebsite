import React, { useState } from "react";
import projects from "../../Content/projects.json";
import "./Projects.css";

function App(props) {
  const project = projects[props.proName];
  const pictures = project.pictures;
  const techStack = project.techStack;

  return (
    <div>
      <div class="row">
        <div id="container_2">
            <div className="titles">

            <div className="project_name">{project.title}</div>
            <div className="time_line">Timeline - {project.timeline}</div>
            <div className="description">Descriptions:</div>
            <div className="description">{project.description}</div>
            <div className="team">Team</div>
            <div className="member_card"></div>

            </div>
        </div>
        <div class="column_pro">
            <div className="img-container">
              <ul>
                {pictures.map((picture) => (
                  <li key={picture.id}><img src={picture} alt={props.proName} className="image"></img></li>
                ))}
              </ul>
            </div>
            <div className="titles">
              <div className="tech_stack">
                <div className="subtitle_pro">Tech Stack</div>
                <ul>
                    {techStack.map((tech) => (
                      <li key={tech.id}>{tech}</li>
                    ))}
                </ul>
              </div>

              <div className="padding"></div>

              <div className="links">
                <div className="subtitle_pro">Links</div>
                <div>Demo: {projects.GoalTritons.links.demo}</div>
                <div>Contact: {projects.GoalTritons.links.contact}</div>
              </div>

              <div className="padding"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;