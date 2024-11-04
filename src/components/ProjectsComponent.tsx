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
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/HzmBq7I.png"
                    alt="blog"
                  />
                  <a href="https://imipp.vercel.app/" target="blank" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="JavaScript"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/353925/javascript.svg"
                      />
                      <img
                        alt="Vite"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/374167/vite.svg"
                      />
                      <img
                        alt="Firebase"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/373595/firebase.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Front End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    IMIPP - Landing Page
                  </h1>
                  <p className="leading-relaxed mb-3">
                    A landing page designed for a scientific research institute, serving as a hub for showcasing ongoing research and events, with contact and subscription forms for user engagement.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://imipp.vercel.app/" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/imipp" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/w8aEHii.png"
                    alt="Backend e-commerce"
                  />
                  <a href="https://backend-practice-ml8a.onrender.com/api-docs/" target="_blank" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="team"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/378837/node.svg"
                      />
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/376367/express.svg"
                      />
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/331488/mongodb.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Back End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    E-Commerce Backend
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Backend application that uses Node.js, Express, and MongoDB. The application provides a platform for managing products, shopping carts, messages, and tickets. It also includes user authentication and authorization.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://backend-practice-ml8a.onrender.com/api-docs/" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/Backend-Practice" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>


            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://i.imgur.com/PeWFKkS.png"
                    alt="blog"
                  />
                  <a href="https://libelulis.vercel.app/" target="_blank" className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="JavaScript"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                        src="https://www.svgrepo.com/show/353925/javascript.svg"
                      />
                      <img
                        alt="Vite"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/374167/vite.svg"
                      />
                      <img
                        alt="Firebase"
                        className="w-16 h-16 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://www.svgrepo.com/show/373595/firebase.svg"
                      />
                    </div>
                  </a>
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Front End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Libelulis
                  </h1>
                  <p className="leading-relaxed mb-3">
                    An e-commerce platform offering various features such as user authentication, purchase history, contact forms, newsletter subscriptions, and admin functionalities.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://libelulis.vercel.app/" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a href="https://github.com/JuanPaladea/Libelulis" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
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
