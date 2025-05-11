import { Briefcase, Calendar } from 'lucide-react';

const ExperienceCard = ({ experience }) => {
  return (
    <div className="relative pl-8 pb-12 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-0 top-0 h-full w-0.5 bg-blue-200 dark:bg-blue-800"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-[-8px] top-0 w-4 h-4 rounded-full bg-blue-600 dark:bg-blue-400 border-4 border-white dark:border-gray-900"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            {experience.role}
          </h3>
          <span className="text-blue-600 dark:text-blue-400">•</span>
          <span className="text-gray-700 dark:text-gray-300">
            {experience.company}
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
          <Calendar className="w-4 h-4" />
          <span className="text-sm">
            {experience.duration}
          </span>
        </div>
        
        <ul className="space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li 
              key={index}
              className="text-gray-700 dark:text-gray-300 flex items-start gap-2"
            >
              <span className="text-blue-600 dark:text-blue-400 mt-1.5">•</span>
              {achievement}
            </li>
          ))}
        </ul>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      company: "Team Oreo, London",
      duration: "Nov 2024 - Jan 2025",
      achievements: [
        "Engineered a responsive charity website HTML, CSS, JavaScript, React.js,, boosting mobile traffic by 25% through improved cross-device compatibility.",
        "Refactored and optimized the codebase to boost load speed by 30%, applying clean code principles and Agile collaboration with Git—enhancing scalability and performance across web systems.",
        "Enhanced UI/UX consistency via design refinements and cross-browser testing, cutting bounce rate by 18%."
      ],
      technologies: ["React", "JavaScript", "Redux", "Tailwind CSS"]
    },
    {
      role: "Software Developer Intern",
      company: "TNGS",
      duration: "Jun 2023- Nov 2023",
      achievements: [
        "Designed and implemented an event registration platform, improving registration efficiency by 30% through streamlined form handling and user flow.",  
        "Built a user-friendly interface that reduced drop-off rates by 20%, significantly enhancing the attendee experience.",
        "Integrated real-time tracking dashboards, improving organizer response time to user engagement by 35%." 
      ],
      technologies: ["HTML", "CSS", "WordPress", "Python"]
    },
    {
      role:  "Customer Service Associate",
      company: "Amazon",
      duration: "Oct 2020 - Mar 2021",
      achievements: [
        "Engaged with a wide range of customer groups, addressing concerns with clear, effective communication, which significantly improved customer satisfaction and retention.",
        "Collaborated with cross-functional teams to identify and resolve escalations at an early stage, resulting in a 10% improvement in customer retention through efficient issue resolution and timely interventions." 
      ],
      technologies: ["Multitaskinng", "Softskills", "Communication"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            My journey in the industry and the impact I've made along the way
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;