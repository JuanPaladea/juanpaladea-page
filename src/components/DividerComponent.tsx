import React from "react";
import { motion } from "framer-motion";
interface DividerProps {
  title: string;
  subtitle?: string;
}

const DividerComponent: React.FC<DividerProps> = ({ title, subtitle }) => {
  return (
    <>
      <motion.section 
      initial={{ opacity : 0 }}
      whileInView={{ opacity : 1 }}
      transition={{ duration: 1 }}
      className="text-gray-400 bg-gray-900 body-font ">
        <div className="container px-5 pt-10 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-indigo-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col">
              <h3 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
                {title}
              </h3>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                {subtitle}
              </p>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default DividerComponent;
