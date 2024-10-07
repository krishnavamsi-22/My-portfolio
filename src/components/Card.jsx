import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../Data/projects";

const Projects = () => {
  return (
    <div className="flex flex-col justify-center items-center relative z-10">
      <div className="relative flex flex-col justify-between items-center w-full max-w-6xl gap-3 px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div
          className="text-4xl text-center font-semibold mt-5 text-white"
          id="projects"
        >
          Projects
        </div>
        <div className="text-lg text-center font-medium text-gray-300">
          I have worked on a wide range of projects. Here are some of my projects.
        </div>
        <div className="flex flex-wrap justify-center gap-10 w-full border-red-500">
          {projectsData.map((project, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
              }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-md backdrop-filter backdrop-blur-lg cursor-pointer bg-white bg-opacity-95 dark:bg-gray-50 dark:border-gray-700 border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 my-8"
              onClick={() => window.open(project.link)}
            >
              <motion.img
                src={project.image}
                alt="Project snapshot not loaded"
                className="rounded-t-lg w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              />
              <motion.div
                className="text-2xl font-semibold mb-3 text-center text-gray-900 dark:text-black pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {project.title}
              </motion.div>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
              </p>
              <a
                href={project.link}
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-200 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Read more
                <svg
                  className="ml-2 -mr-1 w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
