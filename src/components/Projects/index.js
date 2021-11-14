import React from "react";
import ProjectCards from "./projectCard";
import project from '../../project.json'


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}


function Projects() {
    return (
      <section className="container">


          <Wrapper id="card-data">
            {project.map((project) => (
              <ProjectCards key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
            ))}
          </Wrapper>
        </section>
    )
  }
  
  export default Projects;