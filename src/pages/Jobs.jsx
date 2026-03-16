import { jobs } from "../data/jobs";
import { Link } from "react-router-dom";

const Jobs = () => {
  return (
    <div className="bg-[#F3F4F6] min-h-screen py-16">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-[#1E3A8A] text-center">
          Latest Government Jobs
        </h1>

        <p className="text-center text-gray-600 mt-3">
          Check latest government job notifications, recruitment updates and application details.
        </p>


        {/* JOB TABLE */}

        <div className="mt-10 bg-white rounded-xl shadow-lg overflow-hidden">

          <table className="w-full">

            <thead className="bg-[#1E3A8A] text-white">

              <tr>

                <th className="p-4 text-left">Job Title</th>
                <th className="p-4 text-left">Organization</th>
                <th className="p-4 text-left">Posts</th>
                <th className="p-4 text-left">Last Date</th>
                <th className="p-4 text-center">Action</th>

              </tr>

            </thead>

            <tbody>

              {jobs.map((job) => (

                <tr
                  key={job.id}
                  className="border-b hover:bg-gray-50"
                >

                  <td className="p-4 font-semibold text-[#1E3A8A]">
                    {job.title}
                  </td>

                  <td className="p-4">
                    {job.organization}
                  </td>

                  <td className="p-4">
                    {job.posts}
                  </td>

                  <td className="p-4 text-red-500 font-medium">
                    {job.lastDate}
                  </td>

                  <td className="p-4 text-center">

                    <Link to={job.link}>

                      <button className="bg-[#F97316] text-white px-4 py-2 rounded-lg hover:bg-orange-600">
                        View
                      </button>

                    </Link>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Jobs;