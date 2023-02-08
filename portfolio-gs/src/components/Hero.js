import { heroData } from "../data/heroData";

export default function Hero() {

  // Hero greeting 
  const heroGreeting = heroData.greeting.length ? (
    heroData.greeting.map((greeting, index) => <h1 key={index}>{greeting}</h1>)
  ) : (
    <p>Data Not Found</p>
  );

  // Hero bio 
  const heroBio = heroData.bio.length ? (
    heroData.bio.map((bio, index) => <h1 key={index}>{bio}</h1>)
  ) : (
    <p>Data Not Found</p>
  );


  return (
  <>
  <div>
  <h1>{heroGreeting}</h1>
  </div>
  <div><h6>{heroBio}</h6></div>
</>
  );
}
