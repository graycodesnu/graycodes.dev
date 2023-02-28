// Import icons 
import { ComputerDesktopIcon, Cog8ToothIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";



// Import data
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
        <h1 className="text-4xl text-secondary">My Background</h1>
        {/* Front to back div w/ divider */}
        <div className="pt-8 pb-5 flex justify-evenly">
          <div className=" rounded-lg border border-orange hover:shadow-md hover:shadow-orange">
            {/* Frontend */}
            <div className="bg-primary-light py-4 px-8">
              {/* Heading */}
            <div className="text-2xl underline underline-offset-4 pb-2 ">
              <div className="">
              <ComputerDesktopIcon className="h-12 w-12 text-red"/>
              <h2 className="text-secondary">Frontend</h2>
              </div>
            </div>
            <div className="py-1 text-silver">
              <ul>{frontendList}</ul>
            </div>
            </div>
          </div>
          {/* Divider */}
          {/* flex setting breaks the divider with skew: -skew-y-[50deg] */}
          <div className="">
            <div className="w-0.5 h-64 mt-4 bg-green" />
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
        <div className="pt-8 flex justify-center">
          <div className="">
            <div className="text-2xl">
              <h2>Tools</h2>
            </div>
            <div className="py-1">
              <ul>{toolsList}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
