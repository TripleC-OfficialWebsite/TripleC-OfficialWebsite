import "./Projects.css";
import projects from "../../Content/projects.json";

function MapSocial(){
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
}

export default MapSocial;