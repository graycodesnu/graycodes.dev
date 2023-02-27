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
        {/* Front to back div w/ divider */}
        <div className="py-5 flex justify-evenly">
          <div className="">
            {/* Frontend */}
            <div className="text-2xl">
              <h2>Frontend</h2>
            </div>
            <div className="py-1">
              <ul>{frontendList}</ul>
            </div>
          </div>
          {/* Divider */}
          {/* flex setting breaks the divider with skew: -skew-y-[50deg] */}
          <div className="">
            <div className="w-0.5 h-64  bg-green" />
          </div>
          {/* Backend */}
          <div className="">
            <div className="text-2xl">
              <h2>Backend</h2>
            </div>
            <div className="py-1">
              <ul>{backendList}</ul>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="pt-5">
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
