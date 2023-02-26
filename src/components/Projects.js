// Import react scroll for button
import { Link } from "react-scroll";

// Import data
import { heroData } from "../data/heroData";
import heroImg from "../assets/heroImg.jpg";

export default function Projects() {
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
      <div id="projects">
        {/* Beginning of hero */}
        <div className="border border-red grid grid-cols-3 mt-0.5">
          {/* Text/About Div */}
          <div className="border border-silver mx-auto max-w-7xl">
            <div className="border border-blue ">
              <div className="border border-green  py-32 px-6 ">
                {/* ABOUT 2 */}
                <div className=" border border-orange mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
                  {/* <div className="border border-silver hidden sm:mb-10 sm:flex"></div> */}
                  <h1 className="text-4xl font-bold tracking-tight text-secondary sm:text-6xl">
                    {heroGreeting}
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-secondary">
                    {heroBio}
                  </p>

                  {/* View Projects Link */}
                  <div className="mt-10 flex items-center gap-x-6">
                    <Link
                      to="projects"
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}
                      className="text-base font-semibold leading-7 text-silver cursor-pointer"
                    >
                      View my projects <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div>
            <div className="w-1/6 h-0.5 -skew-y-[50deg] bg-green border-none" />
          </div>
          <div
            className="border border-gold"
          >
            <img
              className="aspect-auto object-cover rounded-full h-1/3 w-1/4 "
              src={heroImg}
              alt="Grayson Harvey"
            />
          </div>
        </div>
      </div>
    </>
  );
}
