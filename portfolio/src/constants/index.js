export const projectsData = [
  {
    id: 1,
    title: "Skill Factory",
    description: "A responsive hiring platform using React.js and Tailwind CSS to connect 100+ job seekers and employers with seamless navigation and user-friendly UI.",
    image: "https://www.careerslinked.com/wp-content/uploads/2021/06/top-international-job-sites.jpeg",
    tech: ["React", "Redux", "Tailwind CSS"],
    github: "https://github.com/username/ecommerce-project",
    demo: "https://ecommerce-project.demo.com"
  },
  {
    id: 2,
    title: "Handwritten Text Recognition System",
    description: "A real-time handwriting-to-digital converter with 1000+ labeled samples, improving ML model accuracy by 15% using Python, TensorFlow, and OpenCV.",
    image: "https://raw.githubusercontent.com/arthurflor23/handwritten-text-recognition/master/doc/image/header.png?raw=true",
    tech: ["Python", "TensorFlow", "OpenCV", "Pandas", "NumPy"],
    //github: "https://github.com/username/task-manager",
    //demo: "https://task-manager.demo.com"
  },
  {
    id: 3,
    title: "Airbnb Data Mapping (Los Angeles)",
    description: "Mapped rental trends in LA by processing large datasets with Python and QGIS, creating geospatial insights to support market analysis and pricing strategies.",
    image: "https://blog.socialcops.com/wp-content/uploads/2016/10/Geospatial-4.png ",
    tech: ["Python", "Pandas", "QGIS", "Jupyter Notebook"],
   // github: "https://github.com/username/weather-app",
   // demo: "https://weather-app.demo.com"
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "A modern and responsive portfolio website to showcase projects and skills with dark/light mode support.",
    image: "https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    tech: ["React", "Tailwind CSS", "Vite"],
    // github: "https://github.com/username/portfolio",
    // demo: "https://portfolio.demo.com"
  },
  {
    id: 5,
    title: "Mental Health Support Platform",
    description: "A secure and interactive web app for mental health self-assessment, enabling personalized user guidance and secure data handling.",
    image: "https://images.unsplash.com/photo-1620147512372-9e00421556bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnRhbCUyMGhlYWx0aCUyMGFwcHxlbnwwfHwwfHx8MA%3D%3D",
    tech: ["HTML", "CSS", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB"],
    // github: "https://github.com/username/portfolio",
    // demo: "https://portfolio.demo.com"
  },
  {
    id: 6,
    title: "Banking Chatbot",
    description: "An intelligent banking chatbot to deliver fast, personalized query responses and uncover key service improvement areas through data-driven insights.",
    image: "https://media.istockphoto.com/id/1397741501/vector/online-banking-services-isolated-cartoon-vector-illustrations-se.jpg?s=612x612&w=0&k=20&c=f0WTqWD8kClPbADqRTHSRw6KkUcDup6AWeaUni_DGhg=",
    tech: ["Python", "HTML", "CSS", "JavaScript", "Node.js"],
    // github: "https://github.com/username/portfolio",
    // demo: "https://portfolio.demo.com"
  }
];

export const skillsData = {
  languages: [
    {name: "C/C++", icon:"code"},
    {name: "Python", icon: "code"},
    {name: "JavaScript", icon: "file-code"},
    {name: "Java", icon: "cup-soda"}
  ],
  frontend: [
    { name: "HTML5", icon: "html" },
    { name: "CSS3", icon: "css" },
    { name: "JavaScript", icon: "code" },
    { name: "WordPress", icon: "globe" },
    {name: "Bootstrap", icon: "box"},
    { name: "React", icon: "atom" },
    { name: "Tailwind CSS", icon: "palette" },
    { name: "Redux", icon: "layers" }
  ],
  backend: [
    { name: "Node.js", icon: "server" },
    { name: "Express.js", icon: "server" },
    { name: "Python", icon: "code" },
    { name: "RESTful APIs", icon: "database" }
  ],
  database: [
    { name: "MongoDB", icon: "leaf" },
    { name: "MySQL", icon: "database" },
  ],
  tools: [
    { name: "Git", icon: "git-branch" },
    { name: "Plugins", icon: "puzzle" },
    { name: "VS Code", icon: "terminal" },
    { name: "Figma", icon: "figma" }
  ]
};

export const navLinks = [
  { name: "Home", path: "hero" },
  { name: "About", path: "about" },
  { name: "Experience", path: "experience" },
  { name: "Projects", path: "projects" },
  { name: "Skills", path: "skills" },
 // { name: "Contact", path: "contact" }
];