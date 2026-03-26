import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { JobsData } from '../data/JobsData';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('details');

  useEffect(() => {
    // Find job by id
    const foundJob = JobsData.find(job => job.id === Number(id) || job.id === id);
    if (foundJob) {
      setJob(foundJob);
    }
    setLoading(false);
  }, [id]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#F97316] border-t-transparent"></div>
          <p className="mt-4 text-gray-600">Loading job details...</p>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Job Not Found</h2>
          <p className="text-gray-600 mb-6">
            The job you're looking for doesn't exist or has been removed.
          </p>
          <button
            onClick={() => navigate('/jobs')}
            className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-all duration-300"
          >
            ← Back to Jobs
          </button>
        </div>
      </div>
    );
  }

  const isJobActive = () => {
    const today = new Date();
    const lastDate = new Date(job.lastDate);
    return lastDate >= today;
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen pb-16">
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <button
          onClick={() => navigate('/jobs')}
          className="group flex items-center gap-2 text-[#1E3A8A] hover:text-[#F97316] transition-colors duration-300"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Jobs
        </button>
      </div>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1E3A8A] to-blue-800 text-white py-16 mt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                isJobActive() 
                  ? "bg-green-500 text-white" 
                  : "bg-gray-500 text-white"
              }`}>
                {isJobActive() ? "Active" : "Expired"}
              </span>
              <span className="text-blue-200 text-sm">{job.organization}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              {job.title}
            </h1>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>Total Posts: {job.posts}</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>Last Date: {formatDate(job.lastDate)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-12">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#F3F4F6"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Tabs */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="border-b border-gray-200">
                <div className="flex">
                  {[
                    { id: 'details', label: 'Job Details', icon: '📋' },
                    { id: 'eligibility', label: 'Eligibility', icon: '✅' },
                    { id: 'howToApply', label: 'How to Apply', icon: '📝' }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-6 py-4 text-sm font-medium transition-all duration-200 ${
                        activeTab === tab.id
                          ? 'text-[#F97316] border-b-2 border-[#F97316] bg-orange-50'
                          : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <span>{tab.icon}</span>
                        {tab.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="p-6 md:p-8">
                {activeTab === 'details' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Job Description</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {job.description || "This is a prestigious government job opportunity. Interested candidates meeting the eligibility criteria can apply online through the official portal before the last date."}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Vacancy Details</h3>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Total Posts</p>
                            <p className="text-lg font-bold text-gray-800">{job.posts}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Organization</p>
                            <p className="text-lg font-bold text-gray-800">{job.organization}</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Application Mode</p>
                            <p className="text-lg font-bold text-gray-800">Online</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Job Location</p>
                            <p className="text-lg font-bold text-gray-800">Across India</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Important Dates</h3>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Application Start Date</span>
                          <span className="font-semibold text-gray-800">{formatDate(job.startDate || '2026-03-01')}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="text-gray-600">Application Last Date</span>
                          <span className={`font-semibold ${isJobActive() ? 'text-red-500' : 'text-gray-400'}`}>
                            {formatDate(job.lastDate)}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'eligibility' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Educational Qualification</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-[#F97316]">•</span>
                          <span className="text-gray-700">Bachelor's Degree from a recognized university</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#F97316]">•</span>
                          <span className="text-gray-700">Minimum 50% marks in graduation (45% for reserved categories)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-[#F97316]">•</span>
                          <span className="text-gray-700">Computer knowledge preferred</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Age Limit</h3>
                      <div className="bg-gray-50 rounded-xl p-4">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <p className="text-sm text-gray-500">Minimum Age</p>
                            <p className="text-lg font-bold text-gray-800">18 Years</p>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Maximum Age</p>
                            <p className="text-lg font-bold text-gray-800">35 Years</p>
                          </div>
                        </div>
                        <p className="text-sm text-gray-500 mt-3">*Age relaxation applicable as per government norms</p>
                      </div>
                    </div>
                  </div>
                )}
                
                {activeTab === 'howToApply' && (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#1E3A8A] mb-4">Application Process</h3>
                      <ol className="space-y-4">
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                          <span className="text-gray-700">Visit the official recruitment portal</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                          <span className="text-gray-700">Register with your email and mobile number</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                          <span className="text-gray-700">Fill the application form with accurate details</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                          <span className="text-gray-700">Upload required documents (photo, signature, certificates)</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">5</span>
                          <span className="text-gray-700">Pay application fee online</span>
                        </li>
                        <li className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 bg-[#F97316] text-white rounded-full flex items-center justify-center text-sm font-bold">6</span>
                          <span className="text-gray-700">Submit and take a printout for future reference</span>
                        </li>
                      </ol>
                    </div>
                    
                    <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                      <h4 className="font-semibold text-amber-800 mb-2">⚠️ Important Note</h4>
                      <p className="text-sm text-amber-700">
                        Read the official notification carefully before applying. Keep all documents ready to avoid last-minute issues.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Required Documents Section */}
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-xl font-bold text-[#1E3A8A] mb-4 flex items-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Required Documents
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  "10th & 12th Mark Sheets",
                  "Graduation Degree Certificate",
                  "Caste Certificate (if applicable)",
                  "Domicile Certificate",
                  "Aadhar Card / ID Proof",
                  "Passport Size Photograph",
                  "Signature",
                  "Experience Certificate (if any)"
                ].map((doc, i) => (
                  <div key={i} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{doc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* Application Card */}
            <div className="bg-gradient-to-r from-[#1E3A8A] to-blue-800 text-white rounded-2xl shadow-xl p-6 sticky top-6">
              <h3 className="text-xl font-bold mb-3">Ready to Apply?</h3>
              <p className="text-blue-100 text-sm mb-4">
                Don't miss this opportunity. Apply before the deadline.
              </p>
              
              {isJobActive() ? (
                <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
                  <button className="w-full bg-[#F97316] text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 flex items-center justify-center gap-2">
                    Apply Now
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </a>
              ) : (
                <button className="w-full bg-gray-500 text-white py-3 rounded-xl font-semibold cursor-not-allowed">
                  Application Closed
                </button>
              )}
              
              <div className="mt-4 pt-4 border-t border-blue-700">
                <p className="text-xs text-blue-200 text-center">
                  Last Date: {formatDate(job.lastDate)}
                </p>
              </div>
            </div>
            
            {/* Fee Structure */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Application Fee
              </h3>
              <div className="space-y-2">
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">General/OBC</span>
                  <span className="font-semibold text-gray-800">₹500/-</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">SC/ST/PWD</span>
                  <span className="font-semibold text-gray-800">₹250/-</span>
                </div>
                <div className="flex justify-between p-2 bg-gray-50 rounded">
                  <span className="text-gray-600">Female Candidates</span>
                  <span className="font-semibold text-gray-800">₹250/-</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">*Fee can be paid online through debit card/credit card/net banking</p>
            </div>
            
            {/* Important Links */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                <svg className="w-5 h-5 text-[#F97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
                Important Links
              </h3>
              <div className="space-y-3">
                <a href="#" className="block text-sm text-[#1E3A8A] hover:text-[#F97316] transition">
                  📄 Official Notification
                </a>
                <a href="#" className="block text-sm text-[#1E3A8A] hover:text-[#F97316] transition">
                  🌐 Apply Online
                </a>
                <a href="#" className="block text-sm text-[#1E3A8A] hover:text-[#F97316] transition">
                  📋 Syllabus
                </a>
                <a href="#" className="block text-sm text-[#1E3A8A] hover:text-[#F97316] transition">
                  📝 Previous Papers
                </a>
              </div>
            </div>
            
            {/* Helpline */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-200">
              <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                <span>📞</span>
                Need Help?
              </h3>
              <p className="text-sm text-gray-600 mb-2">For any queries, contact:</p>
              <p className="text-[#1E3A8A] font-bold">1800-180-1111</p>
              <p className="text-xs text-gray-500">Toll Free (9 AM - 6 PM)</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#F97316] text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 hover:scale-110"
        aria-label="Back to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </div>
  );
};

export default JobDetails;