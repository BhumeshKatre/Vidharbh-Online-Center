import { useParams } from "react-router-dom";
import { schemes } from "../data/schemes";

const SchemeDetails = () => {

  const { id } = useParams();
  console.log(id);

  const scheme = schemes.find((item) => item.id === Number(id));

  if (!scheme) {
    return <div className="text-center py-20">Scheme not found</div>;
  }

  return (
    <div className="bg-[#F3F4F6] min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT CONTENT */}

        <div className="md:col-span-2">

          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <img
              src={scheme.image}
              alt={scheme.title}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-6">

              <span className="text-sm bg-blue-100 text-[#1E3A8A] px-3 py-1 rounded-full">
                {scheme.category}
              </span>

              <h1 className="text-3xl font-bold text-[#1E3A8A] mt-4">
                {scheme.title}
              </h1>

              <p className="text-gray-500 mt-2">
                Updated by Vidarbha CSC Center
              </p>

              <div className="mt-6 text-gray-700 whitespace-pre-line">
                {scheme.content}
              </div>

              {/* Benefits */}

              <h2 className="text-2xl font-semibold text-[#1E3A8A] mt-8">
                Benefits
              </h2>

              <ul className="list-disc pl-6 mt-3">
                {scheme.benefits.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              {/* Documents */}

              <h2 className="text-2xl font-semibold text-[#1E3A8A] mt-8">
                Required Documents
              </h2>

              <ul className="list-disc pl-6 mt-3">
                {scheme.documents.map((doc, index) => (
                  <li key={index}>{doc}</li>
                ))}
              </ul>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default SchemeDetails;