import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuItemClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-[#101011] text-white p-5 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <a
          href="#about"
          className="text-xl font-light text-white hover:text-orange-500 transition-colors duration-300"
        >
          Indureka V.A.
        </a>

        {/* Hamburger Menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-[#101011] shadow-lg md:shadow-none md:relative md:top-0 md:flex md:items-center md:space-x-8 md:w-auto`}
        >
          <li>
            <a
              href="#"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#skills"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#resume"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              Resume
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleMenuItemClick}
              className="block px-6 py-3 text-base font-light hover:text-orange-500 transition-colors duration-300 md:p-0"
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

