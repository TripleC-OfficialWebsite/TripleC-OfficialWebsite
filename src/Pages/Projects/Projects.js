import React, { useState } from "react";
import projects from "../../Content/projects.json";
import "./Projects.css";
// import members from "../../Components/MemberCard/MemberCard.js"
// members.js 的第 4 行报错，跑不起来，说让member card 的改
function App(props) {
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
              <div className="time_line">Timeline - {projects.GoalTritons.timeline}</div>
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
    else if(props.proName == "WeRide")
      return (
        <div>
          <div class="row">
            <div id="container_2">
                <div className="titles">

                <div className="project_name">{projects.WeRide.title}</div>
                <div className="time_line">Timeline - {projects.WeRide.timeline}</div>
                <div className="description">Descriptions:</div>
                <div className="description">{projects.WeRide.description}</div>
                <div className="team">Team</div>
                <div className="member_card"></div>

                </div>
            </div>
            <div class="column_pro">
                <img src={projects.WeRide.pictures[0]}width="450"height="300"></img>
                <div className="titles">
                  <div className="tech_stack">
                  </div>

                  <div className="padding"></div>

                  <div className="links">
                    <div className="subtitle_pro">Links</div>
                    <div>Repo: {projects.WeRide.links.repo}</div>
                  </div>

                  <div className="padding"></div>
                </div>
            </div>
          </div>
        </div>
    ) 
    else if(props.proName == "Defit")
      return (
        <div>
          <div class="row">
            <div id="container_2">
                <div className="titles">

                <div className="project_name">{projects.Defit.title}</div>
                <div className="time_line">Timeline - {projects.Defit.timeline}</div>
                <div className="description">Descriptions:</div>
                <div className="description">{projects.Defit.description}</div>
                <div className="team">Team</div>
                <div className="member_card"></div>

                </div>
            </div>
            <div class="column_pro">
                <img src={projects.Defit.pictures[0]}width="425"height="175"></img>
                <div className="titles">
                  <div className="tech_stack">
                  </div>

                  <div className="padding"></div>

                  <div className="links">
                    <div className="subtitle_pro">Links</div>
                    <div>Demo: {projects.Defit.links.demo}</div>
                  </div>

                  <div className="padding"></div>
                </div>
            </div>
          </div>
        </div>
    ) 
    else if(props.proName == "HousingDashboard")
    return (
      <div>
        <div class="row">
          <div id="container_2">
              <div className="titles">

              <div className="project_name">{projects.HousingDashboard.title}</div>
              <div className="time_line">Timeline - {projects.HousingDashboard.timeline}</div>
              <div className="description">Descriptions:</div>
              <div className="description">{projects.HousingDashboard.description}</div>
              <div className="team">Team</div>
              <div className="member_card"></div>

              </div>
          </div>
          <div class="column_pro">
              <img src={projects.HousingDashboard.pictures[0]}width="450"height="300"></img>
              <div className="titles">
                <div className="tech_stack">
                  <div className="subtitle_pro">Tech Stack</div>
                  <div>{projects.HousingDashboard.techStack[0]}</div>
                  <div>{projects.HousingDashboard.techStack[1]}</div>
                  <div>{projects.HousingDashboard.techStack[2]}</div>
                  <div>{projects.HousingDashboard.techStack[3]}</div>
                  <div>{projects.HousingDashboard.techStack[4]}</div>
                </div>

                <div className="padding"></div>

                <div className="links">
                  <div className="subtitle_pro">Links</div>
                  <div>Demo: {projects.HousingDashboard.links.demo}</div>
                  <div>Repo: {projects.HousingDashboard.links.repo}</div>
                </div>

                <div className="padding"></div>
              </div>
          </div>
        </div>
      </div>
    ) 
}

export default App;