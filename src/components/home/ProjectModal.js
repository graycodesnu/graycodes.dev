// Import icons
import { XMarkIcon } from "@heroicons/react/24/outline";


export default function ProjectModal({ open, onClose, modalProjectData }){
  // Modal functionality
  if(!open) return null;



    // Detailed skill array for project detail card
    const detailedSkillArray = modalProjectData.skillsDetail;
    console.log(
      "This is the detailed skills array from ProjectList!",
      detailedSkillArray
    );


  return(

<div onClick={onClose}>
  {/* Stop propagation prevents close when modal is clicked */}
<div onClick={(e) => {e.stopPropagation();}}>
      {/* Detailed Skills */}
   
        {detailedSkillArray.map((skill) => (
          <li className="list-none px-1">{skill}</li>
        ))}
   


<XMarkIcon onClick={onClose}/>

</div>

</div>


  )
}