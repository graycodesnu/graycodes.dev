// Import logo asset
import { ReactComponent as Logo } from "../assets/logo.svg";

// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Background", href: "/background" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  // const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-primary-alt border-b border-light-black-variant shadow-sm shadow-blue">
        <div className="">
          <nav className="flex items-center justify-between ml-12 mr-12 md:justify-start md:space-x-10">
            <div className="flex justify-start">
              <a href="/">
                <span className="sr-only">Grayson Harvey</span>
                <Logo />
              </a>
            </div>

            <div className=" hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              {navigation.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-base font-medium text-secondary hover:text-gold"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="ml-10 space-x-4">
              <a
                href="#"
                className="inline-block rounded-md py-2 px-3  text-base font-medium outline outline-green text-light-grey  hover:outline-gold"
              >
                Download Resume
              </a>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
