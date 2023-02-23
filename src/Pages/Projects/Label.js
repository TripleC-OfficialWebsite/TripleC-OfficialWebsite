import "./Projects.css";
import projects from "../../Content/projects.json";

function Label(){
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
}

export default Label;