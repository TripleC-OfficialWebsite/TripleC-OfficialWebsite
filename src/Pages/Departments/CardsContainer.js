import Card from "../../Components/MemberCard/MemberCard";
import "./CardsContainer.css";

const CardsContainer = ({ members }) => {
  return (
    <div className="memberCards">
      {members.map((element) => (
        <div className="card">
          <Card member={element} page="department" key={element.英文全名} />
        </div>
      ))}
    </div>
  );
};
export default CardsContainer;

// import Card from "../../Components/MemberCard/MemberCard";
// import "./CardsContainer.css";

// const CardsContainer = ({ members }) => {
//   return (
//     <div className="memberCards">
//       {members.map((element) => (
//         <div className="card">
//           <Card member={element} page="department" key={element.fullname} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CardsContainer;
