import Logo from './Logo'
import './Welcome.css'
import welcomeJson from '../../Content/home.json'

const Welcome = () => {
  return (
    <div>
      <div className='home-cover'></div>
      <div id='container'>
        <Logo />
        <div className='titles'>
          <h1 className='title'>{welcomeJson.welcome.title}</h1>
          <h2 className='subtitle'>{welcomeJson.welcome.subtitle}</h2>
        </div>
      </div>
    </div>
  )
}

export default Welcome
