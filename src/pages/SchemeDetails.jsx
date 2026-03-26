import { useParams, useNavigate } from "react-router-dom";
import { schemes } from "../data/schemes";
import { useState, useEffect } from "react";

const SchemeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState("overview");
  const [readingProgress, setReadingProgress] = useState(0);
  const [isSticky, setIsSticky] = useState(false);

  const scheme = schemes.find((item) => item.id === Number(id));

  // Reading progress tracker
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setReadingProgress(progress);
      
      // Sticky sidebar
      setIsSticky(window.scrollY > 300);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(sectionId);
    }
  };

  if (!scheme) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Scheme Not Found
          </h2>
          <p className="text-gray-600 mb-6">
            The scheme you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    );
  }

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "March 2026";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 min-h-screen">
      
      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
        <div 
          className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Header with Modern Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-xs font-semibold tracking-wide uppercase">
                {scheme.category}
              </span>
              <span className="w-1 h-1 bg-white/50 rounded-full"></span>
              <span className="text-xs">Government Scheme</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              {scheme.title}
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              A comprehensive initiative by the Government of India to empower citizens and promote welfare
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Published: {formatDate(scheme.publishedDate)}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Last Updated: {formatDate(scheme.lastUpdated)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white" opacity=".7"></path>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="white"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* Sticky Table of Contents */}
          <div className={`lg:col-span-3 transition-all duration-300 ${isSticky ? 'lg:sticky lg:top-24' : ''}`}>
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {[
                  { id: "overview", label: "Overview", icon: "📋" },
                  { id: "benefits", label: "Key Benefits", icon: "✨" },
                  { id: "eligibility", label: "Eligibility Criteria", icon: "✅" },
                  { id: "documents", label: "Required Documents", icon: "📄" },
                  { id: "application", label: "Application Process", icon: "📝" },
                  { id: "faq", label: "Frequently Asked Questions", icon: "❓" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                      activeSection === item.id
                        ? "bg-blue-50 text-blue-700 font-semibold border-l-4 border-blue-600"
                        : "text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                    }`}
                  >
                    <span>{item.icon}</span>
                    <span className="text-sm">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Overview Section */}
            <div id="overview" className="bg-white rounded-2xl shadow-lg overflow-hidden scroll-mt-24">
              <div className="relative h-96 overflow-hidden">
                <img
                  src={scheme.image}
                  alt={scheme.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex flex-wrap gap-3 mb-3">
                    <span className="bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Active Scheme
                    </span>
                    <span className="bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Central Government
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {[
                    { label: "Financial Assistance", value: scheme.amount || "₹1,500/mo", icon: "💰" },
                    { label: "Total Beneficiaries", value: scheme.beneficiaries || "1.90 Cr", icon: "👥" },
                    { label: "Next Payout", value: scheme.nextPayout || "March 2026", icon: "📅" },
                    { label: "Application Deadline", value: scheme.deadline || "31 March 2026", icon: "⏰" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <p className="text-xs text-gray-600 font-medium uppercase tracking-wide">
                        {stat.label}
                      </p>
                      <p className="text-lg font-bold text-gray-900 mt-1">
                        {stat.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Scheme Overview</h2>
                  {scheme.content.split("\n").map((para, i) => {
                    if (para.startsWith("###")) {
                      return (
                        <h3 key={i} className="text-xl font-semibold text-blue-800 mt-6 mb-3">
                          {para.replace("###", "")}
                        </h3>
                      );
                    }
                    return <p key={i} className="text-gray-700 leading-relaxed mb-4">{para}</p>;
                  })}
                </div>
              </div>
            </div>

            {/* Benefits Section */}
            <div id="benefits" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">✨</span>
                Key Benefits
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {scheme.benefits && scheme.benefits.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl hover:shadow-md transition-shadow">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility Section */}
            <div id="eligibility" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">✅</span>
                Eligibility Criteria
              </h2>
              <div className="space-y-3">
                {scheme.eligibility && scheme.eligibility.map((item, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                    <span className="text-blue-600 font-bold">•</span>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Section */}
            <div id="documents" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">📄</span>
                Required Documents
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {scheme.documents && scheme.documents.map((doc, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <span className="text-gray-700 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Application Process */}
            <div id="application" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">📝</span>
                How to Apply
              </h2>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl">
                  <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Visit Official Portal</h4>
                    <p className="text-gray-600 text-sm">Apply online through the official government portal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div id="faq" className="bg-white rounded-2xl shadow-lg p-8 scroll-mt-24">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-3xl">❓</span>
                Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                <details className="group border-b border-gray-200 pb-4">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-gray-900 hover:text-blue-600">
                    How can I check my application status?
                    <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
                  </summary>
                  <p className="mt-2 text-gray-600 pl-4">You can check your application status by visiting the official portal and entering your application ID.</p>
                </details>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center sticky bottom-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                Apply Now
              </button>
              <button className="px-8 py-3 bg-white text-gray-700 rounded-xl font-semibold border-2 border-gray-300 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Brochure
              </button>
            </div>
          </div>

          {/* Sidebar with Quick Actions */}
          <div className="lg:col-span-3">
            <div className="sticky top-24 space-y-6">
              
              {/* Quick Apply Card */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-6">
                <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
                <p className="text-blue-100 text-sm mb-4">Start your application process now</p>
                <button className="w-full bg-white text-blue-600 py-3 rounded-xl font-semibold hover:shadow-lg transition-all">
                  Apply Online →
                </button>
              </div>

              {/* Helpline Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                  <span>📞</span>
                  Need Help?
                </h3>
                <p className="text-gray-600 text-sm mb-3">Call our helpline for assistance:</p>
                <div className="space-y-2">
                  <p className="text-blue-600 font-bold text-lg">1800-180-1111</p>
                  <p className="text-gray-500 text-xs">Toll Free (24x7)</p>
                </div>
                <hr className="my-4" />
                <div>
                  <p className="text-gray-600 text-sm mb-2">Email Support:</p>
                  <p className="text-blue-600 text-sm">support@government-scheme.gov.in</p>
                </div>
              </div>

              {/* Important Updates */}
              <div className="bg-amber-50 rounded-2xl shadow-lg p-6 border-l-4 border-amber-500">
                <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                  <span>⚠️</span>
                  Important Updates
                </h3>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li>• Last date extended to 31st March 2026</li>
                  <li>• eKYC mandatory for all beneficiaries</li>
                  <li>• New application portal launched</li>
                </ul>
              </div>

              {/* Share Section */}
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-3">Share this Scheme</h3>
                <div className="flex gap-3 justify-center">
                  <button className="p-2 bg-blue-500 text-white rounded-full hover:scale-110 transition">📘</button>
                  <button className="p-2 bg-sky-500 text-white rounded-full hover:scale-110 transition">🐦</button>
                  <button className="p-2 bg-green-500 text-white rounded-full hover:scale-110 transition">💬</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SchemeDetails;