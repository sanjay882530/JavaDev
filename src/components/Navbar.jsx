import { useState, useRef, useEffect} from "react";
import {
  PaperAirplaneIcon,
  MoonIcon,
  SunIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [courseToggleMenu, setCourseToggleMenu] = useState(false);
  const menuRef = useRef(null); // Reference for the menu

  // Handle clicks outside the menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setCourseToggleMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="app">
      <nav className="bg-slate-200 shadow-md fixed top-0 left-0 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex mx-auto justify-between items-center w-5/6 py-4">
            {/* Primary menu and logo */}
            <div className="flex items-center gap-8">
              {/* Logo */}
              <Link
                to="/"
                className="flex gap-1 font-bold text-gray-700 items-center"
                aria-label="JavaDev Homepage"
              >
                <PaperAirplaneIcon className="h-6 w-6 text-primary" />
                <span>JavaDev</span>
              </Link>

              {/* Desktop navigation */}
              <div className="hidden lg:flex gap-6">
                <Link to="/home" className="hover:text-primary">
                  Home
                </Link>
                <div className="relative" ref={menuRef}>
      <button
        onClick={() => setCourseToggleMenu(!courseToggleMenu)}
        className="hover:text-primary"
      >
        Courses
      </button>
      {/* Dropdown */}
      {courseToggleMenu && (
        <div className="absolute bg-white shadow-md rounded-md mt-2 py-2">
          <Link
            to="/java"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Java
          </Link>
          <Link
            to="/spring-boot"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Spring Boot
          </Link>
          <Link
            to="/microservices"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Microservices
          </Link>
          <Link
            to="/database"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Database
          </Link>
        </div>
      )}
    </div>
                <Link to="/learn-more" className="hover:text-primary">
                  Learn More
                </Link>
                <Link to="/interview-questions" className="hover:text-primary">
                  Interview Questions
                </Link>

                <Link to="/contact-us" className="hover:text-primary">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Secondary actions */}
            <div className="flex items-center gap-6">
              {/* Theme toggle */}
              <div className="hidden lg:flex items-center gap-4">
                <MoonIcon className="h-6 w-6 cursor-pointer" />
                <SunIcon className="h-6 w-6 cursor-pointer" />
              </div>
              {/* Free Trial */}
              <button className="rounded-full border-2 border-gray-300 py-2 px-4 hover:bg-gray-700 hover:text-white">
                <Link to="/login" className="hover:text-primary">
                  Signin
                </Link>
              </button>
              {/* Mobile navigation toggle */}
              <button
                onClick={() => setToggleMenu(!toggleMenu)}
                className="lg:hidden"
                aria-label="Toggle mobile navigation"
              >
                {toggleMenu ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {toggleMenu && (
          <div className="lg:hidden bg-gray-100 shadow-md py-4">
            <div className="px-8 flex flex-col gap-6">
              <a href="/home" className="text-gray-700 hover:text-primary">
                Home
              </a>
              <a
                href="#"
                onClick={() => setCourseToggleMenu(!courseToggleMenu)}
                className="text-gray-700 hover:text-primary"
              >
                Courses
              </a>
              {/* Dropdown */}
              {courseToggleMenu && (
                <div className="pl-4">
                  <a
                    href="/java"
                    className="block text-gray-700 hover:text-primary"
                  >
                    Java
                  </a>
                  <a
                    href="/spring-boot"
                    className="block text-gray-700 hover:text-primary"
                  >
                    Spring Boot
                  </a>
                  <a
                    href="/microservices"
                    className="block text-gray-700 hover:text-primary"
                  >
                    Microservices
                  </a>
                  <a
                    href="/database"
                    className="block text-gray-700 hover:text-primary"
                  >
                    Database
                  </a>
                </div>
              )}
              <a
                href="/learn-more"
                className="text-gray-700 hover:text-primary"
              >
                Learn More
              </a>
              <a
                href="/interview-questions"
                className="text-gray-700 hover:text-primary"
              >
                Interview Questions
              </a>
              <a
                href="/contact-us"
                className="text-gray-700 hover:text-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
