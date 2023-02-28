// Import icons
import {
  ComputerDesktopIcon,
  Cog8ToothIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

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
        <h1 className="text-6xl text-secondary font-medium">My Background</h1>
        {/* Front to back div w/ divider */}
        <div className="pt-8 pb-5 flex justify-evenly">
          <div className="bg-primary-light rounded-lg border border-orange hover:shadow-md hover:shadow-orange">
            {/* Frontend */}
            <div className="py-4 px-8">
              {/* Heading with icon */}
              <div className="pb-2 flex flex-row justify-center items-end">
                <ComputerDesktopIcon className="h-12 w-12 mr-3 " />
                <h2 className="text-secondary text-5xl font-medium frontendUnderline">
                  Frontend
                </h2>
              </div>
              {/* Data */}
              {/* <div className="content-center justify-items-center"> */}
                <div className="text-silver py-1 border grid grid-cols-2">
                  <div className="bg-red">
                    <ul>
                      <li>JavaScript</li>
                      <li>jQuery</li>
                      <li>Bootstrap</li>
                      <li>Handlebars</li>
                      <li>CSS</li>

                    </ul>
                  </div>
                  <div className="bg-blue">
                    <ul>
                      <li>React</li>
                      <li>Tailwind</li>
                      <li>Material UI</li>
                      <li>HTML</li>
                      <li></li>

                    </ul>
                  </div>
                </div>
              {/* </div> */}
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
