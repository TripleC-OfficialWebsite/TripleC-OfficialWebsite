import DepartmentJson from "../../Content/departments.json";
import "./DepartmentMenu.css";
import { HashLink as Link } from "react-router-hash-link";

const DepartmentMenu = () => {
  return (
    <div id="departmentMenuContainer">
      {Object.keys(DepartmentJson).map((element) => {
        return (
          <div>
            <Link to={`/departments#${element}`}>{element}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentMenu;
