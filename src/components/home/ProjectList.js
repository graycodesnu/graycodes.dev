export default function ProjectList({ project }) {
  return (
    <>
      <div className="py-7">
        <div>{project.screenshot}</div>
        <h5>{project.title}</h5>
        <p>{project.description}</p>
        <ul>
          <li>{project.responsibilities}</li>
        </ul>
        <ul>
          <li>{project.skills}</li>
        </ul>
      </div>
    </>
  );
}
