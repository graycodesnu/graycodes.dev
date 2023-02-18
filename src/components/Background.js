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


  return (
  <>  
    <h1>Background</h1>

  <h3>Grayson Harvey</h3>
  </>

  )
  }