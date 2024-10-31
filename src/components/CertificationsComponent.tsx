import { motion } from "framer-motion";

const CertificationsComponent = () => {
  return (
    <motion.section 
    initial={{ opacity : 0 }}
    whileInView={{ opacity : 1 }}
    transition={{ duration: 1 }}
    className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative group hover:cursor-pointer">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 transition-transform duration-500 transform group-hover:rotate-y-180"
                  src="https://i.imgur.com/MVDZGP8.png"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="https://cert.efset.org/tcPa8L" target="_blank" className="h-full flex items-center p-4 rounded-lg">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  EF Standard English Test 
                </h2>
                <h3 className="text-gray-500 mb-3">EFSET</h3>
                <p className="mb-4">
                  The EF SET (www.efset.org) is a suite of online certifying language exams for students and professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative group hover:cursor-pointer">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 transition-transform duration-500 transform group-hover:rotate-y-180"
                  src="https://i.imgur.com/rnKdMbS.png"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <a href="https://certificates.cs50.io/31f7f89e-7a94-4c88-9509-44d216119600.pdf" target="_blank" className="h-full flex items-center p-4 rounded-lg">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  Computer Science - CS50X
                </h2>
                <h3 className="text-gray-500 mb-3">Harvard University</h3>
                <p className="mb-4">
                  CS50, Harvard University’s introduction to the intellectual enterprises of computer science and the art of programming
                </p>
              </div>
            </div>
          </div>


          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative group hover:cursor-pointer">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 transition-transform duration-500 transform group-hover:rotate-y-180"
                  src="https://dummyimage.com/200x200"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full flex items-center p-4 rounded-lg">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  Computer Science - CS50X
                </h2>
                <h3 className="text-gray-500 mb-3">Harvard University</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>


          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <div className="relative group hover:cursor-pointer">
                <img
                  alt="team"
                  className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4 transition-transform duration-500 transform group-hover:rotate-y-180"
                  src="https://dummyimage.com/200x200"
                />
                <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="h-full flex items-center p-4 rounded-lg">
                    <svg
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8"
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <path
                          d="M7.05025 1.53553C8.03344 0.552348 9.36692 0 10.7574 0C13.6528 0 16 2.34721 16 5.24264C16 6.63308 15.4477 7.96656 14.4645 8.94975L12.4142 11L11 9.58579L13.0503 7.53553C13.6584 6.92742 14 6.10264 14 5.24264C14 3.45178 12.5482 2 10.7574 2C9.89736 2 9.07258 2.34163 8.46447 2.94975L6.41421 5L5 3.58579L7.05025 1.53553Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M7.53553 13.0503L9.58579 11L11 12.4142L8.94975 14.4645C7.96656 15.4477 6.63308 16 5.24264 16C2.34721 16 0 13.6528 0 10.7574C0 9.36693 0.552347 8.03344 1.53553 7.05025L3.58579 5L5 6.41421L2.94975 8.46447C2.34163 9.07258 2 9.89736 2 10.7574C2 12.5482 3.45178 14 5.24264 14C6.10264 14 6.92742 13.6584 7.53553 13.0503Z"
                          fill="#ffffff"
                        ></path>{" "}
                        <path
                          d="M5.70711 11.7071L11.7071 5.70711L10.2929 4.29289L4.29289 10.2929L5.70711 11.7071Z"
                          fill="#ffffff"
                        ></path>{" "}
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-white">
                  Computer Science - CS50X
                </h2>
                <h3 className="text-gray-500 mb-3">Harvard University</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </motion.section>
  );
};

export default CertificationsComponent;
