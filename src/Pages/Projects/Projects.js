import React, { useState, useEffect } from "react";
import MemberCard from "../../Components/MemberCard/MemberCard";
// import projects from "../../Content/projects.json";
// import member from "../../Content/members.json";
// import jsonPath from "jsonpath";
import "./Projects.css";

function App(props) {

  const [memInfo, setMembers] = useState([]);
  const [project, setProject] = useState({});
  const [links, setLinks] = useState({});
  const [techStack, settechStack] = useState([]);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    //Get Project Info
    const fetchProject = async () => {
      try {
        const response_project = await fetch(
          `https://best-backend-ever.herokuapp.com/pro/project/${encodeURIComponent(props.proName)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }  
        );

        const data = await response_project.json();
    
        if (!response_project.ok) {
          throw new Error(data.error.message);
        }

        setProject(data[0]);
        settechStack(data[0].techStack);
        setLinks(data[0].links);
    
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    //-------------------------------------------------------------------------------------------
    //Get Project members
    const proName = props.proName.replace(/\s/g, ""); //remove space in between
    console.log(`https://best-backend-ever.herokuapp.com/mem/member_filter/all/${proName}`);
    const fetchMembers = async () => {
      try {
        const response_other = await fetch(
          `https://best-backend-ever.herokuapp.com/mem/member_filter/all/${proName}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response_other.json();

        if (!response_other.ok) {
          throw new Error(data.error.message);
        }

        setMembers(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    //-------------------------------------------------------------------------------------------
    //Get Project Image Url.
    const fetchPictures = async () => {
      try {
        const response_project = await fetch(
          `https://best-backend-ever.herokuapp.com/pro/project_photo/${encodeURIComponent(props.proName)}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }  
        );

        const data = await response_project.json();
    
        if (!response_project.ok) {
          throw new Error(data.error.message);
        }

        const imageUrl = data.map((url) => Object.values(url)[0]);
        setPictures(imageUrl);
    
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };

    fetchProject();
    fetchMembers();
    fetchPictures();
  }, [props.proName]);

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

          {(links.demo ||
            links.repo ||
            links.contact) && (
            <div className="links">
              <div className="subtitle_pro">Links</div>
              {links.demo && (
                <div>
                  <strong>Demo</strong>:{" "}
                  <a target="_blank" rel="noreferrer" href={links.demo}>
                    {links.demo}
                  </a>
                </div>
              )}
              {links.repo && (
                <div>
                  <strong>Repo</strong>:{" "}
                  <a target="_blank" rel="noreferrer" href={links.repo}>
                    {links.repo}
                  </a>
                </div>
              )}
              {links.contact && (
                <div>
                  <strong>Contact</strong>: {links.contact}
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
