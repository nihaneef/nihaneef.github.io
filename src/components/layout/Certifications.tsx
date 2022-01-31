import CertCard from '../CertCard'
import Divider from '../Divider'

const Certifications = () => {
  const certs = [
    {
      image:
        'https://images.credly.com/size/680x680/images/285339cc-675a-4b1a-bdd9-283868af2fc8/EXAM-Expert-AZ-303-600x600.png',
      title: 'Azure Architect Technologies',
      link: 'https://www.credly.com/badges/d7e1a4a0-c2c4-41b4-a8f4-59e6aab86821',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/bfdff01e-a9dd-41fc-9301-8a90585c19bb/EXAM-Expert-AZ-304-600x600.png',
      title: 'Azure Architect Design',
      link: 'https://www.credly.com/badges/337a90b0-db54-4503-b3ee-d97290c2e479',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/8b8ed108-e77d-4396-ac59-2504583b9d54/cka_from_cncfsite__281_29.png',
      title: 'Certified Kubernetes Administrator',
      link: 'https://www.credly.com/badges/d3856a56-9b02-464d-8640-0618d1edf2dd',
    },
    {
      title: 'Azure Devops',
      link: 'https://www.credly.com/badges/c355d69e-f5b0-4209-85a5-55e8392f5013',
      image: 'https://images.credly.com/size/340x340/images/107e2eb6-f394-40eb-83d2-d8c9b7d34555/exam-az400-600x600.png'
    },
    {
     image:
        'https://images.credly.com/size/680x680/images/1ad16b6f-2c71-4a2e-ae74-ec69c4766039/azure-security-engineer-associate600x600.png',
      title: 'Azure Security Engineer',
      link: 'https://www.credly.com/badges/94051634-2a35-452d-ad6f-174bff665efb',
    },
    {
     image:
        'https://images.credly.com/size/680x680/images/c3a2e51d-7984-48cc-a4cb-88d4e8487037/azure-network-engineer-associate-600x600.pngg',
      title: 'Azure Network Engineer',
      link: 'https://www.credly.com/earner/earned/badge/5a055813-cace-4a74-8538-cda79de0f853',
    },
    {
      image:
        'https://badges.images.credential.net/1521044380812.png',
      title: 'Google Professional Cloud Architect',
      link: 'https://www.credential.net/960083d4-2edf-40df-b967-64eee5dc13e9?key=ab887054400f36b8251e414b56faf5b71604372444fc938e3706468e71c0033f&record_view=true',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/68468004-5a85-4f3b-bc58-590773979486/AWS-CloudPractitioner-2020.png',
      title: 'AWS Cloud Practitioner',
      link: 'https://www.credly.com/badges/764edcfe-5fbb-42c1-9629-34a5e8bf0cb9',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/987adb7e-49be-4e24-b67e-55986bd3fe66/azure-solutions-architect-expert-600x600.png',
      title: 'Azure Solutions Architect Expert',
      link: 'https://www.credly.com/badges/496df60b-6fdf-4fbb-88b3-b3c8c46f5709',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/35d18649-95c6-4c78-b07a-cfc1362318f3/azure-administrator-associate.png',
      title: 'Azure Administrator Associate',
      link: 'https://www.credly.com/badges/3533877e-347f-4572-87fb-4994a1aaea9e',
    },
    {
      image:
        'https://images.credly.com/size/680x680/images/bed83cf2-0d1a-49d5-9fbf-2085dddf9621/CCA-V.png',
      title: 'Citrix Certified Associate',
      link: 'https://www.credly.com/badges/b1cec182-48f3-4cdd-b243-c4762fc08ec7',
    }
  ]
  return (
    <section id='certs'>
      <Divider />
      <h1 className='section-title animate__lightSpeedInLeft animate__animated'>
        Certifications
      </h1>
      <a href='https://www.credly.com/users/niyashaneef/badges'>
        <button>View All</button>
      </a>
      <div className='cards-cert'>
        {certs.map((cert, index) => (
          <CertCard
            image={cert.image}
            title={cert.title}
            key='card'
            link={cert.link}
          />
        ))}
      </div>
    </section>
  )
}

export default Certifications
