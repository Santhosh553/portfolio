import { TitleSection, DisplayLottie } from './others'

import emoji from 'react-easy-emoji'

import Development from '../assets/lotties/development.json'
import Cloud from '../assets/lotties/cloud.json'
import DevOps from '../assets/lotties/devops.json'
import Java from '../assets/lotties/java.json'
import Software from '../assets/lotties/software.json'

const Stack = () => {
  const techStack = [
    {
      name: 'Full Stack Developer',
      icon: Development,
      align: 'lg:flex-row',
      emoji: '🚀',
      services: [
        'Building secure and scalable application servers',
        'Creating responsive and optimized web applications for small businesses',
        'Developing custom web applications based on specific requirements'
      ]
    },
    {
      name: 'Java Development',
      icon: Java,
      align: 'lg:flex-row-reverse',
      emoji: '☕',
      services: [
        'Developing robust and efficient backend services using Java',
        'Building RESTful APIs with Spring Boot',
        'Integrating databases like MySQL and PostgreSQL with Java applications'
      ]
    },
    {
      name: 'Software Development',
      icon: Software,
      align: 'lg:flex-row',
      emoji: '💻',
      services: [
        'Designing and implementing software solutions to solve complex problems',
        'Utilizing Agile methodologies for software development',
        'Conducting comprehensive testing to ensure software quality and reliability'
      ]
    },
    {
      name: 'Cloud Computing',
      icon: Cloud,
      align: 'lg:flex-row-reverse',
      emoji: '☁️',
      services: [
        'Building and deploying web applications on cloud platforms',
        'Providing scalable and secure cloud hosting solutions for websites',
        'Setting up cloud-based CI/CD pipelines for continuous integration and delivery'
      ]
    },
    {
      name: 'DevOps',
      icon: DevOps,
      align: 'lg:flex-row',
      emoji: '🔧',
      services: [
        'Implementing continuous integration and continuous deployment (CI/CD) pipelines',
        'Using Docker and Kubernetes for containerization and orchestration',
        'Monitoring and managing application performance and reliability'
      ]
    }
  ]

  return (
    <div
      id="tech-stack"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="Tech Stack" />

      {techStack.map((tech, index) => (
        <div
          key={index}
          className={`w-full flex flex-col ${tech.align} items-center justify-between`}
        >
          <div className="w-full flex items-center justify-center">
            <DisplayLottie animationData={tech.icon} />
          </div>
          <div className="w-full flex flex-col items-center justify-center space-y-5">
            <h3 className="text-2xl font-normal tracking-wider">{tech.name}</h3>

            <div className="w-full flex flex-col items-center justify-center space-y-4">
              {tech.services.map((service, index) => (
                <div
                  key={index}
                  className="mb-0 flex flex-row items-start lg:items-center justify-center space-x-2 font-light text-base"
                >
                  {emoji(tech.emoji)}
                  <p className='text-left lg:text-center'>{service}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Stack
