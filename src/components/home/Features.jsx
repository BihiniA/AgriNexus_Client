import { Leaf, Sun, Droplets } from 'lucide-react';

export default function Services() {
  return (
    <div className="py-24 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-green-50 to-transparent opacity-70"></div>
      <div className="absolute -left-16 top-1/4 w-32 h-32 rounded-full bg-green-100 opacity-30"></div>
      <div className="absolute -right-16 bottom-1/4 w-48 h-48 rounded-full bg-green-100 opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section heading with decorative lines */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-green-300"></div>
          <h2 className="text-4xl font-bold text-center mx-4 text-gray-800 relative">
            Our Services
            <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-green-500 rounded-full"></span>
          </h2>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-green-300"></div>
        </div>
        
        {/* Services grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {/* Organic Farming Card */}
          <div className="group relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-300 to-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="inline-flex items-center justify-center p-5 bg-green-100 rounded-full mb-6 group-hover:bg-green-200 transition-colors duration-300">
              <Leaf className="h-10 w-10 text-green-600 group-hover:text-green-700 transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Organic Farming</h3>
            <p className="text-gray-600 mb-4">Sustainable practices for healthier crops and environment</p>
          </div>
          
          {/* Smart Agriculture Card */}
          <div className="group relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="inline-flex items-center justify-center p-5 bg-yellow-100 rounded-full mb-6 group-hover:bg-yellow-200 transition-colors duration-300">
              <Sun className="h-10 w-10 text-yellow-600 group-hover:text-yellow-700 transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Smart Agriculture</h3>
            <p className="text-gray-600 mb-4">Technology-driven solutions for optimal farm management</p>
          </div>
          
          {/* Water Management Card */}
          <div className="group relative bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-300 to-green-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            
            <div className="inline-flex items-center justify-center p-5 bg-blue-100 rounded-full mb-6 group-hover:bg-blue-200 transition-colors duration-300">
              <Droplets className="h-10 w-10 text-blue-600 group-hover:text-blue-700 transition-colors duration-300" />
            </div>
            
            <h3 className="text-2xl font-semibold mb-3 text-gray-800">Water Management</h3>
            <p className="text-gray-600 mb-4">Efficient irrigation systems for water conservation</p>
          </div>
        </div>
      </div>
    </div>
  );
}