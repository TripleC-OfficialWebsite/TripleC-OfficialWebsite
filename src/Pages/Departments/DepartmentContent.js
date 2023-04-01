import _, { debounce } from "lodash";
import { useEffect } from "react";
import DepartmentJson from "../../Content/departments.json";
import DepartmentMembers from "./DepartmentMembers";
import "./DepartmentContent.css";

const DepartmentContent = (props) => {
  const data = Object.keys(DepartmentJson);

  const changeCurMenu = (item) => {
    props.setCurMenu(item);
    return true;
  };

  const myScrollHandler = debounce(() => {
    data.some((item) => {
      const target = document.getElementById(item);
      const bottom = target?.getBoundingClientRect().bottom - 50 || 0;
      return bottom >= 0 && bottom <= window.innerHeight && changeCurMenu(item);
    });
  }, 50);

  useEffect(() => {
    document.addEventListener("scroll", myScrollHandler);
    return () => document.removeEventListener("scroll", myScrollHandler);
  }, [data]);

  return (
    <div id="departmentContentContainer">
      {data.map((element) => {
        return (
          <div className="departments" id={element} key={element}>
            <h3 className="departmentTitle">{DepartmentJson[element].title}</h3>
            <p className="departmentDes">
              {DepartmentJson[element].description}
            </p>
            <DepartmentMembers department={element} />
          </div>
        );
      })}
    </div>
  );
};

export default DepartmentContent;
