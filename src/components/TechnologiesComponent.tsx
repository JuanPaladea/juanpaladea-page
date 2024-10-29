const TechnologiesComponent = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-xl mb-2">
            Programming
          </h1>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/80x80"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Holden Caulfield
                  </h2>
                  <p className="text-gray-600">UI Designer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/84x84"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Henry Letham
                  </h2>
                  <p className="text-gray-600">CTO</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p className="text-gray-600">Founder</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/4 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                <img
                  alt="team"
                  className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
                  src="https://dummyimage.com/88x88"
                />
                <div className="flex-grow">
                  <h2 className="text-white title-font font-medium">
                    Oskar Blinde
                  </h2>
                  <p className="text-gray-600">Founder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        
      </section>
    </>
  );
};

export default TechnologiesComponent;
