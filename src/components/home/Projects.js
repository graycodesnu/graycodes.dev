// Import project list component
import ProjectList from "./ProjectList";
// Import data
import { projectData } from "../../data/projectData";

export default function Projects() {
  // Map over project data to return ProjectList component
  const projectDataList = projectData.map((project) => (
    <ProjectList key={project.id} project={project} />
  ));

  return (
    <>
      <div id="projects">
        <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
          <span className="projectHeadingUnderline">Featured Projects</span>
        </h1>

        <div>{projectDataList}</div>
      </div>
    </>
  );
}
