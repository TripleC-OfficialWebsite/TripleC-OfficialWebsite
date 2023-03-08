import MemberCardJson from '../../Content/members.json'
import MemberCards from './CardsContainer'

const members = MemberCardJson.Members;
// console.log(members[0].英文全名);
const DepartmentMembers = (props) => {
  const department = props.department;
  const currDepMembers = members.filter(member => ((member.所属部门===department) && (!member.职位.includes("Chair"))));
  const chairs = members.filter(member => ((member.所属部门===department) && (member.职位.includes("Chair"))));
  currDepMembers.sort(compare); // sort members by Last Name
  chairs.forEach(member => currDepMembers.unshift(member)); // Chairs at front 
  // const currMembersNames = currDepMembers.map(member => member.英文全名); // only for testing
  return (
      <MemberCards members={currDepMembers}/>
  );
};

function compare(a, b) {
  a = (a.英文全名).split(' ').slice(-1);
  b = (b.英文全名).split(' ').slice(-1);
  if (a === b) 
       return 0;
  return a < b ? -1 : 1;
}
export default DepartmentMembers;
