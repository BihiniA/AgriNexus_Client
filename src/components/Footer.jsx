import { Facebook, Twitter, Instagram, Mail, Leaf, MapPin, Phone, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-green-900 text-white relative">
      {/* Decorative top border with leaf pattern */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-green-700 flex justify-around items-center overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <Leaf key={i} className="h-3 w-3 text-green-500 transform rotate-45" />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
        {/* Logo and mission statement */}
        <div className="flex flex-col items-center mb-12 text-center">
          <div className="flex items-center mb-4">
            <Leaf className="h-8 w-8 text-green-400 mr-2" />
            <h2 className="text-3xl font-bold tracking-tight">AgriNexus</h2>
          </div>
          <p className="text-green-300 max-w-2xl text-lg">
            Bridging tradition with innovation to cultivate a sustainable future for generations of farmers.
          </p>
        </div>
        
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-700 pb-2">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              AgriNexus empowers farmers with cutting-edge agricultural solutions, sustainable farming practices, and a 
              community dedicated to sharing knowledge and resources for the future of agriculture.
            </p>
            <div className="mt-6">
              <a href="/about" className="inline-flex items-center text-green-400 hover:text-white">
                Learn more about our mission <span className="ml-2">→</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-700 pb-2">Resources</h3>
            <ul className="space-y-4">
              <li><a href="/" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span> Home</a></li>
              <li><a href="/about" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span> About</a></li>
              <li><a href="/sign-in" className="text-gray-300 hover:text-white flex items-center"><span className="mr-2">→</span> Sign In</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-700 pb-2">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-green-400 mr-3 mt-1" />
                <span className="text-gray-300">123 Harvest Lane<br />Agricultural District, CA 95678</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">contact@agrinexus.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 text-green-400 mr-3" />
                <span className="text-gray-300">Mon-Fri: 8AM - 6PM</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-6 border-b border-green-700 pb-2">Connect With Us</h3>
            <p className="text-gray-300 mb-4">
              Join our community of farmers and agricultural enthusiasts.
            </p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <a href="#" className="flex items-center justify-center bg-green-800 hover:bg-green-700 p-3 rounded-lg text-white transition duration-300">
                <Facebook className="h-6 w-6 mr-2" />
                <span>Facebook</span>
              </a>
              <a href="#" className="flex items-center justify-center bg-green-800 hover:bg-green-700 p-3 rounded-lg text-white transition duration-300">
                <Twitter className="h-6 w-6 mr-2" />
                <span>Twitter</span>
              </a>
              <a href="#" className="flex items-center justify-center bg-green-800 hover:bg-green-700 p-3 rounded-lg text-white transition duration-300">
                <Instagram className="h-6 w-6 mr-2" />
                <span>Instagram</span>
              </a>
              <a href="#" className="flex items-center justify-center bg-green-800 hover:bg-green-700 p-3 rounded-lg text-white transition duration-300">
                <Mail className="h-6 w-6 mr-2" />
                <span>Newsletter</span>
              </a>
            </div>
            <div>
              <a href="/contact" className="block bg-green-600 hover:bg-green-500 text-center py-3 rounded-lg font-medium transition duration-300">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
        
        {/* Copyright and additional links */}
        <div className="mt-10 pt-6 border-t border-green-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} AgriNexus. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/sitemap" className="hover:text-white">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}