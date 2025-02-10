import React, { useEffect, useState } from "react";
import { BiCameraMovie } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { navigation } from "../constants/navigation.jsx";

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (searchInput) {
      navigate(`/search?query=${searchInput}`);
    }
  }, [searchInput]);

  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-60 z-40">
      <div className="container mx-auto px-3 flex items-center h-full ">
        <div className="flex items-center text-lg lg:ml-8 ml-2 font-medium gap-1 tracking-wider ">
          <Link to="/">
            ME<span className="text-primary">PHIMs</span>
          </Link>
          <BiCameraMovie size={20} />
        </div>

        <nav className="hidden lg:flex items-center gap-4 ml-8">
          {navigation.map((nav, index) => {
            return (
              <div>
                <NavLink
                  key={nav.label}
                  to={nav.href}
                  className={({ isActive }) =>
                    `hover:text-neutral-100 cursor-pointer px-2 ${
                      isActive && "text-neutral-100"
                    } `
                  }
                >
                  {nav.label}
                </NavLink>
              </div>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-5 mr-5">
          <form className="flex items-center gap-4" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search here..."
              className="bg-dark-lighten rounded-md px-5 py-1 outline-none border-none hidden lg:block"
              onChange={(e) => setSearchInput(e.target.value)}
              value={searchInput}
            />
            <button className="text-white text-2xl cursor-pointer">
              <IoMdSearch />
            </button>
          </form>
          <div className="text-white text-2xl cursor-pointer">
            <FaUserCircle />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
