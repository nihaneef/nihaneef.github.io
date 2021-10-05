import { ReactChildren } from 'react'
import { IconType } from 'react-icons'
import Bounce from 'react-reveal/Bounce'

interface Props {
  children?: ReactChildren
  color?: string
  title: string
  Icon: IconType
}
const SkillCard = ({ children, title, Icon, color }: Props) => {
  return (
    <Bounce top>
      <div className='card'>
        <h1 className='card-title'>{title ? title : ''}</h1>
        {children}
        <div className='card-icon'>
          <Icon style={{ color: `${color && color}` }} className='animate__animated animate__tada'/>
        </div>
      </div>
    </Bounce>
  )
}

export default SkillCard
