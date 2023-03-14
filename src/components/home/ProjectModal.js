// Import icons
import { XMarkIcon } from "@heroicons/react/24/outline";
// Import Data
import { projectData } from "../../data/projectData";

export default function ProjectModal({ open, onClose }){
  if(!open) return null;

  return(

<div onClick={onClose}>
  {/* Stop propagation prevents close when modal is clicked */}
<div onClick={(e) => {e.stopPropagation();}}>



<XMarkIcon onClick={onClose}/>

</div>

</div>


  )
}