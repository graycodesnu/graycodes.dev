// Import project list component
import ProjectList from "./ProjectList";
// Import data
import { projectData } from "../../data/projectData";


export default function Projects() {
  const projectList = projectData.map(projects => {
    console.log("This is a project!", projects);

    return
    <ProjectList key={projects.id} project={projects} />;
  });

  return (
    <>
      <div id="projects">{projectList}</div>
    </>
  );
}
