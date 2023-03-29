import Card from '../../Components/MemberCard/MemberCard'
import './CardsContainer.css'

const CardsContainer = ({members}) => {
    return(
        <div className='memberCards'>
            {members.map((element) => (
                <div className='card'>
                    <Card member={element} key={element.英文全名}/>
                </div>
                ))}
        </div>
    );
}
export default CardsContainer;
