import React from "react";
import { Drawer } from "flowbite-react";

const Menu = ({ isOpen, handleClose, setIsOpen }) => {
  return (
    <div>
      <Drawer open={isOpen} onClose={handleClose} position="right" className="">
        <Drawer.Header title="Menu" />
        <Drawer.Items>
          <ul className="flex-col text-center text-xl  sm:gap-10 gap-3 font-bold ">
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#">
                Home
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#about">
                About Me
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#projects">
                Projects
              </a>
            </li>
            <li>
              <a onClick={() => setIsOpen(!isOpen)} href="#contact">
                Contact Me
              </a>
            </li>
          </ul>
        </Drawer.Items>
      </Drawer>
    </div>
  );
};

export default Menu;
