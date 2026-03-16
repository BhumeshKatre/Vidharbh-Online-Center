import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

const BlogDetails = () => {

  const { id } = useParams();
  const blog = blogs.find((item) => item.id === Number(id));

  if (!blog) {
    return <div className="text-center py-20">Blog not found</div>;
  }

  return (
    <div className="bg-[#F3F4F6] min-h-screen py-10">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">

        {/* LEFT SIDE BLOG */}

        <div className="md:col-span-2">

          <div className="bg-white rounded-xl shadow-md overflow-hidden">

            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-[350px] object-cover"
            />

            <div className="p-6">

              <span className="text-sm bg-blue-100 text-[#1E3A8A] px-3 py-1 rounded-full">
                {blog.category}
              </span>

              <h1 className="text-3xl font-bold text-[#1E3A8A] mt-4">
                {blog.title}
              </h1>

              <p className="text-gray-500 mt-2">
                Posted by Vidarbha CSC Center
              </p>

              <div className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
                {blog.content}
              </div>

            </div>

          </div>

        </div>


        {/* RIGHT SIDEBAR */}

        <div className="space-y-6">

          {/* Search */}

          <div className="bg-white p-5 rounded-xl shadow-md">

            <input
              type="text"
              placeholder="Search..."
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A]"
            />

          </div>


          {/* Category */}

          <div className="bg-white p-5 rounded-xl shadow-md">

            <h3 className="font-semibold text-lg mb-4">
              Scheme Directory
            </h3>

            <select className="w-full border p-3 rounded-lg">
              <option>Select Category</option>
              <option>Government Schemes</option>
              <option>CSC Services</option>
              <option>Certificates</option>
              <option>Online Applications</option>
            </select>

          </div>


          {/* Latest Blogs */}

          <div className="bg-white p-5 rounded-xl shadow-md">

            <h3 className="font-semibold text-lg mb-4">
              New Govt Schemes
            </h3>

            <div className="space-y-4">

              {blogs.slice(0, 3).map((item) => (

                <div key={item.id} className="flex gap-3">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />

                  <p className="text-sm text-gray-700">
                    {item.title}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default BlogDetails;