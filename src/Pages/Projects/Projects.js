import React, { useState } from "react";
import projects from "../../Content/projects.json";
import Label from "./Label";
import MapSocial from "./MapSocial";

function App(props) {
  // const [selectedProject, setSelectedProject] = useState("");

  // function handleChange(event) {
  //   setSelectedProject(event.target.value);
  // }

  function handleProPage(proName) {
    switch(proName) {
      case "Label":
        return <Label />

      // MapSocial
      default :
        return <MapSocial />;
    }
  }

  return (
    <div>
      <h1 style={{color: 'red'}}>{props.proName}</h1>  {/* test props */}
      <>{handleProPage(props.proName)}</>

      {/* <select onChange={handleChange}>
        {Object.entries(projects).map(([id, project]) => (
          <option key={id} value={id}>
            {project.name}
          </option>
        ))}
      </select>
      {selectedProject && (
        <div>
          <h1>{projects[selectedProject].name}</h1>
          <p>{projects[selectedProject].description}</p>
        </div>
      )} */}
    </div>
  );
}

export default App;