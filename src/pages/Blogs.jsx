/* @import "tailwindcss"; */
import { useState } from "react";
import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

const Blogs = () => {

  const [search, setSearch] = useState("");

  const filteredBlogs = blogs.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#F3F4F6] min-h-screen">

      {/* HERO SECTION */}

     
      <section className="bg-[#F3F4F6] py-20">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-10">

          {/* LEFT CONTENT */}

          <div>

            <h1 className="text-4xl md:text-5xl font-bold text-[#1E3A8A] leading-tight">
              CSC Service Guides & Blogs
            </h1>

            <p className="mt-4 text-gray-600">
              Learn step-by-step guides for applying PAN Card, Ayushman Card,
              Voter ID and other government services through CSC centers.
            </p>

            <div className="mt-6 flex gap-4">

              <Link to="/services">
                <button className="bg-[#F97316] text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition">
                  Apply Service
                </button>
              </Link>

              <button className="border border-[#1E3A8A] text-[#1E3A8A] px-6 py-3 rounded-lg hover:bg-[#1E3A8A] hover:text-white transition">
                Read Blogs
              </button>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="CSC Blog Guides"
            className="rounded-xl shadow-lg"
          />

        </div>

      </section>


      {/* SEARCH BAR */}

      <div className="max-w-7xl mx-auto px-6 py-10 flex justify-center">

        <input
          type="text"
          placeholder="Search service guides..."
          className="px-5 py-3 rounded-lg border border-gray-300 w-full md:w-96 focus:outline-none focus:ring-2 focus:ring-[#1E40AF]"
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      {/* BLOG GRID */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        {filteredBlogs.length === 0 ? (

          <p className="text-center text-gray-500">
            No blogs found.
          </p>

        ) : (

          <div className="grid md:grid-cols-3 gap-8">

            {filteredBlogs.map((blog) => (

              <div
                key={blog.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition duration-300"
              >

                <img
                  src={blog.image}
                  alt={blog.title}
                  className="h-48 w-full object-cover"
                />

                <div className="p-5">

                  <h2 className="text-lg font-semibold text-[#1E40AF]">
                    {blog.title}
                  </h2>

                  <p className="text-gray-600 text-sm mt-2">
                    {blog.description}
                  </p>

                  <Link
                    to={`/blog/${blog.id}`}
                    className="inline-block mt-4 text-[#F97316] font-semibold hover:underline"
                  >
                    Read Full Guide →
                  </Link>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </div>
  );
};

export default Blogs;