import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  const handleDownloadCV = () => {

    const pdfUrl = "/cv.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "Ibrohim_Jumayev_CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      id="#"
      className="mt-32 max-md:mt-24 flex items-center max-md:flex-col gap-5"
    >
      <motion.div
        animate={{ y: 10 }}
        className="flex-[2] max-lg:flex-1 max-md:text-center"
      >
        <p className="font-bold text-3xl max-sm:text-2xl max-sm:font-medium">
          Welcome to my Portfolio
        </p>
        <div className="mt-3 mb-3">
          <p className="text-6xl font-bold max-lg:text-4xl">Hello I'm</p>
          <TypeAnimation
            className="text-6xl max-lg:text-4xl"
            sequence={["Ibrohim Jumayev", 2000, "Frontend Developer", 2000]}
            wrapper="span"
            speed={40}
            style={{
              display: "inline-block",
              fontWeight: "bold",
              color: "#0077FF",
            }}
            repeat={Infinity}
          />
        </div>

        <p className="text-lg max-sm:text-sm mt-2 font-medium">
          Passionate front-end developer with a knack for creating responsive,
          user-friendly web applications
        </p>
        <div className="flex gap-5 mt-8 max-md:justify-center max-sm:flex-col">
          <button className="px-6 duration-300 py-2 rounded-full font-semibold bg-blueLight text-white border border-blueLight hover:bg-white hover:border hover:border-blueLight hover:text-blueLight">
            <a href="#contact">Hire me</a>
          </button>
          <button
            className="px-6 py-2 border rounded-full text-blueLight font-semibold border-blueLight hover:bg-blueLight hover:text-white duration-300"
            onClick={handleDownloadCV}
          >
            Download CV
          </button>
        </div>
      </motion.div>
      <motion.div animate={{ y: 10 }} className="flex-1">
        <img
          className="w-96 max-sm:w-80 max-sm:h-80 h-96 rounded-full bg-blueLight"
          src="/img.png"
          alt=""
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
