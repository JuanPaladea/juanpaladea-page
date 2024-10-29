const ProjectsComponent = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <div className="relative group">
                  <img
                    className="lg:h-48 md:h-36 w-full object-cover object-center transition-transform duration-500 transform group-hover:rotate-y-180"
                    src="https://dummyimage.com/720x400"
                    alt="blog"
                  />
                  <div className="absolute inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="h-full flex items-center p-4 rounded-lg hover:cursor-pointer">
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/88x88"
                      />
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/88x88"
                      />
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/88x88"
                      />
                      <img
                        alt="team"
                        className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                        src="https://dummyimage.com/88x88"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Front End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Libelulis
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Front End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    IMIPP Landing Page
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2 lg:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="https://dummyimage.com/721x401"
                  alt="blog"
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    Back End
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    E-commerce REST API
                  </h1>
                  <p className="leading-relaxed mb-3">
                    Photo booth fam kinfolk cold-pressed sriracha leggings
                    jianbing microdosing tousled waistcoat.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Live demo
                    </a>
                    <span className="text-gray-500 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1">
                      <a className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                        Github
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsComponent;
