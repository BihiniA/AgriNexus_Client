import React from "react";
import { ClipboardList, Users, GraduationCap, Leaf } from "lucide-react";

const stats = [
  { icon: <ClipboardList size={40} />, value: "200+", label: "Project Completed" },
  { icon: <Users size={40} />, value: "500+", label: "Happy Clients" },
  { icon: <GraduationCap size={40} />, value: "250+", label: "Expert Farmers", highlight: true },
  { icon: <Leaf size={40} />, value: "1300+", label: "Fresh Product" },
];

const StatsSection = () => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-8 bg-gradient-to-r from-green-800 to-green-600 p-12 shadow-xl">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`flex flex-col items-center text-white p-8 rounded-xl transition-all duration-300 transform hover:scale-105 ${
            stat.highlight
              ? "bg-green-900 shadow-lg border-2 border-green-300 scale-110"
              : "bg-green-700 hover:bg-green-800"
          }`}
        >
          <div className="mb-4 text-green-200 bg-green-800 p-4 rounded-full">
            {stat.icon}
          </div>
          <h3 className="text-4xl font-bold mb-2">{stat.value}</h3>
          <p className="text-lg text-green-100">{stat.label}</p>
          <div className="mt-3 h-1 w-16 bg-green-300 rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;