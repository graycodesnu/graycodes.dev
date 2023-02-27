import { proficiencies } from "../data/resumeData";

export default function Background() {
  // Frontend
  const frontendList = proficiencies.frontend.length ? (
    proficiencies.frontend.map((frontend, index) => (
      <li key={index}>{frontend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // Backend
  const backendList = proficiencies.backend.length ? (
    proficiencies.backend.map((backend, index) => (
      <li key={index}>{backend}</li>
    ))
  ) : (
    <p>No data to show.</p>
  );

  // Tools
  const toolsList = proficiencies.tools.length ? (
    proficiencies.tools.map((tools, index) => <li key={index}>{tools}</li>)
  ) : (
    <p>No data to show.</p>
  );

  return (
    <>
      <div id="background">
        <h1 className="text-4xl">Background</h1>
        {/* Frontend */}
        <div className="float-left">
          <div className="text-2xl">
            <h2>Frontend</h2>
          </div>
          <ul>{frontendList}</ul>
        </div>
        {/* Divider */}
        <div className="self-center ">
          <div className="w-30 h-0.5 -skew-y-[50deg] bg-green" />
        </div>
        {/* Backend */}
        <div className="float-right">
          <div className="text-2xl">
            <h2>Backend</h2>
          </div>
          <ul>{backendList}</ul>
        </div>
        {/* Tools */}
        <div>
          <div className="">
            <div className="text-2xl">
              <h2>Tools</h2>
            </div>
            <ul>{toolsList}</ul>
          </div>
        </div>
      </div>
    </>
  );
}
