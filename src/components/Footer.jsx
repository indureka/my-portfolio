import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Branding */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-md mt-4 font-light text-gray-100">
              "Crafting solutions with creativity and precision."
            </p>
            <p className="text-sm font-light text-gray-100 leading-relaxed my-4">
              You can view more of my projects on 
              <a
                href="https://github.com/indureka"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 text-base hover:text-orange-600 hover:underline"
              >
                &nbsp;GitHub
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/indureka-arulprakasam-7a78582a9/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <FaLinkedin size={48} />
            </a>
            <a
              href="https://github.com/indureka"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500"
            >
              <FaGithub size={48} />
            </a>
            <a
              href="mailto:induarulprakasam94@gmail.com"
              className="hover:text-orange-500"
            >
              <FaEnvelope size={48} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-700" />

        {/* Middle Section */}
        <div className="text-center text-lg font-light text-orange-500">
          <p className="mb-4">
            "Innovation starts with a single step forward."
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm font-light text-white">
          {/* Copyright */}
          <p>© {new Date().getFullYear()} Indureka V.A. All rights reserved.</p>

          {/* Links */}
          <div className="mt-4 md:mt-0">
            <a
              href="#home"
              className="hover:text-orange-500 text-sm font-light mx-2"
            >
              Home
            </a>
            <a
              href="#about"
              className="hover:text-orange-500 text-sm font-light mx-2"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-orange-500 text-sm font-light mx-2"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
