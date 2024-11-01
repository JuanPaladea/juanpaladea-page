import { motion } from "framer-motion";

const HeroComponent = () => {
  return (
    <motion.div 
    initial={{ opacity : 0 }}
    whileInView={{ opacity : 1 }}
    transition={{ duration: 1 }}
    className="text-gray-400 bg-gray-900 body-font"
    >
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="https://avatars.githubusercontent.com/u/126008697?v=4"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Juan Paladea
          </h1>
          <h2 className="title-font sm:text-3xl text-2xl mb-4 font-medium text-white">
            Backend Software Developer
          </h2>
          <p className="mb-8 leading-relaxed">
            I am a software developer with a passion for backend development. I
            have experience in building RESTful APIs and services using Node.js
            and Express.js. I am also familiar with databases like MongoDB and
            MySQL. I am looking for opportunities to work on exciting projects
            and learn new technologies.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white border-2 py-2 px-6 focus:outline-none hover:border-blue-600 rounded text-lg">
              <a href="#projects">Projects</a>
            </button>
            <button className="inline-flex text-white border-2 py-2 px-6 mx-2 focus:outline-none hover:border-blue-600 rounded text-lg">
              CV  
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroComponent;
