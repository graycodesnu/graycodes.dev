// Import logo asset
import { ReactComponent as Logo } from "../assets/logo.svg";
// Import responsive elements
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

// Nav routes
const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "Background", href: "/background", current: false },
  { name: "Projects", href: "/projects", current: false },
  { name: "Contact", href: "/contact", current: false },
];

// Todo: Define classses and figure out what this does
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    // <>
    //   <header className="bg-primary-alt border-b border-light-black-variant shadow-sm shadow-blue">
    //     <div className="">
    //       <nav className="flex items-center justify-between ml-12 mr-12 md:justify-start md:space-x-10">
    //         <div className="flex justify-start">
    //           <a href="/">
    //             <span className="sr-only">Grayson Harvey</span>
    //             <Logo />
    //           </a>
    //         </div>

    //         <div className=" hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
    //           {navigation.map((link) => (
    //             <a
    //               key={link.name}
    //               href={link.href}
    //               className="text-base font-medium text-secondary hover:text-gold"
    //             >
    //               {link.name}
    //             </a>
    //           ))}
    //         </div>

    //         <div className="ml-10 space-x-4">
    //           <a
    //             href="#"
    //             className="inline-block rounded-md py-2 px-3  text-base font-medium outline outline-green text-light-grey  hover:outline-gold"
    //           >
    //             Download Resume
    //           </a>
    //         </div>
    //       </nav>
    //     </div>
    //   </header>
    // </>

    <Disclosure as="nav" className="bg-primary-alt border-b border-light-black-variant shadow-sm shadow-blue">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
{/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2  text-green hover: hover:text-gold">
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
                    <Logo
                      className="block h-8 w-auto lg:hidden"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />

                    <Logo
                      className="hidden h-8 w-auto lg:block"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                      alt="Your Company"
                    />
                  </a>
                </div>

                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-blue text-gold"
                            : "text-secondary hover:text-gold",
                          "px-3 py-2 rounded-md text-sm font-medium"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

{/* Download Resume */}
              <div className="ml-10 space-x-4">
                <a
                  href="#"
                  className="
                  
                  absolute inset-y-0 right-0 flex items-center 
                  
                  rounded-md py-2 px-3 text-base font-medium outline outline-green  hover:outline-gold hover:text-gold"
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
