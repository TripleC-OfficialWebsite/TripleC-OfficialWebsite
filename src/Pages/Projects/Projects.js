import React, { useState } from "react";
import projects from "../../Content/projects.json";

function App() {
  const [selectedProject, setSelectedProject] = useState("");

  function handleChange(event) {
    setSelectedProject(event.target.value);
  }

  return (
    <div>
      <select onChange={handleChange}>
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
      )}
    </div>
  );
}

export default App;