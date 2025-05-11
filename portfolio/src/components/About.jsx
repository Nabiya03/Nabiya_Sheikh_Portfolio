import { Code, Globe, Rocket } from 'lucide-react';
import HeroImg from "../assets/imagee.jpg";
import Hero from './Hero';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-2/5">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-blue-500 dark:border-blue-400"></div>
              <img 
                src={HeroImg}
                alt="Working at desk" 
                className="w-full h-auto rounded-md relative z-10"
              />
            </div>
          </div>
          
          {/* Content */}
          <div className="w-full md:w-3/5">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
              Hello! I'm a postgraduate student pursuing an MSc in Advanced Computer Science at the University of Liverpool, with a strong foundation in building scalable, user-focused software solutions. My academic and professional journey spans full-stack development, machine learning, and data analytics, equipping me to adapt quickly across technologies and problem domains.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            From developing intelligent systems like handwriting recognition to crafting data-driven dashboards and responsive web platforms, I focus on delivering practical and performance-oriented results. I enjoy working in agile teams, learning new tools, and contributing to projects that drive real-world impact.


            </p>
            
            {/* Key points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Clean Code</h3>
                <p className="text-gray-700 dark:text-gray-300">Writing maintainable, readable, and efficient code.</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Responsive</h3>
                <p className="text-gray-700 dark:text-gray-300">Creating interfaces that work on any device size.</p>
              </div>
              
              <div className="p-6 bg-white dark:bg-gray-700 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-full flex items-center justify-center mb-4">
                  <Rocket className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
                <p className="text-gray-700 dark:text-gray-300">Optimizing for speed and efficiency.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;