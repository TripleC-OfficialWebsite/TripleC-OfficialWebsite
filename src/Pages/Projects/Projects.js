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
      </div>
    )
  else if(props.proName == "MapSocial")
    return (
      <div>
          <div id="container_2">
              <div className="titles">
                <div className="project_name">{projects.MapSocial.title}</div>
                <div className="time_line">Timeline</div>
                <img src={projects.MapSocial.timeline}width="700"height="150"></img>
                <div className="description">Descriptions:</div>
                <div className="description">{projects.MapSocial.description}</div>
                <div className="team">Team</div>
                <div className="member_card"></div>
              </div>
          </div>
      </div>
    )
  else if(props.proName == "GoalTritons")
    return (
      <div>
          <div id="container_2">
              <div className="titles">

              <div className="project_name">{projects.GoalTritons.title}</div>
              <div className="time_line">Timeline</div>
              <img src={projects.GoalTritons.timeline}width="700"height="150"></img>
              <div className="description">Descriptions:</div>
              <div className="description">{projects.GoalTritons.description}</div>
              <div className="team">Team</div>
              <div className="member_card"></div>

              </div>
          </div>
      </div>
    ) 
}

export default App;