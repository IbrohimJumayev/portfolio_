import React from "react";

import ContactSection from "./ContactSection";

const FooterSection = () => {
  return (
    <div
      id="contact"
      className="mt-10 px-10 sm:px-20 flex gap-10 sm:gap-20 max-sm:flex-col bg-blueLight p-10"
    >
      <div className="flex-1">
        <h3 className="font-bold text-2xl">Let's connect</h3>
        <p className="mt-5 text-white">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <div className="flex gap-5 mt-5">
          <a href="https://github.com/IbrohimJumayev" target="_blank">
            <img src="/git.svg" width={40} height={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/ibrohim-jumayev-94a049301/"
            target="_blank"
          >
            <img src="/linked.svg" width={40} height={40} />
          </a>
          <a href="https://www.instagram.com/ibrohim.insights/">
            <img src="/instagram.png" alt="" width={40} height={40} />
          </a>
        </div>
      </div>
      <div className="flex-1">
        <ContactSection />
      </div>
    </div>
  );
};

export default FooterSection;
