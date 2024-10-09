import React from 'react';

const dummyProjects = [{ name: "Online Mall", description: "Description here...", link: "#" }];

const Projects = ({ projects = dummyProjects }) => {
  return (
    <section id="projects" className="py-8 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div key={index} className="border p-4">
              <h3 className="font-bold">{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="text-blue-500 hover:underline">View More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
