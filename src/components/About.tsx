import { TitleSection, Highlight, Bold, Experience } from './others'

const About = () => {
  const experiences = [
    {
      id: 1,
      ex: [
        {
          year: 'Jan 2025',
          duration: 'At Present',
          title: 'System Engineer',
          company: 'Tata Consultancy Services',
          at: 'Chennai',
          desc: 'Working on Oracle Retail and PL/SQL development, focusing on database management and backend solutions.'
        }
      ]
    },
    {
      id: 2,
      ex: [
        {
          year: 'Mar 2024',
          duration: '3 months',
          title: 'Technical Support Intern',
          company: 'TN Autoskills',
          at: 'Chennai',
          desc: 'Resolved critical issues, enhancing stability. Led tech migration, cutting infrastructure costs by 30% annually.'
        }
      ]
    },
    {
      id: 3,
      ex: [
        {
          year: 'Dec 2023',
          duration: '1 month',
          title: 'Android Development Intern',
          company: 'Inblue Infotech',
          at: 'Chennai',
          desc: 'Built and shipped features on tight deadlines using Java, Jetpack, and MVM. Reduced crash rates by 15% through testing and debugging.'
        }
      ]
    },
    {
      id: 4,
      ex: [
        {
          year: 'Aug 2022',
          duration: '6 months',
          title: 'Developer Intern',
          company: 'VBIND Innovation',
          at: 'Chennai',
          desc: 'Optimized API calls, improving server response time by 20%. Led knowledge-sharing workshops, enhancing team efficiency.'
        }
      ]
    }
  ]
  return (
    <div
      id="about"
      className="w-full flex flex-col items-center justify-center gap-5 pt-20 px-5 lg:px-24"
    >
      <TitleSection title="About Me" />

      <div className="w-full flex flex-col space-y-3 items-center justify-center">
      <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
        Hi,... my name is
        <Highlight content=" Santhosh Senthil" />
        <br /> I am a
        <Bold content=" System Engineer" /> currently working at
        <Bold content=" Tata Consultancy Services (TCS)" />, specializing in{' '}
        <Bold content="Oracle DB and PL/SQL development" />. With a strong
        foundation in database management and backend solutions, I focus on building
        scalable and efficient systems.
      </p>
      <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
        My expertise spans <Bold content="Full-Stack Development" />,
        <Bold content=" Java with Spring Boot" />, and
        <Bold content=" Cloud Computing" />. I have experience designing and
        optimizing applications, ensuring high performance and reliability.
      </p>
      <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
        Passionate about problem-solving and innovation, I thrive on tackling
        complex challenges and delivering impactful solutions. Let&apos;s build
        something great together! 🚀
      </p>
    </div>

      <div className="w-full flex flex-col items-center justify-center py-10 lg:px-20 space-y-8">
        <div className="w-full flex flex-col justify-start items-center">
          <p className="font-light text-2xl text-center tracking-wider">
            Experiences
          </p>
        </div>

        <div className="flex flex-col space-y-5">
          {experiences.map((ex) => {
            const experience = ex
            return (
              <div
                key={experience.id}
                className="w-full flex flex-col lg:flex-row space-x-0 space-y-5 lg:space-x-5 lg:space-y-0 items-start justify-end"
              >
                {experience.ex.map((exp, index) => (
                  <Experience
                    key={index}
                    year={exp.year}
                    duration={exp.duration}
                    title={exp.title}
                    company={exp.company}
                    at={exp.at}
                    desc={exp.desc}
                  />
                ))}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default About
