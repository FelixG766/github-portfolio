import React, { useState } from 'react';
import { SiIntellijidea, SiVisualstudiocode, SiMysql, SiRedis, SiGooglecloud, SiSpringboot, SiSpring, SiElasticsearch, SiRabbitmq, SiDocker, SiGit } from 'react-icons/si';

const dummyProjects = [{
  name: "Online Mall - Large Scale Distributed Ecommerce System",
  description: "EcomHub Refactor is a modernisation initiative for an e-commerce platform written in Java inspired by the Gulimall open-source project. The project involves refactoring and upgrading the codebase to enhance performance, scalability, and maintainability, leveraging the latest technologies and best practices in software development, with Swagger for documentation purposes.",
  link: "https://github.com/FelixG766/OnlineMall",
  technologies: [
    { name: 'IntelliJ IDEA', icon: <SiIntellijidea /> },
    { name: 'Visual Studio Code', icon: <SiVisualstudiocode /> },
    { name: 'MySQL', icon: <SiMysql /> },
    { name: 'Redis', icon: <SiRedis /> },
    { name: 'Google Cloud', icon: <SiGooglecloud /> },
    { name: 'Spring Boot', icon: <SiSpringboot /> },
    { name: 'Spring Framework', icon: <SiSpring /> },
    { name: 'Elasticsearch', icon: <SiElasticsearch /> },
    { name: 'RabbitMQ', icon: <SiRabbitmq /> },
    { name: 'Docker', icon: <SiDocker /> },
    { name: 'Git', icon: <SiGit /> },
  ],
  architectureImage: "https://via.placeholder.com/600x400" // Sample image URL
}];

const Projects = ({ projects = dummyProjects }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="projects" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <div className="mt-4">
                <img 
                  src={project.architectureImage} 
                  alt="Architecture Diagram" 
                  className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                  onClick={() => openImageModal(project.architectureImage)}
                />
              </div>
              <a 
                href={project.link} 
                className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline transition duration-200 ease-in-out"
              >
                View More
              </a>
              <div className="flex flex-wrap mt-4">
                {project.technologies.map((tech, i) => (
                  <div key={i} className="flex items-center m-1">
                    <div className="text-indigo-600">{tech.icon}</div>
                    <span className="ml-2 text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <button 
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700" 
              onClick={closeImageModal}
            >
              &times;
            </button>
            <img src={selectedImage} alt="Full Architecture Diagram" className="max-w-full h-auto rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
