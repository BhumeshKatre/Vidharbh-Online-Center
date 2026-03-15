import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1E3A8A] text-white shadow-md sticky top-0 w-full">

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo / Brand */}
        <h1 className="text-xl font-bold tracking-wide">
          Vidarbha CSC Center
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-8 text-sm font-medium">

          <Link
            to="/"
            className="hover:text-orange-400 transition"
          >
            Home
          </Link>

          <Link
            to="/services"
            className="hover:text-orange-400 transition"
          >
            Services
          </Link>

          <Link
            to="/blogs"
            className="hover:text-orange-400 transition"
          >
            Blogs
          </Link>

          <Link
            to="/contact"
            className="hover:text-orange-400 transition"
          >
            Contact
          </Link>

        </div>

        {/* Apply Button */}
        <button className="bg-[#F97316] px-4 py-2 rounded-lg font-medium hover:bg-orange-600 transition">
          Apply Service
        </button>

      </div>

    </nav>
  );
};

export default Navbar;