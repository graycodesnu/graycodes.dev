// ! Imports
// Import state
import { useState } from "react";
// Import project list component
import ProjectList from "./ProjectList";
// Import data
import { projectData } from "../../data/projectData";

// ! Function
export default function Projects() {

  //* Modal functionality
  const [favorites, setFavorites] = useState([])

  const toggleFavorites = (id) => {
    console.log("id", id);
    if (!favorites.includes(id)) {
      const updatedFavorites = [...favorites, id];
      setFavorites(updatedFavorites);
    } else {
      /*
    need to filter the array where the values do not equal the id that is passed in
    */
      const updatedFavorites = favorites.filter((fav) => fav !== id);
      setFavorites(updatedFavorites);
    }
    console.log("fav1", favorites);
  };

  const isFavorite = (id) => favorites.includes(id);


  // * Project Cards
  // Map over project data to return ProjectList component
  const projectDataList = projectData.map((project) => (
    <ProjectList
      key={project.id}
      project={project}
      toggleFavorites={toggleFavorites}
      isFavorite={isFavorite(project.id)}
    />
  ));

// ** RETURN **
  return (
    <>
      <div id="projects">
        <h1 className="xl:mt-14 text-5xl font-bold tracking-tight text-secondary sm:text-6xl">
          <span className="projectHeadingUnderline">Featured Projects</span>
        </h1>

        <div className="">
          <ul className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-11">
            {projectDataList}
          </ul>
        </div>
      </div>
    </>
  );
}
