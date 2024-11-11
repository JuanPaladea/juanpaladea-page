import { motion } from "framer-motion";

const TechnologiesComponent = () => {
  const languages = {
    html: {
      name: "HTML",
      icon: "https://www.svgrepo.com/show/452228/html-5.svg",
    },
    css: {
      name: "CSS",
      icon: "https://www.svgrepo.com/show/452185/css-3.svg",
    },
    js: {
      name: "JavaScript",
      icon: "https://www.svgrepo.com/show/353925/javascript.svg",
    },
    ts: {
      name: "TypeScript",
      icon: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
    },
    python: {
      name: "Python",
      icon: "https://www.svgrepo.com/show/452091/python.svg",
    },
    sql: {
      name: "SQL",
      icon: "https://www.svgrepo.com/show/374093/sql.svg",
    },
  }
  
  const frameWorks = {
    node: {
      name: "NodeJS",
      icon: "https://www.svgrepo.com/show/378837/node.svg",
    },
    express: {
      name: "Express",
      icon: "https://www.svgrepo.com/show/376367/express.svg",
    },
    flask: {
      name: "Flask",
      icon: "https://www.svgrepo.com/show/508915/flask.svg",
    },
    reactVite: {
      name: "React Vite",
      icon: "https://www.svgrepo.com/show/374167/vite.svg",
    },
  }

  const dataBases = {
    mongo: {
      name: "MongoDB",
      icon: "https://www.svgrepo.com/show/331488/mongodb.svg",
    },
    sql: {
      name: "MySQL",
      icon: "https://www.svgrepo.com/show/355133/mysql.svg",
    },
    Postgresql: {
      name: "PostgreSQL",
      icon: "https://www.svgrepo.com/show/354200/postgresql.svg",
    },
  }

  const BaaS = {
    firebase: {
      name: "Firebase",
      icon: "https://www.svgrepo.com/show/373595/firebase.svg",
    },
    aws: {
      name: "AWS",
      icon: "https://www.svgrepo.com/show/448266/aws.svg",
    },
    vercel: {
      name: "Vercel",
      icon: "https://www.svgrepo.com/show/378475/vercel-fill.svg",
    },
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font" id="skills">
        <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration: 1 }}
        className="container px-5 py-12 mx-auto">
          <h3 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Languages
          </h3>
          <div className="flex flex-wrap -m-2">
            {Object.values(languages).map((language) => (
              <div key={language.name} className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt={language.name + ' icon'} 
                    title={language.name}
                    className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                    src={language.icon}
                  />
                  <div className="flex-grow">
                    <h4 className="text-white title-font font-medium">
                      {language.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration: 1 }}
        className="container px-5 py-12 mx-auto">
          <h3 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Frameworks
          </h3>
          <div className="flex flex-wrap -m-2">
            {Object.values(frameWorks).map((framework) => (
              <div key={framework.name} className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt={framework.name + ' icon'}
                    title={framework.name}
                    className={framework.name === "Flask" || framework.name === "Express" ? 'w-16 h-16 object-cover object-center flex-shrink-0 mr-4 bg-white' : 'w-16 h-16 object-cover object-center flex-shrink-0 mr-4'}                    
                    src={framework.icon}
                  />
                  <div className="flex-grow">
                    <h4 className="text-white title-font font-medium">
                      {framework.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration: 1 }}
        className="container px-5 py-12 mx-auto">
          <h3 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Databases
          </h3>
          <div className="flex flex-wrap -m-2">
            {Object.values(dataBases).map((database) => (
              <div key={database.name} className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt={database.name + ' icon'}
                    title={database.name}
                    className="w-16 h-16 object-cover object-center flex-shrink-0 mr-4"
                    src={database.icon}
                  />
                  <div className="flex-grow">
                    <h4 className="text-white title-font font-medium">
                      {database.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
        initial={{ opacity : 0 }}
        whileInView={{ opacity : 1 }}
        transition={{ duration: 1 }}
        className="container px-5 py-12 mx-auto">
          <h3 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            BaaS
          </h3>
          <div className="flex flex-wrap -m-2">
            {Object.values(BaaS).map((back) => (
              <div key={back.name} className="p-2 lg:w-1/5 md:w-1/3 w-1/2 w-full ">
                <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                  <img
                    alt={back.name + ' icon'}
                    title={back.name}
                    className={back.name === "AWS" || back.name ==="Vercel" ? 'w-16 h-16 object-cover object-center flex-shrink-0 mr-4 bg-white' : 'w-16 h-16 object-cover object-center flex-shrink-0 mr-4'}                     
                    src={back.icon}
                  />
                  <div className="flex-grow">
                    <h4 className="text-white title-font font-medium">
                      {back.name}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        
      </section>
    </>
  );
};

export default TechnologiesComponent;
