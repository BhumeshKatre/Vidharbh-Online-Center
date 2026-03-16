import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3F4F6] px-6">

      <div className="text-center max-w-xl">

        {/* 404 Title */}
        <h1 className="text-7xl font-bold text-[#1E3A8A]">
          404
        </h1>

        {/* Heading */}
        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
          Oops! Page Not Found
        </h2>

        {/* Message */}
        <p className="text-gray-600 mt-3">
          The page you are looking for might have been removed,
          renamed or temporarily unavailable.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mt-8">

          <Link to="/">
            <button className="bg-[#1E3A8A] text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition">
              Go Home
            </button>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="border border-[#F97316] text-[#F97316] px-6 py-3 rounded-lg hover:bg-[#F97316] hover:text-white transition"
          >
            Go Back
          </button>

        </div>

      </div>

    </div>
  );
};

export default PageNotFound;