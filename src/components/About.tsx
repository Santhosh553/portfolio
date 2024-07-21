import { TitleSection, Highlight, Bold, Experience } from './others'

const About = () => {
  const experiences = [
    {
      id: 1,
      ex: [
        {
          year: 'Mar 2024',
          title: 'Technical Support Intern',
          company: 'TN Autoskills',
          at: 'Chennai',
          desc: 'Demonstrated strong problem-solving skills, quickly identifying and resolving critical production issues, and improving system stability. Conducted a thorough tech stack evaluation, leading to a migration to more efficient technologies, saving 30% on infrastructure costs annually.'
        }
      ]
    },
    {
      id: 2,
      ex: [
        {
          year: 'Dec 2023',
          title: 'Android Development Intern',
          company: 'Inblue Infotech',
          at: 'Chennai',
          desc: 'Collaborated with cross-functional teams to define, design, and ship new features within tight deadlines. Utilized modern Android development tools and best practices, including Java, Android Jetpack, and MVM architecture. Conducted thorough testing and debugging of applications, reducing crash rates by 15%.'
        }
      ]
    },
    {
      id: 3,
      ex: [
        {
          year: 'Aug 2022',
          title: 'Developer Intern',
          company: 'VBIND Innovation',
          at: 'Chennai',
          desc: 'Collaborated with the backend team to optimize API calls, leading to a 20% improvement in server response time and enhanced overall application performance. Actively contributed to team knowledge sharing initiatives, conducting workshops on new tools and techniques, resulting in an upskilled and more efficient development team.'
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
        <br /> As a student of
        Computer Science Engineering at Velammal Engineering College, I am
        passionate about exploring new technologies and constantly improving
        my skills as a
        <Bold content=" Full-Stack Developer" />. I specialize in using the{' '}
        <Bold content="MERN Stack" />, which includes
        <Bold content=" MongoDB, Express, React, Node.js" /> along with various other related
        technologies. I am also proficient in Java development using{' '}
        <Bold content="Spring Boot" /> and other software development practices.
      </p>
      <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
        With my expertise in full stack development, Java development, and cloud computing,
        I am confident that I can make a valuable contribution to your organization. 
        I am committed to developing powerful, scalable web applications that adhere 
        to best practices in software development. 🚀
      </p>
      <p className="text-center font-light text-base md:text-lg lg:text-xl tracking-wide">
        Let&apos;s work together to build innovative and high-performing
        applications that drive your business forward. 😎
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
