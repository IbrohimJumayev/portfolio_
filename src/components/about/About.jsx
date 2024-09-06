import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div id="about" className="flex mb-10 max-sm:flex-col gap-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="flex-1 flex justify-center"
      >
        <img className="w-[500px]" src="/about.jpeg" alt="" />
      </motion.div>
      <div className="flex-1">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-bold text-xl leading-10 max-sm:leading-7 max-sm:font-normal"
        >
          Hello! I'm <span className="text-blueLight">Ibrokhim</span>, a
          dedicated front-end developer specializing in creating responsive and
          user-friendly web applications. I have expertise in HTML, CSS,
          JavaScript, and TypeScript, and I excel in using frameworks like React
          and Next.js. My skills include styling with Sass and Tailwind CSS, and
          managing state with Redux and Context API.
        </motion.p>
      </div>
    </div>
  );
};

export default About;
