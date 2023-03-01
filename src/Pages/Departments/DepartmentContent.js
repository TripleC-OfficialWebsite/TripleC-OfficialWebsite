import DepartmentJson from "../../Content/departments.json";
import DepartmentMembers from "./DepartmentMembers";
import "./DepartmentContent.css";

const DepartmentContent = () => {
  return (
    <div id="departmentContentContainer">
      {Object.keys(DepartmentJson).map((element) => {
        return (
          <div id={element}>
            <h3>{DepartmentJson[element].title}</h3>
            <p>{DepartmentJson[element].description}</p>
            <DepartmentMembers department={element} />
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentContent;
