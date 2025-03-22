import { ArrowRight } from 'lucide-react';
import HeroImage from '../../assets/Home/Hero.jpg';

export default function Hero() {
  return (
    <div className="relative h-[80vh] overflow-hidden">
      {/* Background image with overlay and animation */}
      <div
        className="absolute inset-0 bg-cover bg-center transform scale-105 hover:scale-100 transition-transform duration-10000"
        style={{ 
          backgroundImage: `url(${HeroImage})`,
          animation: 'subtle-zoom 20s infinite alternate'
        }}
      />
      
      {/* Multiple overlay elements for creative effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-700/10 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-green-800/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-green-800/30 to-transparent" />
      
      {/* Side borders */}
      <div className="absolute top-0 left-0 w-16 h-full bg-gradient-to-r from-green-800/20 to-transparent" />
      <div className="absolute top-0 right-0 w-16 h-full bg-gradient-to-l from-green-800/20 to-transparent" />
      
      {/* Small animated particles */}
      <div className="absolute w-2 h-2 bg-green-400/30 rounded-full top-1/4 left-1/4 animate-pulse" />
      <div className="absolute w-3 h-3 bg-green-300/20 rounded-full top-3/4 left-1/3 animate-ping" />
      <div className="absolute w-2 h-2 bg-green-200/30 rounded-full top-1/2 right-1/4 animate-bounce" />
      <div className="absolute w-4 h-4 bg-green-100/20 rounded-full top-1/3 right-1/3 animate-pulse" />
      <div className="absolute w-2 h-2 bg-green-500/30 rounded-full bottom-1/4 right-1/4 animate-ping" />
      
      {/* Content container */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-white transform hover:translate-x-2 transition-transform duration-500 backdrop-blur-sm bg-black/10 p-6 rounded-lg border border-green-500/20 shadow-lg">
          <h1 className="text-5xl font-bold mb-5 tracking-tight leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-green-200 drop-shadow-md">
          Effortless Greenhouse Management<br />at Your Fingertips
          </h1>
          
          <p className="text-lg mb-7 max-w-2xl text-green-50 drop-shadow-lg">
            Empowering greenhouse farmers with innovative agricultural solutions that preserve our planet while maximizing yields
          </p>
          
          <button className="group bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 px-7 py-3 rounded-lg flex items-center transform transition-all duration-300 hover:translate-x-1 hover:shadow-lg hover:shadow-green-600/30 focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-green-900/30">
            <span className="mr-2 font-medium">Learn More</span>
            <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>

      {/* Custom animation styles */}
      <style>{`
        @keyframes subtle-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}