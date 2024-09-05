import Navbar from './components/Navbar'
import SkillCategory from './components/SkillCategory'
import ScrollToTopButton from './components/ScrollToTopButton'
import ExperienceCard from './components/ExperienceCard'

export default function Home() {
  const experiences = [
    {
      company: "TechInnovate",
      icon: "/images/techinnovate-icon.png",
      achievements: [
        "Led the development of a React-based dashboard, improving user engagement by 40%",
        "Implemented responsive design principles, resulting in a 25% increase in mobile users",
        "Collaborated with UX team to optimize user flows, reducing bounce rate by 15%"
      ],
      period: "2021 - Present"
    },
    {
      company: "WebSolutions Co.",
      icon: "/images/websolutions-icon.png",
      achievements: [
        "Developed and maintained multiple client websites using Vue.js and Nuxt.js",
        "Integrated third-party APIs, enhancing functionality and user experience",
        "Mentored junior developers, improving team productivity by 20%"
      ],
      period: "2019 - 2021"
    },
    {
      company: "DigitalCraft Agency",
      icon: "/images/digitalcraft-icon.png",
      achievements: [
        "Created custom WordPress themes and plugins for e-commerce sites",
        "Optimized website performance, achieving a 30% reduction in load times",
        "Implemented SEO best practices, resulting in improved search rankings for clients"
      ],
      period: "2017 - 2019"
    },
    {
      company: "InnoTech Solutions",
      icon: "/images/innotech-icon.png",
      achievements: [
        "Developed a progressive web app using React and Redux, increasing user retention by 35%",
        "Implemented GraphQL API, reducing data overfetching by 50%",
        "Led a team of 5 developers in an Agile environment, delivering projects on time and within budget"
      ],
      period: "2015 - 2017"
    },
    {
      company: "FutureSoft Inc.",
      icon: "/images/futuresoft-icon.png",
      achievements: [
        "Designed and implemented a microservices architecture using Node.js and Docker",
        "Improved system scalability, allowing the platform to handle 3x more concurrent users",
        "Introduced automated testing, reducing bug reports by 40%"
      ],
      period: "2013 - 2015"
    }
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold mb-4">
          a Frontend Engineer,
          <br />
          <span className="text-purple-500">available to work</span>
          <br />
          globally.
        </h1>
        <p className="text-center max-w-2xl">
          With a focus on modern web technologies and pixel-perfect implementation, I am committed to
          creating high-quality and user-centric websites that enhance brand image and drive conversions.
        </p>
      </section>

      <section id="skills" className="min-h-screen py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">I&apos;m really good at</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <SkillCategory
            title="Frontend Engineering"
            skills={['React', 'Vue.js', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3']}
          />
          <SkillCategory
            title="Low or no-code"
            skills={['Figma', 'Webflow', 'Framer', 'Shopify', 'WordPress', 'Bubble']}
          />
        </div>
      </section>

      <section id="experience" className="min-h-screen py-16 px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Work Experience</h2>
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll">
            {experiences.map((exp, index) => (
              <div key={index} className="w-80 flex-shrink-0 mx-4">
                <ExperienceCard {...exp} />
              </div>
            ))}
            {experiences.map((exp, index) => (
              <div key={`repeat-${index}`} className="w-80 flex-shrink-0 mx-4">
                <ExperienceCard {...exp} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-screen py-16">
        <h2 className="text-4xl font-bold mb-8">Selected Projects</h2>
        <div className="grid grid-cols-3 gap-8">
          {['Homesilo.', 'Openwaver.', 'Exx (Clone).', 'Haelo.', 'Cargodealers.', 'Talkroom (Clone).'].map((project, index) => (
            <div key={index} className="bg-gray-800 p-8 flex items-center justify-center">
              <h3 className="text-xl font-semibold">{project}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="articles" className="min-h-screen py-16">
        <h2 className="text-4xl font-bold mb-8">Technical Articles</h2>
        <div className="grid grid-cols-3 gap-8">
          {/* Add article cards here */}
        </div>
      </section>

      <section id="contact" className="min-h-screen py-16 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-4">Ready to work together?</h2>
        <p className="text-center max-w-2xl mb-8">
          I am actively seeking new opportunities and am available for remote, freelance or contract work.
        </p>
        {/* Add contact information or form here */}
      </section>

      <ScrollToTopButton />
    </main>
  )
}
