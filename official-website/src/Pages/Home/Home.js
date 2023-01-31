import './Home.css'
import logo from '../../Images/logo.png'
import Welcome from '../../Components/Welcome/Welcome'
import Timeline from '../../Components/Timeline/Timeline'
const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Welcome />
      <Timeline />
    </div>
  )
}

export default Home
