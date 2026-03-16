import { Link } from "react-router-dom";
import JobCard from "../components/JobCard";
import SchemeCard from "../components/SchemeCard";

const Home = () => {
  return (
    <div>

      {/* HERO SECTION */}

      <section className="bg-[#F3F4F6] py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A]">
              Latest Govt Jobs & Schemes Updates
            </h1>

            <p className="mt-4 text-gray-600">
              Stay updated with latest government job notifications
              and government schemes in one place.
            </p>

            <div className="mt-6 flex gap-4">

              <Link to="/jobs">
                <button className="bg-[#F97316] text-white px-6 py-3 rounded-lg">
                  View Latest Jobs
                </button>
              </Link>

              <Link to="/schemes">
                <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg">
                  View Schemes
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


      {/* LATEST JOBS */}

      <section className="py-20 bg-[#F3F4F6]">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">
            Latest Govt Jobs
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <JobCard
              title="SSC GD Recruitment 2026"
              description="50000+ posts expected."
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              link="/jobs/ssc-gd"
            />

            <JobCard
              title="Railway Group D Recruitment"
              description="Indian Railway recruitment coming soon."
              image="https://images.unsplash.com/photo-1581091012184-7f1a4d6d1c6b"
              link="/jobs/railway"
            />

            <JobCard
              title="Police Bharti 2026"
              description="State police recruitment expected soon."
              image="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
              link="/jobs/police"
            />

          </div>


          <div className="text-center mt-12">

            <Link to="/jobs">
              <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg">
                Explore More Jobs
              </button>
            </Link>

          </div>

        </div>

      </section>


      {/* LATEST SCHEMES */}

      <section className="py-20 bg-white">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center text-[#1E3A8A]">
            Latest Government Schemes
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-10">

            <SchemeCard
              title="Ladki Bahin Yojana"
              description="₹1500 monthly financial support."
              image="https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
              link="/schemes/ladki-bahin"
            />

            <SchemeCard
              title="PM Awas Yojana"
              description="Government housing scheme."
              image="https://images.unsplash.com/photo-1590650046871-92c887180603"
              link="/schemes/pm-awas"
            />

            <SchemeCard
              title="Ayushman Bharat Scheme"
              description="₹5 lakh free treatment."
              image="https://images.unsplash.com/photo-1588776814546-ec7e9a94f76d"
              link="/schemes/ayushman"
            />

          </div>


          <div className="text-center mt-12">

            <Link to="/schemes">
              <button className="bg-[#1E3A8A] text-white px-8 py-3 rounded-lg">
                Explore More Schemes
              </button>
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Home;