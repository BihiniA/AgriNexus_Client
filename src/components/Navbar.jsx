import { useState } from 'react';
import { Plane as Plant, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="bg-gradient-to-r from-green-800 to-green-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Plant className="h-9 w-9 text-green-300 group-hover:text-white transition-colors duration-200" />
              <span className="ml-3 text-2xl font-bold tracking-tight">AgriNexus</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              <Link to="/" className="hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">Home</Link>
              <Link to="/about" className="hover:text-green-200 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">About</Link>
              <Link to="/sign-in" className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">Login</Link>
              <Link to="/sign-up" className="bg-green-600 hover:bg-green-500 px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg">Register</Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md hover:bg-green-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-2 border-t border-green-600 mt-2">
              <Link
                to="/"
                className="block hover:bg-green-600 px-3 py-3 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block hover:bg-green-600 px-3 py-3 rounded-md transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                to="/sign-in"
                className="block bg-green-600 hover:bg-green-500 px-3 py-3 rounded-md mt-4 text-center font-medium transition-colors duration-200 shadow-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}