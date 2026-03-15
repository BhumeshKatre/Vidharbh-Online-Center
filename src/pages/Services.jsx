import { services } from "../data/services";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen">

      {/* HERO SECTION */}

      <section className="bg-[#F3F4F6] py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
              Our CSC Services
            </h1>

            <p className="mt-4 text-gray-600">
              We provide multiple government services through our CSC center.
              Apply for PAN Card, Ayushman Card, Voter ID, Income Certificate,
              Caste Certificate and many other services easily.
            </p>

            <div className="mt-6 flex gap-4">

              <button className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                Apply for Service
              </button>

              <Link to="/contact">
                <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition">
                  Contact Center
                </button>
              </Link>

            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789"
            className="rounded-xl shadow-lg"
            alt="CSC services"
          />

        </div>

      </section>


      {/* SERVICES GRID */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center text-[#1E40AF] mb-10">
          Popular Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service) => (

            <div
              key={service.id}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-2xl hover:-translate-y-1 transition duration-300"
            >

              <h2 className="text-xl font-semibold text-[#1E40AF]">
                {service.name}
              </h2>

              <p className="text-gray-600 mt-2">
                {service.description}
              </p>

              <button className="mt-4 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Apply Now
              </button>

            </div>

          ))}

        </div>

      </div>


      {/* HOW IT WORKS */}

      <section className="bg-white py-16">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold text-[#1E40AF]">
            How Our Service Works
          </h2>

          <div className="grid md:grid-cols-3 gap-10 mt-10">

            <div>
              <h3 className="font-semibold text-lg">
                1. Choose Service
              </h3>
              <p className="text-gray-600 mt-2">
                Select the service you want to apply for.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                2. Submit Documents
              </h3>
              <p className="text-gray-600 mt-2">
                Provide required documents at our CSC center.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg">
                3. Get Service
              </h3>
              <p className="text-gray-600 mt-2">
                Your application will be processed quickly.
              </p>
            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Services;