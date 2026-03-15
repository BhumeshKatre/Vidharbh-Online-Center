import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-[#F3F4F6] py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
              Contact Vidarbha CSC Center
            </h1>

            <p className="mt-4 text-gray-600">
              Need help applying for government services? Visit our CSC center
              or contact us through phone or message.
            </p>

            <div className="mt-6 flex gap-4">

              <a
                href="tel:8459729470"
                className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-orange-600"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/918459729470"
                className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-white"
              >
                WhatsApp
              </a>

            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1521791136064-7986c2920216"
            alt="Contact CSC"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>


      {/* CONTACT INFO + FORM */}

      <section className="py-16">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10">

          {/* Contact Info */}

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Contact Information
            </h2>

            <p className="text-gray-600 mb-4">
              📍 केरीलाल बर्तन भंडार के सामने, दुर्गा चौक गोरेगांव
            </p>

            <p className="text-gray-600 mb-4">
              📞 8459729470
            </p>

            <p className="text-gray-600 mb-4">
              ✉ dev.bhumesh@gmail.com
            </p>

            <p className="text-gray-600">
              🕒 Open: 9:00 AM – 6:00 PM
            </p>

          </div>


          {/* Contact Form */}

          <div className="bg-white p-8 rounded-xl shadow-md">

            <h2 className="text-2xl font-bold text-[#1E3A8A] mb-6">
              Send Message
            </h2>

            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
              ></textarea>

              <button
                type="submit"
                className="bg-[#F97316] text-white py-3 rounded-lg hover:bg-orange-600"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;