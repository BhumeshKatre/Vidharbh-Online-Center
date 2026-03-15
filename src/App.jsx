import { Routes, Route } from "react-router-dom"
import "./App.css"

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
// import Services from "./pages/Services"
// import Blogs from "./pages/Blogs"
// import BlogDetails from "./pages/BlogDetails"
// import Contact from "./pages/Contact"

function App() {
  return (
    <div>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        {/* <Route path="/services" element={<Services />} />

        <Route path="/blogs" element={<Blogs />} />

        <Route path="/blog/:id" element={<BlogDetails />} />

        <Route path="/contact" element={<Contact />} /> */}

      </Routes>

    </div>
  )
}

export default App