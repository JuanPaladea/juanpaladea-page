import { motion } from "framer-motion";

const AboutMeComponent = () => {
  return (
    <motion.section 
    initial={{ opacity : 0 }}
    whileInView={{ opacity : 1 }}
    transition={{ duration: 1 }}
    className="text-gray-400 bg-gray-900 body-font"
    id="aboutme">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-3/4 w-full mx-auto text-justify">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="inline-block w-8 h-8 text-gray-500 mb-8"
            viewBox="0 0 975.036 975.036"
          >
            <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
          </svg>
          <p className="leading-relaxed text-lg">
            I'm a former medical radiologist turned self-taught developer. When I realized that the medical field wasn't for me I decided to make a career change. I've been exploring the world of software development for the past 2 and a half years and I'm looking to make a transition into the tech industry. I started my journey with FreeCodeCamp and Codecademy where I learned the basics of web development with HTML, CSS, and JavaScript. I then took courses on a local platform where I learned about libraries and frameworks and started working with Node.js. I also started a certification course at Harvard University: CS50x - Introduction to Computer Science, which is an introductory course that covers the basics of computer science, programming in C, and an introduction to Python, Flask, and SQL. I've been working on projects to practice my skills and learn new technologies. I've also been solving technical problems on online platforms to improve my problem-solving skills. 
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMeComponent;
