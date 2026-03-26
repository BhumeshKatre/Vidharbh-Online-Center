import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Jobs from "./pages/Jobs";
import Scheme from "./pages/Scheme";
import SchemeDetails from "./pages/SchemeDetails";
import PageNotFound from "./pages/PageNotFound";
import JobDetails from "./pages/JobDetails"

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/schemes" element={<Scheme />} />

        <Route path="/schemes/:id" element={<SchemeDetails />} />
        <Route path="/job/:id" element={<JobDetails />} />

        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
