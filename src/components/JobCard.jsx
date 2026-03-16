import { Link } from "react-router-dom";

const JobCard = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition">

      <img
        src={image}
        alt={title}
        className="h-40 w-full object-cover"
      />

      <div className="p-6">

        <h3 className="text-xl font-semibold text-[#1E3A8A]">
          {title}
        </h3>

        <p className="text-gray-600 mt-2">
          {description}
        </p>

        <Link to={link}>
          <button className="mt-4 bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-600">
            View Details
          </button>
        </Link>

      </div>

    </div>
  );
};

export default JobCard;