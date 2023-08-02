import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList(props) {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <h2>No Project found</h2>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {props.items.map((project) => (
        <ProjectItem
          key={project._id}
          id={project._id}
          name={project.name}
          description={project.description}
          images={project.image}
          link={project.link}
          useSkills={project.useSkills}
        />
      ))}
    </ul>
  );
}

export default ProjectList;
