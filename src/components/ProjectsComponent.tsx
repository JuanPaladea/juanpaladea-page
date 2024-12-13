import { motion } from "framer-motion";

const ProjectsComponent = () => {
  return (
    <>
      <motion.section 
      initial={{ opacity : 0 }}
      whileInView={{ opacity : 1 }}
      transition={{ duration: 1 }}
      className="text-gray-400 bg-gray-900 body-font"
      id="projects">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 lg:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/w8aEHii.png"
                    title="Backend Movie Reservation System documentation page"
                    alt="Backend Movie Reservation System"
                  />
                  <a href="https://moviereservation.onrender.com/api-docs/" target="_blank" title="Backend live documentation page" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="NodeJS icon"
                        title="NodeJS icon"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/378837/node.svg"
                      />
                      <img
                        alt="ExpressJS icon"
                        title="ExpressJS icon"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/376367/express.svg"
                      />
                      <img
                        alt="MongoDB icon"
                        title="MongoDB icon"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/354200/postgresql.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h5 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Back End
                  </h5>
                  <h4 className="title-font text-lg font-medium text-white mb-3">
                    Movie Reservation System
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Backend API developed with Node.js, Express, and MongoDB. The application provides a platform for managing movies, seats, showtimes and reservations. It also includes user authentication and authorization.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://moviereservation.onrender.com/api-docs/" target="_blank" title="Backend live documentation page" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/MovieReservationBack" target="_blank" title="Backend github page" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-4 md:w-1/2 lg:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/HzmBq7I.png"
                    alt="IMIPP landing page"
                    title="IMIPP landing page"
                  />
                  <a href="https://imipp.vercel.app/" target="blank" title="IMIPP Live Link" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="JavaScript icon"
                        title="JavaScript icon"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/353925/javascript.svg"
                      />
                      <img
                        alt="Vite icon"
                        title="Vite icon"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/374167/vite.svg"
                      />
                      <img
                        alt="Firebase icon"
                        title="Firebase icon"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/373595/firebase.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h5 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Front End
                  </h5>
                  <h4 className="title-font text-lg font-medium text-white mb-3">
                    IMIPP - Landing Page
                  </h4>
                  <p className="leading-relaxed mb-3">
                    A landing page designed for a scientific research institute, serving as a hub for showcasing ongoing research and events, with contact and subscription forms for user engagement.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://imipp.vercel.app/" target="_blank" title="IMIPP Live Link" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/imipp" target="_blank" title="IMIPP Github Link" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/2 lg:w-1/3 mx-auto">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/w8aEHii.png"
                    title="E-commerce backend documentation page"
                    alt="Backend e-commerce"
                  />
                  <a href="https://backend-practice-ml8a.onrender.com/api-docs/" target="_blank" title="Backend live documentation page" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="NodeJS icon"
                        title="NodeJS icon"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/378837/node.svg"
                      />
                      <img
                        alt="ExpressJS icon"
                        title="ExpressJS icon"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/376367/express.svg"
                      />
                      <img
                        alt="MongoDB icon"
                        title="MongoDB icon"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/331488/mongodb.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h5 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Back End
                  </h5>
                  <h4 className="title-font text-lg font-medium text-white mb-3">
                    E-Commerce Backend
                  </h4>
                  <p className="leading-relaxed mb-3">
                    Backend API developed with Node.js, Express and MongoDB. The application provides a platform for managing products, shopping carts, messages, and tickets. It also includes user authentication and authorization.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://backend-practice-ml8a.onrender.com/api-docs/" target="_blank" title="Backend live documentation page" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/Backend-Practice" target="_blank" title="Backend github page" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ProjectsComponent;
