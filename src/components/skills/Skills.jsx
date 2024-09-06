import React from "react";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <p className="font-bold text-2xl mb-5 sm:mb-10 text-center">Skills</p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10 skills"
      >
        <button>
          <p class="box">Javascript</p>
        </button>
        <button>
          <p class="box">Typescript</p>
        </button>
        <button>
          <p class="box">Html</p>
        </button>
        <button>
          <p class="box">CSS</p>
        </button>
        <button>
          <p class="box">Sass</p>
        </button>
        <button>
          <p class="box">React Js</p>
        </button>
        <button>
          <p class="box">Next Js</p>
        </button>
        <button>
          <p class="box">Tailwind</p>
        </button>
      
        <button>
          <p class="box">Redux</p>
        </button>
        <button>
          <p class="box">Flowbite</p>
        </button>
        <button>
          <p class="box">Git/GitHub</p>
        </button>
      </motion.div>
    </>
  );
};

export default Skills;
