import React from 'react';

const projects = [
  {
    title: "E-commerce Platform",
    description: "Developed a full-stack e-commerce solution with real-time inventory management.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident sit omnis aliquam cumque et sunt ex vel, sed blanditiis veritatis, rerum quo iusto. Minima, illum animi? Deleniti, saepe ab.",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    link: "#"
  },
  {
    title: "Machine Learning Internship",
    description: "Implemented predictive models for customer churn analysis at a fintech startup.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident sit omnis aliquam cumque et sunt ex vel, sed blanditiis veritatis, rerum quo iusto. Minima, illum animi? Deleniti, saepe ab.",
    technologies: ["Python", "TensorFlow", "Scikit-learn", "Pandas"],
    link: "#"
  },
  {
    title: "Mobile Fitness App",
    description: "Created a cross-platform mobile app for personalized workout tracking and nutrition planning.Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident sit omnis aliquam cumque et sunt ex vel, sed blanditiis veritatis, rerum quo iusto. Minima, illum animi? Deleniti, saepe ab.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    link: "#"
  }
  // Add more projects as needed
];

const Projects = () => {
  return (
    <>
      <div className='text-center'>
        <h2 className="text-2xl font-extrabold text-gray-900 mb-2">Projects</h2>
      </div>
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group perspective">
              <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out transform preserve-3d group-hover:-translate-z-12 group-hover:scale-105 group-hover:shadow-xl h-full group-hover:bg-gray-900 group-hover:text-white">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="mb-4 group-hover:text-gray-300">{project.description}</p>
                  <div className="mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="inline-block bg-gray-200 group-hover:bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 group-hover:text-gray-300 mr-2 mb-2">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="text-blue-500 hover:text-blue-700 group-hover:text-blue-300 group-hover:hover:text-blue-100 font-medium">
                    Learn More →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;