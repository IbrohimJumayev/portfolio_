import React from "react";

const Skills = () => {
  return (
    <>
      <p className="font-bold text-2xl mb-5 sm:mb-10 text-center">Skills</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10 skills">
        <p>Javascript</p>
        <p>Typescript</p>
        <p>Html</p>
        <p>Css</p>
        <p>Sass</p>
        <p>React Js</p>
        <p>Next Js</p>
        <p>Tailwind</p>
        <p>Redux</p>
        <p>Flowbite</p>
        <p className="mr-10">Git/GitHub</p>
      </div>
    </>
  );
};

export default Skills;
