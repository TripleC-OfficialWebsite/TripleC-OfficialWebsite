import React, { useState } from "react";
import projects from "../../Content/projects.json";
import "./Projects.css";

function App(props) {
  // 每个project对应一个js file
  // function handleProPage(proName) {
  //   switch(proName) {
  //     case "Label":
  //       return <Label />

  //     // MapSocial
  //     default :
  //       return <MapSocial />;
  //   }
  // }

  // return (
  //   <div>
  //     <h1 style={{color: 'red'}}>{props.proName}</h1>  {/* test props */}
  //     <>{handleProPage(props.proName)}</>
  // );

  // 每个project都在Projects.js里面渲染
  if(props.proName == "Label")
    return (
      <div>
        <div class="row">
          <div id="container_2">
              <div className="titles">
              <div className="project_name">{projects.Label.title}</div>
              <div className="time_line">Timeline - {projects.Label.timeline}</div>
              <div className="description">Descriptions:</div>
              <div className="description">{projects.Label.description}</div>
              <div className="team">Team</div>
              <div className="member_card"></div>
              </div>
          </div>
          <div class="column">
              <div className="images">
              </div>
          </div>
        </div>
      </div>
    )
  else if(props.proName == "MapSocial")
    return (
      <div>
        <div class="row">
          <div id="container_2">
              <div className="titles">
                <div className="project_name">{projects.MapSocial.title}</div>
                <div className="time_line">Timeline</div>
                <img src={projects.MapSocial.timeline}width="600"height="150"></img>
                <div className="description">Descriptions:</div>
                <div className="description">{projects.MapSocial.description}</div>
                <div className="team">Team</div>
                <div className="member_card"></div>
              </div>
          </div>
          <div class="column_pro">
              <div className="images">
                <img src={projects.MapSocial.pictures[0]}width="150"height="300"></img>
                <img src={projects.MapSocial.pictures[1]}width="150"height="300"></img>
                <img src={projects.MapSocial.pictures[2]}width="150"height="300"></img>
              </div>
              <div className="titles">
                <div className="tech_stack">
                  <div className="subtitle_pro">Tech Stack</div>
                  <div>{projects.MapSocial.techStack[0]}</div>
                  <div>{projects.MapSocial.techStack[1]}</div>
                  <div>{projects.MapSocial.techStack[2]}</div>
                  <div>{projects.MapSocial.techStack[3]}</div>
                </div>
                <div className="links">
                  <div className="subtitle_pro">Links</div>
                  To be released
                </div>
              </div>
          </div>
        </div>
      </div>
    )
  else if(props.proName == "GoalTritons")
    return (
      <div>
        <div class="row">
          <div id="container_2">
              <div className="titles">

              <div className="project_name">{projects.GoalTritons.title}</div>
              <div className="time_line">Timeline - {projects.Label.timeline}</div>
              <div className="description">Descriptions:</div>
              <div className="description">{projects.GoalTritons.description}</div>
              <div className="team">Team</div>
              <div className="member_card"></div>

              </div>
          </div>
          <div class="column_pro">
              <img src={projects.GoalTritons.pictures[0]}width="450"height="300"></img>
              <div className="titles">
                <div className="tech_stack">
                  <div className="subtitle_pro">Tech Stack</div>
                  <div>{projects.GoalTritons.techStack[0]}</div>
                  <div>{projects.GoalTritons.techStack[1]}</div>
                  <div>{projects.GoalTritons.techStack[2]}</div>
                  <div>{projects.GoalTritons.techStack[3]}</div>
                  <div>{projects.GoalTritons.techStack[4]}</div>
                  <div>{projects.GoalTritons.techStack[5]}</div>
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