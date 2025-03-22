import { TitleSection, Highlight, Bold, Experience } from './others'

const About = () => {
  const experiences = [
    {
      id: 1,
      ex: [
        {
          year: 'Jan 2025',
          duration : 'At Present',
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
          duration : '3 months',
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
          duration : '1 month',
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
          duration : '6 months',
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
