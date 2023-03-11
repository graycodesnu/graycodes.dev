// Import data
import { projectData } from "../../data/projectData";

export default function Projects() {
  // Project data
  const projectDataList = projectData.projects.length ? (
    projectData.projects.map((projects, index) => (
      <li key={index}>{projects}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  return (
    <>
      <div id="projects">
        <div>
          <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
            <span className="projectHeadingUnderline">My Projects</span>
          </h1>

          <div>
            <p>{projectData.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
