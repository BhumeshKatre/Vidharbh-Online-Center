import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenus = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-[#1E3A8A] text-white shadow-md sticky top-0 w-full z-50">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="logo"
            className="w-8 h-8"
          />

          <h1 className="text-xl font-bold tracking-wide">
            Vidarbha CSC
          </h1>
        </div>


        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 text-sm font-medium">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/blogs"
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }
          >
            Blogs
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-orange-400" : "hover:text-orange-400"
            }
          >
            Contact
          </NavLink>

        </div>


        {/* Apply Button */}

        <button className="hidden md:block bg-[#F97316] px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition">
          Apply Service
        </button>


        {/* Hamburger */}

        <button
          className="md:hidden text-2xl"
          onClick={handleMenus}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

      </div>


      {/* Mobile Menu */}

      <div
        className={`md:hidden bg-[#1E3A8A] px-6 overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-60 py-4" : "max-h-0"
          }`}
      >

        <div className="flex flex-col gap-4">

          <NavLink onClick={handleMenus} to="/">
            Home
          </NavLink>

          <NavLink onClick={handleMenus} to="/services">
            Services
          </NavLink>

          <NavLink onClick={handleMenus} to="/blogs">
            Blogs
          </NavLink>

          <NavLink onClick={handleMenus} to="/contact">
            Contact
          </NavLink>

          <button className="bg-[#F97316] px-4 py-2 rounded-lg w-full">
            Apply Service
          </button>

        </div>

      </div>

    </nav>
  );
};

export default Navbar;