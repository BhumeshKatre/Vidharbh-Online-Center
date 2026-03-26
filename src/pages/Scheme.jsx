import { useState } from "react";
import { schemes } from "../data/schemes";
import { Link } from "react-router-dom";

const Scheme = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [viewMode, setViewMode] = useState("grid"); // grid or list

  // Get unique categories for filter
  const categories = [...new Set(schemes.map(scheme => scheme.category))];

  // Filter schemes based on search and category
  const filteredSchemes = schemes.filter(scheme => {
    const matchesSearch = scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "" || scheme.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("");
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wide">
            Welfare Programs
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Latest Government Schemes
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore comprehensive government schemes and welfare programs designed to empower citizens 
            and improve quality of life across India
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-800 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">{schemes.length}+</p>
              <p className="text-blue-200 text-sm">Active Schemes</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
              <p className="text-blue-200 text-sm">Categories</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">10M+</p>
              <p className="text-blue-200 text-sm">Beneficiaries</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">24/7</p>
              <p className="text-blue-200 text-sm">Support</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Search Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Schemes
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title or description..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              >
                <option value="">All Categories</option>
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                View Mode
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === "grid"
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                  </svg>
                  Grid
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`flex-1 px-4 py-2 rounded-lg transition-all duration-200 ${
                    viewMode === "list"
                      ? "bg-[#1E3A8A] text-white"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  <svg className="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                  List
                </button>
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchTerm || selectedCategory) && (
            <div className="mt-4 text-right">
              <button
                onClick={clearFilters}
                className="text-sm text-[#F97316] hover:text-orange-600 font-medium"
              >
                Clear all filters
              </button>
            </div>
          )}

          {/* Results Count */}
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              Showing {filteredSchemes.length} of {schemes.length} schemes
            </p>
          </div>
        </div>

        {/* Schemes Grid/List View */}
        {filteredSchemes.length > 0 ? (
          <div className={viewMode === "grid" 
            ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
            : "space-y-4"
          }>
            {filteredSchemes.map((scheme) => (
              viewMode === "grid" ? (
                // Grid View Card
                <div
                  key={scheme.id}
                  className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={scheme.image}
                      alt={scheme.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <span className="absolute top-4 left-4 text-xs bg-[#F97316] text-white px-2 py-1 rounded-full">
                      {scheme.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 line-clamp-2">
                      {scheme.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {scheme.description || scheme.content?.substring(0, 120) + "..."}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Link to={`/schemes/${scheme.id}`}>
                        <button className="bg-[#F97316] text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 flex items-center gap-2">
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </Link>
                      <span className="text-xs text-gray-400">
                        Apply Now
                      </span>
                    </div>
                  </div>
                </div>
              ) : (
                // List View Card
                <div
                  key={scheme.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-48 md:h-auto">
                      <img
                        src={scheme.image}
                        alt={scheme.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs bg-[#F97316] text-white px-2 py-1 rounded-full">
                          {scheme.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2">
                        {scheme.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-4">
                        {scheme.description || scheme.content?.substring(0, 200) + "..."}
                      </p>
                      <Link to={`/schemes/${scheme.id}`}>
                        <button className="bg-[#F97316] text-white px-5 py-2 rounded-lg hover:bg-orange-600 transition-all duration-300 text-sm">
                          Learn More →
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            ))}
          </div>
        ) : (
          // Empty State
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No schemes found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any schemes matching your criteria.
            </p>
            <button
              onClick={clearFilters}
              className="bg-[#1E3A8A] text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Quick Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
          <h3 className="text-lg font-bold text-[#1E3A8A] mb-3">Quick Tips:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Check eligibility criteria before applying</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Keep required documents ready</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Apply before the deadline to avoid rejection</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scheme;