import { motion } from "framer-motion";

const HeaderComponent = () => {
  return (
    <>
      <motion.header 
      initial={{ opacity : 0 }}
      whileInView={{ opacity : 1 }}
      transition={{ duration: 1 }}
      className="text-gray-400 bg-gray-900 body-font"
      id="home">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a href="#home" title="Homepage" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <span className="ml-3 text-xl">Juan Paladea</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <a href="#aboutme" title="about-me" className="mr-5 hover:text-white">About Me</a>
            <a href="#skills" title="skills" className="mr-5 hover:text-white">Skills</a>
            <a href="#projects" title="projects" className="mr-5 hover:text-white">Projects</a>
          </nav>
          <a href="#contact" title="contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            <p>Contact</p>
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-4 h-4 ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </motion.header>
    </>
  );
};

export default HeaderComponent;
