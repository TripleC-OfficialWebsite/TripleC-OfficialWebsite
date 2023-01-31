import './Home.css'
import logo from '../../Images/logo.png'
import Welcome from '../../Components/Welcome/Welcome'
import Timeline from '../../Components/Timeline/Timeline'
import Featured from "../../Components/featured-project/Featured";
import Photo_Album from '../../Components/photoAlbum/photoAlbum'

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Welcome />
      <Featured />
      <Timeline />
      <Photo_Album />
    </div>
  )
}

export default Home
