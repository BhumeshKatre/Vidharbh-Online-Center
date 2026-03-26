import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import SchemeCard from "../components/SchemeCard";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-gray-50">
      
      {/* Back to Top Button */}
      {scrolled && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#F97316] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 z-50 hover:scale-110"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#1E3A8A]/10 rounded-full px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F97316] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F97316]"></span>
                </span>
                <span className="text-sm font-semibold text-[#1E3A8A]">Live Updates 24/7</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                <span className="text-[#1E3A8A]">Latest Govt Jobs</span>
                <br />
                <span className="text-[#F97316]">
                  and Schemes Updates
                </span>
              </h1>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                Your one-stop destination for all government job notifications, 
                recruitment updates, and welfare schemes. Stay informed, apply smartly.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/jobs">
                  <button className="group bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                    View Latest Jobs
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
                
                <Link to="/schemes">
                  <button className="group border-2 border-[#1E3A8A] text-[#1E3A8A] px-8 py-3 rounded-lg font-semibold hover:bg-[#1E3A8A] hover:text-white transition-all duration-300 flex items-center gap-2">
                    Explore Schemes
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1E3A8A]">1000+</p>
                  <p className="text-xs text-gray-500">Active Jobs</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1E3A8A]">50+</p>
                  <p className="text-xs text-gray-500">Govt Schemes</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-[#1E3A8A]">2M+</p>
                  <p className="text-xs text-gray-500">Users Served</p>
                </div>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#F97316] to-[#1E3A8A] rounded-2xl blur-2xl opacity-20"></div>
              <img
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984"
                alt="Government Jobs"
                className="rounded-2xl shadow-2xl relative z-10 transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4 z-20 hidden md:block">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Verified Updates</p>
                    <p className="font-bold text-sm">Trusted Source</p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1E3A8A] mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Your trusted partner for government job and scheme information</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Real-time Updates", desc: "Instant notifications for new jobs" },
              { icon: "✅", title: "Verified Information", desc: "100% authentic government sources" },
              { icon: "📱", title: "Mobile Friendly", desc: "Access anytime, anywhere" },
              { icon: "🎯", title: "Smart Filters", desc: "Find relevant opportunities easily" },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                <h3 className="font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LATEST JOBS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wide">Career Opportunities</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4">
              Latest Govt Jobs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the latest government job vacancies across various departments and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <JobCard
              title="SSC GD Recruitment 2026"
              description="50000+ posts expected. Apply online for Constable (GD) in CAPFs, NIA, SSF and Rifleman in Assam Rifles."
              image="https://images.unsplash.com/photo-1551836022-d5d88e9218df"
              link="/jobs/ssc-gd"
            />
            <JobCard
              title="Railway Group D Recruitment"
              description="Indian Railway recruitment coming soon for various posts. 1.2 lakh+ vacancies expected."
              image="https://images.unsplash.com/photo-1581091012184-7f1a4d6d1c6b"
              link="/jobs/railway"
            />
            <JobCard
              title="Police Bharti 2026"
              description="State police recruitment expected soon across multiple states. 25000+ vacancies."
              image="https://images.unsplash.com/photo-1596495577886-d920f1fb7238"
              link="/jobs/police"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/jobs">
              <button className="bg-[#1E3A8A] text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 inline-flex items-center gap-2">
                Explore All Jobs
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* LATEST SCHEMES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wide">Welfare Initiatives</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A8A] mt-2 mb-4">
              Latest Government Schemes
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore welfare schemes designed to empower citizens and improve quality of life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <SchemeCard
              title="Ladki Bahin Yojana"
              description="₹1500 monthly financial support for eligible women beneficiaries across the state."
              image="https://images.unsplash.com/photo-1601597111158-2fceff292cdc"
              link="/schemes/ladki-bahin"
            />
            <SchemeCard
              title="PM Awas Yojana"
              description="Government housing scheme providing affordable homes to urban and rural poor."
              image="https://images.unsplash.com/photo-1590650046871-92c887180603"
              link="/schemes/pm-awas"
            />
            <SchemeCard
              title="Ayushman Bharat Scheme"
              description="₹5 lakh free treatment coverage for secondary and tertiary care hospitalization."
              image="https://images.unsplash.com/photo-1588776814546-ec7e9a94f76d"
              link="/schemes/ayushman"
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/schemes">
              <button className="bg-[#1E3A8A] text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 inline-flex items-center gap-2">
                Explore All Schemes
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gradient-to-r from-[#1E3A8A] to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Stay Updated!</h2>
          <p className="text-blue-100 mb-8">Get latest job alerts and scheme updates directly in your inbox</p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-6 py-3 bg-gray-300 rounded-lg w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-[#F97316]"
            />
            <button className="bg-[#F97316] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-all duration-300">
              Subscribe Now
            </button>
          </div>
          <p className="text-blue-200 text-xs mt-4">No spam, unsubscribe anytime.</p>
        </div>
      </section>

    
    </div>
  );
};

export default Home;