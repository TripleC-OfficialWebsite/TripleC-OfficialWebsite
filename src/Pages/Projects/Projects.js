import React, { useState } from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
import projects from "../../Content/projects.json";
import member from "../../Content/members.json";
import jsonPath from "jsonpath";
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
  const memInfo = jsonPath.query(
    member,
    `$..[?(/${props.proName}/.test(@.所属项目组))]`
  );
  console.log(memInfo);

  return (
    <div>
      <div class="col">
        <div className="titles">
          <div className="project_name">{project.title}</div>
          {project.slogan && <div className="slogan">{project.slogan}</div>}

          <div className="img-container">
            <ul>
              {pictures.map((picture) => (
                <li className="imgItem" key={picture.id}>
                  <img
                    src={picture}
                    alt={props.proName}
                    className="image"
                  ></img>
                </li>
              ))}
            </ul>
          </div>
          {project.timeline && (
            <div className="time_line">
              <div className="subtitle_pro">Timeline</div>
              <img
                src={project.timeline}
                className="time_line_img"
                alt="projImg"
              ></img>
            </div>
          )}

          <div className="subtitle_pro">Descriptions:</div>
          <div className="description">{project.description}</div>
          <div className="subtitle_pro">Team</div>
          <div className="team">
            {memInfo.map((member) => (
              <div className="member_card">
                <MemberCard member={member} page="project" />
              </div>
            ))}
          </div>
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

          {(project.links.demo ||
            project.links.repo ||
            project.links.contact) && (
            <div className="links">
              <div className="subtitle_pro">Links</div>
              {project.links.demo && (
                <div>
                  <strong>Demo</strong>:{" "}
                  <a target="_blank" rel="noreferrer" href={project.links.demo}>
                    {project.links.demo}
                  </a>
                </div>
              )}
              {project.links.repo && (
                <div>
                  <strong>Repo</strong>:{" "}
                  <a target="_blank" rel="noreferrer" href={project.links.repo}>
                    {project.links.repo}
                  </a>
                </div>
              )}
              {project.links.contact && (
                <div>
                  <strong>Contact</strong>: {project.links.contact}
                </div>
              )}
            </div>
          )}

          <div className="padding"></div>
        </div>

        <div className="padding"></div>
      </div>
    </div>
  );
}

export default App;
