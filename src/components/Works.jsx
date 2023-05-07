import React from "react";
import { projects } from "../constants";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
const ProjectCard = ({ name, description, tags, image, source_code_link }) => {
  return (
    <div className='w-full md:w-1/2 mb-8 px-4'>
      <div className='border-2 border-gray-300 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg'>
        <img
          src={image}
          alt='project_image'
          className='object-cover min-h-[30vh] max-h-[50vw]'
        />
        <div className='p-4 flex flex-col justify-between'>
          <div>
            <h3 className='text-lg font-medium text-[#b3bfc2] mb-2'>{name}</h3>
            <p className='text-[#b3bfc2] mb-4'>{description}</p>
            <div className='project-tags'>
              {tags.map((tag) => (
                <p
                  key={`${name}-${tag.name}`}
                  className='inline-block bg-[#090944] rounded-md text-[#ff0000] text-sm font-medium mr-2 mb-2 px-2 py-1'
                >
                  #{tag.name}
                </p>
              ))}
            </div>
          </div>
          <div className='mt-4'>
            <a
              className='github-link flex items-center justify-center h-8 w-10 rounded-full  hover:bg-gray-300'
              href={source_code_link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img src={github} alt='source code' className='w-full' />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


const Works = () => {
  return (
    <div className='works'>
      <div className='section-header'>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </div>
      <p className='section-description'>
        The following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
      </p>
      <div className='project-list mt-8 flex flex-wrap'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Works, "");
