import React from "react";

const About = () => {
  return (
    <div id="about" className="flex mb-10 max-sm:flex-col gap-5">
      <div className="flex-1 flex justify-center">
        <img className="w-[500px]" src="/about.jpeg" alt="" />
      </div>
      <div className="flex-1">
        <p className="font-bold text-xl leading-10 max-sm:leading-7 max-sm:font-normal">
          Hello! I'm <span className="text-blueLight">Ibrokhim</span>, a
          dedicated front-end developer specializing in creating responsive and
          user-friendly web applications. I have expertise in HTML, CSS,
          JavaScript, and TypeScript, and I excel in using frameworks like React
          and Next.js. My skills include styling with Sass and Tailwind CSS, and
          managing state with Redux and Context API.
        </p>
      </div>
    </div>
  );
};

export default About;
