import React, { useState } from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import projects from "../../Content/projects.json";
import member from "../../Content/members.json";
import jsonPath from 'jsonpath';
import "./Projects.css";

function App(props) {
  const project = projects[props.proName];
  // const expression = `$..[?(@.所属项目组 == "${props.proName}")]`;
  const pictures = project.pictures;
  const techStack = project.techStack;
  // const memberJSON = member;
  // const data = [
  //     {
  //       "make": "Toyota",
  //       "model": "Camry",
  //       "year": 2018
  //     },
  //     {
  //       "make": "Honda",
  //       "model": "Accord",
  //       "year": 2019
  //     }
  // ];
  // const num = 2019;
  // const newerCars = jsonPath.query(data, `$..[?(@.year == "${num}")]`);
  // Output: [{"make": "Honda", "model": "Accord", "year": 2019}]
  // const memInfo = jsonPath.query(member, `$..[?(@.所属项目组 == "Label")]`);
  const memInfo = jsonPath.query(member, `$..[?(@.所属项目组 == "${props.proName}")]`);

  return (
    <div>
      <div class="row">
        <div id="container_2">
            <div className="titles">
              <div className="project_name">{project.title}</div>
              <div className="time_line">Timeline 
                <img src={project.timeline} className="time_line_img"></img>
              </div>
              <div className="description">Descriptions:</div>
              <div className="description">{project.description}</div>
              <div className="team">Team</div>
              <div>{memInfo.length}</div> {/* number of members */}
              <div className="member_card"><MemberCard memInfo={memInfo}/></div>
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
                <div>Demo: {project.links.demo}</div>
                <div>Contact: {project.links.contact}</div>
              </div>

              <div className="padding"></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App;