import React, { useEffect, useState } from "react";

import ProjectList from "../components/ProjectList";

function Projects() {
  const [loadedProjects, setLoadedProjects] = useState([]);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch("http://localhost:5000/api/projects/");
        const responseData = await response.json();
        setLoadedProjects(responseData.projects);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    }
    fetchProjects();
  }, []);

  if (loadedProjects.length === 0) {
    return (
      <section id="skills" className="bg-neutral-800 py-10 text-white ">
        <div className="text-5xl ">
          <h2>No Project found</h2>
        </div>
      </section>
    );
  }

  return (
    <React.Fragment>
      <section className="bg-neutral-800 px-14 py-10 ">
        <h1 className=" text-left font-Roboto_Slab text-4xl text-green-500">
          Projects
        </h1>
        <div className="mt-5">
          <ProjectList items={loadedProjects} />
        </div>
      </section>
    </React.Fragment>
  );
}

export default Projects;
