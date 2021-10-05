import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='name'>
        <h1>Niyas Haneef</h1>
      </div>
      <div className='links'>
        <a href='https://www.linkedin.com/in/niyas-haneef-60183a8/'>
          <AiFillLinkedin />
        </a>
        <br />
        <div className="copy">
        &copy; Niyas Haneef
        </div>
      </div>
    </div>
  )
}

export default Footer
