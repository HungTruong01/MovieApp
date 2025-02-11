import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" text-left bg-neutral-600 bg-opacity-75 text-neutral-400 py-4">
      <div className="flex items-center justify-between px-4 ">
        <div className="hover:text-white cursor-pointer">Copyright@2025</div>
        <div className="flex gap-4 ">
          <Link to="/" className="hover:text-white cursor-pointer">
            About
          </Link>
          <Link to="/" className="hover:text-white cursor-pointer">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
