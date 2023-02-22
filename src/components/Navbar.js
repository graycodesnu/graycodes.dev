// Import react scroll for nav buttons 
import { Link } from "react-scroll";
// Import components
import Hero from "./Hero";
import Background from "./Background";
import Projects from "./Projects";
import Contact from "./Contact";
// Import logo asset
import { ReactComponent as Logo } from "../assets/logo.svg";
// Import responsive elements
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Nav routes
const navigation = [
  { name: "Home", href: "hero", current: true },
  { name: "Background", href: "background", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Contact", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (

    <Disclosure
      as="nav"
      className="py-3 bg-primary-alt border-b border-light-black-variant shadow-sm shadow-blue"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-green hover: hover:text-gold focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* Logo */}
                <div className="flex flex-shrink-0 items-center">
                  <a href="/">
                    <Logo className="block h-28 w-auto" alt="Grayson Harvey" />
                  </a>
                </div>
{/* TODO: EDIT flex and centering on wide screen (pt should be nixed */}
                <div className="pt-6 hidden sm:ml-6 sm:block ">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                      spy={true}
                      smooth={true}
                      offset={50}
                      duration={500}

                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue text-gold"
                            : "text-secondary hover:text-gold",
                          "px-3 py-2 rounded-md text-md font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Download Resume */}
              <div className="ml-10 space-x-4">
{/* TODO: EDIT flex and centering on wide screen (mt should be nixed */}
                <a
                  href="#"
                  className="
                  h-10 mt-6
                  absolute inset-y-0 right-0 flex items-center 
                  
                  rounded-md px-2 text-base font-medium outline outline-green  hover:outline-gold hover:text-gold"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
          {/* Bar Menu */}
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-blue text-gold"
                      : "text-secondary hover:text-gold",
                    "block px-3 py-2 rounded-md text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
