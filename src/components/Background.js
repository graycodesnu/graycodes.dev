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
    <div id="background"></div>
    <h1>Background</h1>
    <p>Qui esse adipisicing dolor reprehenderit velit esse adipisicing amet consequat nostrud commodo consectetur. Fugiat elit aliqua anim reprehenderit in. Proident aliqua officia ad fugiat. Aliquip labore fugiat dolore reprehenderit dolor occaecat eiusmod cillum irure.</p>


  <h3>Grayson Harvey</h3>
  <p>Qui esse adipisicing dolor reprehenderit velit esse adipisicing amet consequat nostrud commodo consectetur. Fugiat elit aliqua anim reprehenderit in. Proident aliqua officia ad fugiat. Aliquip labore fugiat dolore reprehenderit dolor occaecat eiusmod cillum irure.</p>

  </>

  )
  }