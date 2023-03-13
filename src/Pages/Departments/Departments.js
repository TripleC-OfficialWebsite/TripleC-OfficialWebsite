import "./Department.css";
import DepartmentContent from "./DepartmentContent";
import DepartmentMenu from "./DepartmentMenu";

const Departments = () => {
  return (
    <div id="departmentContainer">
      <DepartmentMenu />
      <DepartmentContent />
    </div>
  );
};

export default Departments;
