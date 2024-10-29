const TechnologiesComponent = () => {
  const languages = {
    html: {
      name: "HTML",
      icon: "https://dummyimage.com/80x80",
    },
    css: {
      name: "CSS",
      icon: "https://dummyimage.com/84x84",
    },
    js: {
      name: "JavaScript",
      icon: "https://dummyimage.com/88x88",
    },
    ts: {
      name: "TypeScript",
      icon: "https://dummyimage.com/88x88",
    },
    python: {
      name: "Python",
      icon: "https://dummyimage.com/88x88",
    },
    c: {
      name: "C",
      icon: "https://dummyimage.com/88x88",
    },
  }
  
  const frameWorks = {
    node: {
      name: "Node",
      icon: "https://dummyimage.com/88x88",
    },
    express: {
      name: "Express",
      icon: "https://dummyimage.com/88x88",
    },
    flask: {
      name: "Flask",
      icon: "https://dummyimage.com/88x88",
    },
    reactVite: {
      name: "React Vite",
      icon: "https://dummyimage.com/88x88",
    },
  }

  const dataBases = {
    mongo: {
      name: "MongoDB",
      icon: "https://dummyimage.com/88x88",
    },
    sql: {
      name: "SQL",
      icon: "https://dummyimage.com/88x88",
    },
    firebase: {
      name: "Firebase",
      icon: "https://dummyimage.com/88x88",
    },
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Languages
          </h1>
          <div className="flex flex-wrap -m-2">
            {Object.values(languages).map((language) => (
              <div className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={language.icon}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {language.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            FrameWorks
          </h1>
          <div className="flex flex-wrap -m-2">
            {Object.values(frameWorks).map((framework) => (
              <div className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={framework.icon}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {framework.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Databases
          </h1>
          <div className="flex flex-wrap -m-2">
            {Object.values(dataBases).map((database) => (
              <div className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt="team"
                    className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                    src={database.icon}
                  />
                  <div className="flex-grow">
                    <h2 className="text-white title-font font-medium">
                      {database.name}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
};

export default TechnologiesComponent;
