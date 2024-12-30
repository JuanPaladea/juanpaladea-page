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
            Backend software developer, committed to continuous learning and professional growth. My career journey began in medical sciences, where I honed analytical and problem-solving skills as a Radiology Technician at the University of Buenos Aires. During this time, I developed exceptional communication and interpersonal abilities by working in a multidisciplinary research institute and interacting with patients in hospital environments. Collaborating with diverse teams of scientists, healthcare professionals, and administrative staff allowed me to cultivate adaptability and organizational proficiency, managing multiple priorities and coordinating cross-functional tasks. <br />
            My transition into software development began with two years of Computer Science education, building a solid foundation in computing principles. To balance work commitments, I shifted to self-directed learning, leveraging different platforms like FreeCodeCamp and Codecademy to master web development. I further expanded my expertise through local platform courses, focusing on libraries, frameworks, and Node.js development, culminating in a deeper understanding of backend development. <br />
            Additionally, I completed Harvard University’s CS50x – Introduction to Computer Science, where I gained experience in programming with C, Python, Flask, and SQL. These studies were complemented by hands-on projects and engaging in technical challenges, ensuring alignment with industry trends and best practices. My unique background combines technical expertise with a structured and detail-oriented mindset, supported by exceptional teamwork and communication skills. <br />
            This combination of formal education, self-driven learning, and practical application enables me to contribute meaningfully to complex projects and foster effective collaboration. I am now seeking opportunities to apply these skills and make a meaningful impact as I transition into the tech industry.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutMeComponent;