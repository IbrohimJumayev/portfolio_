import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      img: "/crypto.png",
      title: "Crypto project you can add crypto to watch list",
      linkView: "https://final-exam-one-lac.vercel.app/",
      linkGitHub: "https://github.com/IbrohimJumayev/final-exam",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/game_geek.png",
      title: "E-Commerce where u can add products to cart, filter and so on",
      linkView: "https://game-geek.vercel.app/",
      linkGitHub: "https://github.com/IbrohimJumayev/GameGeek",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/drum.png",
      title:
        "simple javascript app when you push your keyboard it  makes sounds",
      linkView: "https://javascript-drum-kit-nu.vercel.app/",
      linkGitHub: "https://github.com/IbrohimJumayev/Javascript-drum-kit",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/pomodoro.png",
      title:
        "pomodoro timer for focusing you can focus and make your day productive",
      linkView: "https://focus-fy.vercel.app/",
      linkGitHub: "https://github.com/IbrohimJumayev/FocusFy",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/notify.png",
      title:
        "Notify - you can simply write your notes i was using typescript and redux toolkit",
      linkView: "https://typescript-note-taking-app.vercel.app/",
      linkGitHub:
        "https://github.com/IbrohimJumayev/typescript-note-taking-app",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/countries.png",
      title:
        "This project cotains all countries ,you can add to favourites , made with typescript, redux,  saving the liked countries to the local storage",
      linkView: "https://test-project-pink-eight.vercel.app/",
      linkGitHub: "https://github.com/IbrohimJumayev/test-project",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
    {
      img: "/login.png",
      title:
        "simple login application if you type true login and password it will redirect you to the admin panel",
      linkView: "https://exam-6-gamma.vercel.app/login.html",
      linkGitHub: "https://github.com/IbrohimJumayev/exam-6",
      linkViewTitle: "Click to see the project",
      linkGitHubTitle: "git-hub link",
    },
  ];

  return (
    <div id="projects">
      <p className="font-bold text-2xl text-center mt-5 mb-10">Projects</p>
      <ul className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.li
            animate={{ y: 20 }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="shadow-xl p-2 flex flex-col justify-between gap-5"
            key={index}
          >
            <div>
              <img className="h-60" src={project.img} alt={project.title} />
              <p className="mt-3 font-semibold text-lg ">{project.title}</p>
            </div>

            <div className="flex flex-col justify-end mt-3 gap-3">
              <a
                className="font-bold text-blueLight"
                href={project.linkView}
                target="_blank"
              >
                {project.linkViewTitle}
              </a>
              <a
                className="font-bold flex gap-2"
                href={project.linkGitHub}
                target="_blank"
              >
                <img className="w-6" src="/git.svg" alt="" />
                {project.linkGitHubTitle}
              </a>
            </div>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
