// src/Footer.jsx
import React from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const ContactUs = ({ nightMode }) => {
  return (
    <footer
      id="contact"
      className={`transition-colors duration-300 ease-in-out ${
        nightMode ? "bg-[#1a1919] text-white" : "bg-[#F0EAD6] text-black"
      }   p-6 md:p-10 lg:pt-10 lg:pl-40`}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Contact Details */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl cursor-default font-bold">Contact</h2>
          <p className="flex items-center space-x-3">
            <FaEnvelope />
            <a href="mailto:usamasyed237@gmail.com" className="hover:underline">
              usamasyed237@gmail.com
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaMapMarkerAlt />
            <a
              href="https://maps.app.goo.gl/Ne9rT3xWx8MiLByq8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Shabbir House, TV Colony, Swati Gate, Peshawar, Pakistan
            </a>
          </p>
          <p className="flex items-center space-x-3">
            <FaPhoneAlt />
            <a href="tel:+923349034893" className="hover:underline">
              +92-334-9034893
            </a>
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-xl cursor-default font-bold">Connect with Me</h2>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/syed-usama-186b22142/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${nightMode ? "text-blue-600" : "text-blue-600"}  hover:text-blue-700 transition-colors`}
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/syedusama-lab"
              target="_blank"
              rel="noopener noreferrer"
              className={`${nightMode ? "text-white" : "text-black"}  hover:text-gray-500 transition-colors`}
            >
              <FaGithub size={24} />
            </a>
          </div>
        </div>

        {/* Additional Links */}
        <div className="hidden md:block">
          <h2 className="text-xl font-bold cursor-default mb-3">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#about" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#skills" className="hover:underline">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#certifications" className="hover:underline">
                Certifications
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-6 cursor-default text-gray-500 text-sm">
        © {new Date().getFullYear()} Syed Usama. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactUs;
