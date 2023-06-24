import { useState } from "react";
import "./Department.css";
import DepartmentContent from "./DepartmentContent";
import DepartmentMenu from "./DepartmentMenu";

const Departments = () => {
  const [curMenu, setCurMenu] = useState("President");

  return (
    <div id="departmentContainer">
      <DepartmentMenu curMenu={curMenu} setCurMenu={setCurMenu} />
      <DepartmentContent setCurMenu={setCurMenu} />
    </div>
  );
};

export default Departments;
