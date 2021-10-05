import Divider from '../Divider'
import SkillCard from '../SkillCard'
import {
  SiKubernetes,
  SiDocker,
  SiMicrosoftazure,
  SiAzuredevops,
  // SiJenkins,
  SiCitrix,
  SiAmazonaws,
  SiGithub,
  SiWindows
} from 'react-icons/si'
import {GrVmware} from 'react-icons/gr'
import { VscJson } from 'react-icons/vsc'

const Skills = () => {
  const skills = [
    {
      title: 'Kubernetes',
      icon: SiKubernetes,
      color: '#326DE6',
    },
    {
      title: 'Docker',
      icon: SiDocker,
      color: '#2496ED',
    },
    {
      title: 'Microsoft Azure',
      icon: SiMicrosoftazure,
      color: '#1461B5',
    },
    {
      title: 'AWS',
      icon: SiAmazonaws,
      color: 'orange',
    },
    {
      title: 'Azure Devops',
      icon: SiAzuredevops,
      color: '#1461B5',
    },
    {
      title: 'Git and GitHub',
      icon: SiGithub,
      color: 'black',
    },
    {
      title: 'Windows Server',
      icon: SiWindows,
      color: 'blue',
    },
    {
      title: 'Vmware',
      icon: GrVmware,
      color: 'black',
    },
    // {
    //   title: 'Jenkins',
    //   icon: SiJenkins,
    // },
    {
      title: 'JSON & YAML',
      icon: VscJson,
      color: 'yellow',
    },
    {
      title: 'Citrix',
      icon: SiCitrix,
    },
  ]
  return (
    <section className='skills' id='skills'>
      <Divider />
      <h1 className='section-title animate__lightSpeedInLeft animate__animated'>
        Skills
      </h1>
      <div className='cards'>
        {skills.map((skill, index) => (
          <SkillCard
            title={skill.title}
            Icon={skill.icon}
            key={index}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  )
}

export default Skills
