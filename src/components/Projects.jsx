import React, { useState } from 'react';
import { projectsData } from '../data/projects';

const Projects = ({ projects = projectsData }) => {
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{project.name}</h3>
              <p className="text-gray-600 mb-4 text-justify">{project.description}</p>
              <div className="mt-4 mb-4">
                <img
                  src={project.projectImage}
                  alt="Architecture Diagram"
                  className="cursor-pointer rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
                  onClick={() => openImageModal(project.projectImage)}
                />
              </div>
              <a
                href={project.link}
                className="text-indigo-500 hover:text-indigo-600 font-medium hover:underline transition duration-200 ease-in-out"
              >
                View More
              </a>
              <div className="my-8 flex flex-wrap justify-center">
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

      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-4xl max-h-full overflow-auto">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeImageModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full Architecture Diagram"
              className="max-w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}

    </section>
  );
};

export default Projects;
