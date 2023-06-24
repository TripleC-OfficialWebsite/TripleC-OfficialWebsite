import DepartmentJson from "../../Content/departments.json";
import "./DepartmentMenu.css";
import { HashLink as Link } from "react-router-hash-link";

const DepartmentMenu = (props) => {
  return (
    <div id="departmentMenuContainer">
      {Object.keys(DepartmentJson).map((element) => {
        return element === props.curMenu ? (
          <h5 className="link curmenu" key={element}>
            <Link to={`/departments#${element}`} className="departmentLink">
              <div>{DepartmentJson[element].title}</div>
            </Link>
          </h5>
        ) : (
          <h5 className="link" key={element}>
            <Link
              to={`/departments#${element}`}
              className="departmentLink"
              onClick={() => props.setCurMenu(element)}
            >
              <div>{DepartmentJson[element].title}</div>
            </Link>
          </h5>
        );
      })}
    </div>
  );
};

export default DepartmentMenu;
