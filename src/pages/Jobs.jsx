import { useState } from "react";
import { JobsData } from "../data/JobsData";
import { Link } from "react-router-dom";

const Jobs = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOrganization, setSelectedOrganization] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [viewMode, setViewMode] = useState("table"); // table or card
  const [sortBy, setSortBy] = useState("lastDate"); // title, organization, lastDate

  // Get unique organizations for filter dropdown
  const organizations = [...new Set(JobsData.map(job => job.organization))];

  // Filter jobs based on search term, organization, and status
  const filteredJobs = JobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.organization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesOrganization = selectedOrganization === "" || job.organization === selectedOrganization;
    
    // Status filter based on last date
    let matchesStatus = true;
    if (selectedStatus === "active") {
      const today = new Date();
      const lastDate = new Date(job.lastDate);
      matchesStatus = lastDate >= today;
    } else if (selectedStatus === "expired") {
      const today = new Date();
      const lastDate = new Date(job.lastDate);
      matchesStatus = lastDate < today;
    }
    
    return matchesSearch && matchesOrganization && matchesStatus;
  });

  // Sort jobs
  const sortedJobs = [...filteredJobs].sort((a, b) => {
    if (sortBy === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortBy === "organization") {
      return a.organization.localeCompare(b.organization);
    } else if (sortBy === "lastDate") {
      return new Date(a.lastDate) - new Date(b.lastDate);
    }
    return 0;
  });

  // Clear all filters
  const clearFilters = () => {
    setSearchTerm("");
    setSelectedOrganization("");
    setSelectedStatus("");
    setSortBy("lastDate");
  };

  // Check if job is active or expired
  const isJobActive = (lastDate) => {
    const today = new Date();
    const jobDate = new Date(lastDate);
    return jobDate >= today;
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-[#F97316] font-semibold text-sm uppercase tracking-wide">
            Career Opportunities
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] mt-2 mb-4">
            Latest Government Jobs
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest government job vacancies across various departments and organizations.
            Apply online before the deadline.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-800 rounded-2xl p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">{JobsData.length}+</p>
              <p className="text-blue-200 text-sm">Total Jobs</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {JobsData.filter(job => isJobActive(job.lastDate)).length}
              </p>
              <p className="text-blue-200 text-sm">Active Jobs</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">
                {JobsData.reduce((sum, job) => sum + (parseInt(job.posts) || 0), 0).toLocaleString()}
              </p>
              <p className="text-blue-200 text-sm">Total Vacancies</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold text-white">50+</p>
              <p className="text-blue-200 text-sm">Organizations</p>
            </div>
          </div>
        </div>

        {/* FILTER SECTION */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
            
            {/* Search Input */}
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Jobs
              </label>
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search by title or organization..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
                />
              </div>
            </div>

            {/* Organization Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Organization
              </label>
              <select
                value={selectedOrganization}
                onChange={(e) => setSelectedOrganization(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              >
                <option value="">All Organizations</option>
                {organizations.map((org, index) => (
                  <option key={index} value={org}>
                    {org}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              >
                <option value="">All Jobs</option>
                <option value="active">Active</option>
                <option value="expired">Expired</option>
              </select>
            </div>

            {/* Sort By */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent outline-none"
              >
                <option value="lastDate">Last Date (Soonest First)</option>
                <option value="title">Job Title (A-Z)</option>
                <option value="organization">Organization (A-Z)</option>
              </select>
            </div>
          </div>

          {/* View Mode Toggle and Clear Filters */}
          <div className="flex flex-wrap justify-between items-center mt-6 pt-4 border-t border-gray-200">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("table")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  viewMode === "table"
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                Table View
              </button>
              <button
                onClick={() => setViewMode("card")}
                className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                  viewMode === "card"
                    ? "bg-[#1E3A8A] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Card View
              </button>
            </div>
            
            {(searchTerm || selectedOrganization || selectedStatus) && (
              <button
                onClick={clearFilters}
                className="text-sm text-[#F97316] hover:text-orange-600 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>

          {/* Filter Results Info */}
          <div className="mt-4 text-sm text-gray-600">
            Showing {sortedJobs.length} of {JobsData.length} jobs
          </div>
        </div>

        {/* JOBS DISPLAY */}
        {sortedJobs.length > 0 ? (
          viewMode === "table" ? (
            // Table View
            <div className="bg-white rounded-2xl shadow-lg overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead className="bg-gradient-to-r from-[#1E3A8A] to-blue-800 text-white">
                  <tr>
                    <th className="p-4 text-left">Job Title</th>
                    <th className="p-4 text-left">Organization</th>
                    <th className="p-4 text-left">Posts</th>
                    <th className="p-4 text-left">Last Date</th>
                    <th className="p-4 text-center">Status</th>
                    <th className="p-4 text-center">Action</th>
                    <th className="p-4 text-center">Apply Link</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedJobs.map((job) => {
                    const active = isJobActive(job.lastDate);
                    return (
                      <tr key={job.id} className="border-b hover:bg-gray-50 transition">
                        <td className="p-4 font-semibold text-[#1E3A8A]">
                          {job.title}
                        </td>
                        <td className="p-4 text-gray-700">
                          {job.organization}
                        </td>
                        <td className="p-4 text-gray-700">
                          {job.posts}
                        </td>
                        <td className="p-4">
                          <span className={active ? "text-red-500 font-medium" : "text-gray-400"}>
                            {job.lastDate}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold ${
                            active 
                              ? "bg-green-100 text-green-800" 
                              : "bg-gray-100 text-gray-600"
                          }`}>
                            {active ? "Active" : "Expired"}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <Link to={job.link}>
                            <button className="bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200 text-sm">
                              View Details
                            </button>
                          </Link>
                        </td>
                        <td className="p-4 text-center">
                          {active ? (
                            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-200 text-sm">
                                Apply Now
                              </button>
                            </a>
                          ) : (
                            <button className="bg-gray-300 text-gray-500 px-4 py-2 rounded-lg cursor-not-allowed text-sm">
                              Closed
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          ) : (
            // Card View
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedJobs.map((job) => {
                const active = isJobActive(job.lastDate);
                return (
                  <div key={job.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="p-6">
                      <div className="flex justify-between items-start mb-3">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                          active 
                            ? "bg-green-100 text-green-800" 
                            : "bg-gray-100 text-gray-600"
                        }`}>
                          {active ? "Active" : "Expired"}
                        </span>
                        <span className="text-xs text-gray-400">
                          {job.posts} posts
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-2 line-clamp-2">
                        {job.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-3">
                        {job.organization}
                      </p>
                      
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className={active ? "text-red-500 font-medium" : "text-gray-400"}>
                            Last Date: {job.lastDate}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Link to={job.link} className="flex-1">
                          <button className="w-full bg-[#F97316] text-white px-3 py-2 rounded-lg hover:bg-orange-600 transition duration-200 text-sm">
                            View Details
                          </button>
                        </Link>
                        {active ? (
                          <a href={job.applyLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                            <button className="w-full bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-green-700 transition duration-200 text-sm">
                              Apply
                            </button>
                          </a>
                        ) : (
                          <button className="flex-1 bg-gray-300 text-gray-500 px-3 py-2 rounded-lg cursor-not-allowed text-sm">
                            Closed
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        ) : (
          // Empty State
          <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-4">
              We couldn't find any jobs matching your criteria.
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
          <h3 className="text-lg font-bold text-[#1E3A8A] mb-3">Application Tips:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Read the official notification carefully before applying</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Keep all required documents scanned and ready</p>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-[#F97316] text-xl">✓</span>
              <p className="text-sm text-gray-700">Apply before the last date to avoid last-minute issues</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;