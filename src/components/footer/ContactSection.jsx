import React from "react";

const ContactSection = () => {
  return (
    <form id="contact" className="flex flex-col mb-10">
      <div className="mb-6">
        <label
          htmlFor="email"
          className="text-white block mb-2 text-sm font-medium"
        >
          Your email
        </label>

        <input
          type="email"
          id="email"
          name="email"
          required
          className="bg-[#18191E] border outline-none focus:border-purple-500 duration-300 border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="example@gmail.com"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="subject"
          className="text-white block text-sm mb-2 font-medium"
        >
          Subject
        </label>

        <input
          type="text"
          id="subject"
          name="subject"
          required
          className="bg-[#18191E] outline-none focus:border-purple-500 duration-300 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Just saying hi"
        />
      </div>

      <div className="mb-6">
        <label
          htmlFor="message"
          className="text-white block text-sm mb-2 font-medium"
        >
          Message
        </label>

        <textarea
          name="message"
          id="message"
          cols={40}
          required
          className="bg-[#18191E] outline-none focus:border-purple-500 duration-300 border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
          placeholder="Let's talk about..."
        />
      </div>

      <button
        type="submit"
        className="shadow-xl bg-blue-500 text-white font-medium py-2.5 px-5 rounded-lg w-full"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactSection;
