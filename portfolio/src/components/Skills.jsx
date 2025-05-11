import { skillsData } from '../constants';
import { Code, Rss as Css, Globe, FileCode, CupSoda, Figma, Database, Server, GitBranch, Smartphone, Palette, Layers, Atom, Leaf, FileSymlink as Html } from 'lucide-react';
// import {Code, Braces, FunctionSquare, Database, CupSoda, Leaf FileCode, Atom, Paintbrush, Globe, Box, LayoutDashboard, Shuffle, CircuitBoard, Hexagon,
//   Terminal, Code2, GitBranch, Puzzle, LayoutTemplate, Leaf, 
//   Cable, FileSymlink as Html, Rss as Css,
//  } from 'lucide-react';
//import { Atom, Paintbrush, Globe, Box, LayoutDashboard, Shuffle, CircuitBoard, Hexagon } from 'lucide-react';

const getIconComponent = (iconName) => {
  switch (iconName) {
  //   case 'html': return <Html className="w-8 h-8" />;
  //   case 'code': return <Code className="w-8 h-8" />;
  //   case 'cable': return <Cable className="w-8 h-8" />;
  //   case 'globe': return <Globe className="w-8 h-8" />;
  //   case 'shuffle': return <Shuffle className="w-8 h-8" />;
  //   //case 'shuffle': return <Shuffle className="w-8 h-8" />;
  //   case 'box': return <Box className="w-8 h-8" />;
  //   case 'cup-soda': return <CupSoda className="w-8 h-8" />;
  //   case 'puzzle': return <Puzzle className="w-8 h-8" />;
  //   case 'css': return <Css className="w-8 h-8" />;
  // //  case 'code': return <Code className="w-8 h-8" />;
  //   case 'terminal': return <Terminal className="w-8 h-8" />;
  //   case 'file-code': return <FileCode className="w-8 h-8" />;
  //   case 'figma': return <Figma className="w-8 h-8" />;
  //   case 'leaf': return <Leaf className="w-8 h-8" />;
  //   case 'database': return <Database className="w-8 h-8" />;
  //   case 'server': return <Server className="w-8 h-8" />;
  //   case 'git-branch': return <GitBranch className="w-8 h-8" />;
  //   case 'smartphone': return <Smartphone className="w-8 h-8" />;
  //   case 'palette': return <Code2 className="w-8 h-8" />;
  //   case 'layers': return <Layers className="w-8 h-8" />;
  //   case 'atom': return <Atom className="w-8 h-8" />;
  //   default: return <Code className="w-8 h-8" />;
  case 'html': return <Html className="w-8 h-8" />;
  case 'css': return <Css className="w-8 h-8" />;
  case 'code': return <Code className="w-8 h-8" />;
  case 'file-code': return <FileCode className="w-8 h-8" />;
  case 'cup-soda': return <CupSoda className="w-8 h-8" />;
  case 'figma': return <Figma className="w-8 h-8" />;
  case 'leaf': return <Leaf className="w-8 h-8"/>;
  case 'globe': return <Globe className="w-8 h-8" />;
  case 'database': return <Database className="w-8 h-8" />;
  case 'server': return <Server className="w-8 h-8" />;
  case 'git-branch': return <GitBranch className="w-8 h-8" />;
  case 'smartphone': return <Smartphone className="w-8 h-8" />;
  case 'palette': return <Palette className="w-8 h-8" />;
  case 'layers': return <Layers className="w-8 h-8" />;
  case 'atom': return <Atom className="w-8 h-8" />;
  default: return <Code className="w-8 h-8" />;
  }
};

const SkillCard = ({ skill }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex flex-col items-center">
      <div className="text-blue-600 dark:text-blue-400 mb-4">
        {getIconComponent(skill.icon)}
      </div>
      <h3 className="text-gray-900 dark:text-white font-medium text-center">
        {skill.name}
      </h3>
    </div>
  );
};

const SkillSection = ({ title, skills }) => {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {title}
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and skills I work with
          </p>
        </div>
        <SkillSection title="Langguages" skills={skillsData.languages}/>
        <SkillSection title="Frontend Development" skills={skillsData.frontend} />
        <SkillSection title="Backend Development" skills={skillsData.backend} />
        <SkillSection title="Database Technologies" skills={skillsData.database} />
        <SkillSection title="Tools & Technologies" skills={skillsData.tools} />
      </div>
    </section>
  );
};

export default Skills;