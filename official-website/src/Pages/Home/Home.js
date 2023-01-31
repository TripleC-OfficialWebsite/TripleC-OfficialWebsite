import './Home.css'
import logo from '../../Images/logo.png'
import Welcome from '../../Components/Welcome/Welcome'
import Timeline from '../../Components/Timeline/Timeline'
import Photo_Album from '../../Components/photoAlbum/photoAlbum'

const Home = () => {
  return (
    <div style={{ position: 'relative' }}>
      <Welcome />
      <Timeline />
      <Photo_Album />
    </div>
  )
}

export default Home
