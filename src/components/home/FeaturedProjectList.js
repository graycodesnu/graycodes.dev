// ! Imports
// Import icons
import { ReactComponent as GitHubIcon } from "../../assets/icons/githubLogo.svg";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
// Import useState for modal functionality
import { useState } from "react";
// Import Data
import { projectData } from "../../data/projectData";
// Import project detail pages
import GoodWeeds from "../../pages/projects/GoodWeeds";

// ! Function
export default function ProjectList(project) {


  //? Detailed skill array for project detail card
  // const detailedSkillArray = project.skillsDetail;
  // console.log(
  //   "This is the detailed skills array from ProjectList!",
  //   detailedSkillArray
  // );

  // ! Display detail switch case
  const [view, setView] = useState("ProjectList")

  function displayPage() {
    switch(view) {
      case "ProjectList":
        return <ProjectList />
      case "GoodWeeds":
        return <GoodWeeds/>
      default: 
      return <ProjectList />
    }
  }


  return (
    <>
<p>Featured</p>
    </>
  );
}
