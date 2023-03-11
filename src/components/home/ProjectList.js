export default function ProjectList(project) {


  return (
    <>
      <div id="projects" >
        <div>
          <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
            <span className="projectHeadingUnderline">My Projects</span>
          </h1>

          <div key={project.id}>

            <p>{project.title}</p>
          </div>
        </div>
      </div>
    </>
  );
}
