import React, { useState, useEffect } from "react";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import {ProjectCard} from "./Works"

const Repositories = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const fetchRepositories = async () => {
      const response = await fetch(
        "https://api.github.com/users/goodness5/repos"
      );
      const data = await response.json();
      setRepositories(data);
    };
    fetchRepositories();
  }, []);

  return (
    <SectionWrapper>
      <h2 style={styles.sectionTitle}>My Repositories</h2>
      <div className='flex flex-wrap -mx-4'>
        {repositories.map((repo) => (
          <ProjectCard
            key={repo.id}
            name={repo.name}
            description={repo.description}
            tags={[{ name: "GitHub" }, { name: "Repository" }]}
            image={github}
            source_code_link={repo.html_url}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Repositories;
