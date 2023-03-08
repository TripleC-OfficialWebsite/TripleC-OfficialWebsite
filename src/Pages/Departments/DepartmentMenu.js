import DepartmentJson from "../../Content/departments.json";
import "./DepartmentMenu.css";
import { HashLink as Link } from "react-router-hash-link";

const DepartmentMenu = () => {
  return (
    <div id="departmentMenuContainer">
      {Object.keys(DepartmentJson).map((element) => {
        return (
          <h5 className="link" key={element}>
            <Link to={`/departments#${element}`}>{element}</Link>
          </h5>
        );
      })}
    </div>
  );
};

export default DepartmentMenu;
