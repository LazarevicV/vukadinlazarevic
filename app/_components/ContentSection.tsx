import React from "react";
import PaEcase from "../../public/PaEcase.png";
import Cref from "../../public/Cref.png";

const fakeProjects = [
  {
    title: "Pa Ecase",
    description: "This is a description for Pa Ecase.",
    technologies: ["Php", "Laravel", "MySql", "Bootstrap", "JQuery", "Ajax"],
    imageUrl: PaEcase.src,
    demoLink: "#",
    codeLink: "#",
  },
  {
    title: "Cref",
    description: "This is a description for Cref.",
    technologies: ["Laravel", "Bootstrap", "MySql"],
    imageUrl: Cref.src,
    demoLink: "#",
    codeLink: "#",
  },
  // Add more fake projects as needed
];

export default function ContentSection() {
  console.log(PaEcase);

  return (
    <section
      className="bg-white py-16 podesi-visinu-contenta rounded"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">My Projects</h2>
          <p className="mt-4 text-lg text-gray-500">
            Explore some of my projects and accomplishments below.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {fakeProjects.map((project, index) => (
            <div
              key={index}
              className="border rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out  "
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} screenshot`}
                className="w-full h-40 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl text-slate-600 font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="mr-2 mb-2 px-2 py-1 bg-gray-200 text-gray-800 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex justify-between">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
