import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-[#F3F4F6] py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
              Vidarbha Online CSC Center
            </h1>

            <p className="mt-4 text-gray-600">
              Apply for government services easily. PAN Card, Ayushman Card,
              Voter ID, Certificates and more services available here.
            </p>

            <div className="mt-6 flex gap-4">

              <Link to="/services">
                <button className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-orange-600">
                  Apply Service
                </button>
              </Link>

              <Link to="/blogs">
                <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg">
                  Read Blogs
                </button>
              </Link>

            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>

      
      {/* Services Section  */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">
            Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold">PAN Card Apply</h3>
              <p className="text-gray-600 mt-2">
                Apply new PAN card easily through CSC center.
              </p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold">Ayushman Card</h3>
              <p className="text-gray-600 mt-2">
                Register for Ayushman Bharat health scheme.
              </p>
            </div>

            <div className="p-6 shadow-lg rounded-xl">
              <h3 className="text-xl font-semibold">Voter ID</h3>
              <p className="text-gray-600 mt-2">
                Apply new voter ID card online.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Our CSC Center */}
      <section className="py-20 bg-[#F3F4F6]">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#1E3A8A]">
            Why Choose Our CSC Center
          </h2>

          <div className="grid md:grid-cols-4 gap-8 mt-10">

            <div>
              <h3 className="font-semibold text-lg">Fast Service</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Trusted Center</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Secure Documents</h3>
            </div>

            <div>
              <h3 className="font-semibold text-lg">Expert Support</h3>
            </div>

          </div>

        </div>

      </section>

      {/* Latest Blogs Section */}
      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">
            Latest Blogs
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <div className="shadow-lg rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                How to Apply PAN Card Online
              </h3>
            </div>

            <div className="shadow-lg rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                Ayushman Card Registration Guide
              </h3>
            </div>

            <div className="shadow-lg rounded-xl p-5">
              <h3 className="font-semibold text-lg">
                Voter ID Apply Process
              </h3>
            </div>

          </div>

        </div>

      </section>

      {/* Call To Action  */}
      {/* <section className="bg-[#1E40AF] py-20">

        <div className="max-w-7xl mx-auto px-6 text-center text-white">

          <h2 className="text-3xl md:text-4xl font-bold">
            Need Government Services?
          </h2>

          <p className="mt-4 text-gray-200 max-w-2xl mx-auto">
            Apply for PAN Card, Ayushman Card, Voter ID, Income Certificate
            and many other government services at our Vidarbha CSC Center.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a href="/services">
              <button className="bg-[#F97316] px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                Apply Service
              </button>
            </a>

            <a href="/contact">
              <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#1E40AF] transition">
                Contact Center
              </button>
            </a>

          </div>

        </div>

      </section> */}
    </div>
  )
}

export default Home