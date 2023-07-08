import MemberCardJson from '../../Content/members.json'
import MemberCards from './CardsContainer'
import React, { useState, useEffect } from 'react';


// const members = MemberCardJson.Members;
// // console.log(members[0].英文全名);
// const DepartmentMembers = (props) => {
//   const department = props.department;
//   const currDepMembers = members.filter(member => ((member.所属部门===department) && (!member.职位.includes("Chair"))));
//   const chairs = members.filter(member => ((member.所属部门===department) && (member.职位.includes("Chair"))));
//   currDepMembers.sort(compare); // sort members by Last Name
//   chairs.forEach(member => currDepMembers.unshift(member)); // Chairs at front 
//   // const currMembersNames = currDepMembers.map(member => member.英文全名); // only for testing
//   return (
//       <MemberCards members={currDepMembers}/>
//   );
// };

// function compare(a, b) {
//   a = (a.英文全名).split(' ').slice(-1);
//   b = (b.英文全名).split(' ').slice(-1);
//   if (a === b) 
//        return 0;
//   return a < b ? -1 : 1;
// }
// export default DepartmentMembers;

const DepartmentMembers = ({department}) => {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    fetch('https://best-backend-ever.herokuapp.com/mem/member')
      .then(response => response.json())
      .then(data => {
        const currDepMembers = data.filter(member => member.department[department] && !member.department[department].includes("Chair"));
        const chairs = data.filter(member => member.department[department] === "Chair");
        
        currDepMembers.sort(compare); // sort members by Last Name
        chairs.forEach(member => currDepMembers.unshift(member)); // Chairs at front 

        setMembers(currDepMembers); // update state with new members list
      })
      .catch(err => console.error(err));
  }, [department]); // useEffect will run when 'department' changes

  function compare(a, b) {
    a = (a.fullname).split(' ').slice(-1);
    b = (b.fullname).split(' ').slice(-1);
    if (a === b) 
      return 0;
    return a < b ? -1 : 1;
  }

  return (
    <MemberCards members={members} />
  );
};

export default DepartmentMembers;

