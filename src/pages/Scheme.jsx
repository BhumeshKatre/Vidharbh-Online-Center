import { schemes } from "../data/schemes";
import { Link } from "react-router-dom";

const Scheme = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center text-[#1E3A8A]">
          Latest Government Schemes Updates
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Explore latest government schemes and welfare programs.
        </p>

        {/* SCHEME GRID */}

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {schemes.map((scheme) => (

            <div
              key={scheme.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition"
            >

              <img
                src={scheme.image}
                alt={scheme.title}
                className="h-40 w-full object-cover"
              />

              <div className="p-6">

                <span className="text-sm bg-blue-100 text-[#1E3A8A] px-3 py-1 rounded-full">
                  {scheme.category}
                </span>

                <h3 className="text-xl font-semibold text-[#1E3A8A] mt-3">
                  {scheme.title}
                </h3>

                <p className="text-gray-600 mt-2">
                  {scheme.description}
                </p>

                <Link to={`/schemes/${scheme.id}`}>
                  <button className="mt-4 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                    View Details
                  </button>

                </Link>

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
};

export default Scheme;