import { FC } from 'react'
import { Zoom } from 'react-reveal'

interface Props {
  image?: string
  title: string
  link: string
}

const CertCard: FC<Props> = ({ title, image, link }) => {
  return (
    <Zoom>
      <div className='cert-card'>
        {image && (
          <img src={image} alt='Certification' width='200px' height='200px' />
        )}
        <p>{title}</p>
        <a href={link}>
          <button>View on Credly</button>
        </a>
      </div>
    </Zoom>
  )
}

export default CertCard
