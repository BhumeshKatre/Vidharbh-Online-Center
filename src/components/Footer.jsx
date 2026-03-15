import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#1E3A8A] text-white mt-0">

      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">
            Vidarbha CSC Center
          </h2>

          <p className="text-gray-300 text-sm">
            We provide government services like PAN Card, Ayushman Card,
            Voter ID, certificates and more through CSC center.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Quick Links
          </h3>

          <ul className="space-y-2 text-gray-300">

            <li>
              <Link to="/" className="hover:text-orange-400">
                Home
              </Link>
            </li>

            <li>
              <Link to="/services" className="hover:text-orange-400">
                Services
              </Link>
            </li>

            <li>
              <Link to="/blogs" className="hover:text-orange-400">
                Blogs
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-orange-400">
                Contact
              </Link>
            </li>

          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Popular Services
          </h3>

          <ul className="space-y-2 text-gray-300">
            <li>PAN Card Apply</li>
            <li>Ayushman Card</li>
            <li>Voter ID</li>
            <li>Income Certificate</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">
            Contact
          </h3>

          <p className="text-gray-300 text-sm">
            केरीलाल बर्तन भंडार के सामने <br />
            दुर्गा चौक गोरेगांव
          </p>

          <p className="mt-3 text-gray-300">
            📞 8459729470
          </p>
        </div>

      </div>

      {/* Bottom Bar */}

      <div className="border-t border-blue-800 text-center py-4 text-gray-300 text-sm">

        © 2026 Vidarbha CSC Center. All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;