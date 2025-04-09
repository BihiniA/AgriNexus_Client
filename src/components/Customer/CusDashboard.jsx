import React, { useState, useEffect } from 'react';

const AgriDashboardWelcome = ({ username = 'Farmer' }) => {
  const [greeting, setGreeting] = useState('');
  
  useEffect(() => {
    // Set greeting based on time of day
    const hour = new Date().getHours();
    if (hour < 12) {
      setGreeting('Good morning');
    } else if (hour < 18) {
      setGreeting('Good afternoon');
    } else {
      setGreeting('Good evening');
    }
  }, []);

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-green-50 to-emerald-100 shadow-lg p-8 mb-8 min-h-96">
      {/* Decorative elements */}
      <div className="absolute -top-16 -right-16 w-48 h-48 bg-green-200 rounded-full opacity-30"></div>
      <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-yellow-200 rounded-full opacity-30"></div>
      <div className="absolute top-24 right-24 w-20 h-20 bg-amber-200 rounded-full opacity-40"></div>
      
      {/* Content container */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        {/* Welcome header */}
        <div className="flex items-center mb-8">
          <div className="h-16 w-16 bg-green-600 rounded-full flex items-center justify-center text-white mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-green-800">
              {greeting}, <span className="text-green-600">{username}</span>!
            </h1>
            <p className="text-lg text-green-700">Welcome </p>
          </div>
        </div>
        
        {/* Description card */}
        <div className="bg-white bg-opacity-70 backdrop-filter backdrop-blur-sm rounded-lg p-6 border border-green-100 mb-8 max-w-3xl">
          <h2 className="text-xl font-semibold text-green-800 mb-3">Cultivating Tomorrow's Agriculture Today</h2>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Our intelligent plant management system helps you monitor and optimize your agricultural operations. 
            Track growth cycles, manage resources efficiently, and make data-driven decisions to increase yield 
            while reducing environmental impact.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg">
            From seed to harvest, we're with you every step of the way. Leverage our tools to enhance 
            productivity, sustainability, and profitability in your agricultural ventures.
          </p>
        </div>
        
        {/* Bottom section with quote and icons */}
        <div className="flex justify-between items-end">
          {/* Quote */}
          <div className="italic text-green-700 text-lg font-serif max-w-md">
            "The nation that destroys its soil destroys itself." — Franklin D. Roosevelt
          </div>
          
          {/* Decorative plant icons */}
          <div className="flex space-x-6">
            <svg className="h-10 w-10 text-green-700 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            <svg className="h-10 w-10 text-green-700 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <svg className="h-10 w-10 text-green-700 opacity-70" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgriDashboardWelcome;