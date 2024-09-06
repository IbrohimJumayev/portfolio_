import React from "react";
import Menu from "./Menu";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  return (
    <nav className="flex justify-between items-center pt-5 pb-5 shadow-sm w-full m-auto fixed top-0 z-50 overflow-hidden px-5 sm:px-10 bg-white">
      <div>
        <a href="#" className="text-blueLight font-bold text-3xl">Ibrohim</a>
      </div>
      <div>
        <ul className="flex sm:gap-10 gap-3 font-bold max-sm:hidden">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Me</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
        <button
          className="sm:hidden px-4 py-2 bg-blueLight text-white"
          onClick={() => setIsOpen(true)}
        >
          Menu
        </button>
        <Menu handleClose={handleClose} setIsOpen={setIsOpen} isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
