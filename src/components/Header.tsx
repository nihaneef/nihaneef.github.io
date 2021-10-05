// import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ul className='header'>
      <li>
        <a href='/#'>About</a>
      </li>
      <li>
        <a href='/#skills'>Skills</a>
      </li>
      <li>
        <a href='/#certs'>Certifications</a>
      </li>
      {/* <li>
      <Link to='/about'>
        <a>About me</a>
      </Link>
      </li> */}
    </ul>
  )
}

export default Header
