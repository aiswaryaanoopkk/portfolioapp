import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import About from './pages/About.jsx'
import './App.css'
import Contact from './pages/Contact.jsx'
import Project from './pages/Project.jsx'
import Education from './pages/Education.jsx'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4">
          <ul className="flex space-x-6 py-4 justify-center">
            <li>
              <Link
                to="/about"
                className="hover:text-yellow-400 transition duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className="hover:text-yellow-400 transition duration-300"
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="hover:text-yellow-400 transition duration-300"
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-yellow-400 transition duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content with padding to avoid overlap */}
      <div className="pt-20">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App