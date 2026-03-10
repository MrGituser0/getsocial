import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <Link to="/">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <span className="text-2xl font-bold text-white">Get Social</span>
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link to="/login" className="px-6 py-2 text-sm font-medium text-gray-300 bg-gray-900 hover:bg-gray-800 rounded-full backdrop-blur-sm border border-gray-700 transition-all duration-300">
            Login
          </Link>
          <Link to="/register" className="px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
            Create Account
          </Link>
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="flex-1 flex items-center justify-center px-8 py-24 text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-6xl md:text-7xl font-black text-white leading-tight">
            Connect. Create. Thrive.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Join millions discovering what's next. Share your world on the
            fastest growing social platform designed for real connections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-12 py-5 text-lg font-bold bg-blue-600 hover:bg-blue-700 text-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 w-full sm:w-auto">
              Get Started Free
            </button>
            <button className="px-12 py-5 text-lg font-medium text-white bg-gray-800 hover:bg-gray-700 backdrop-blur-sm border border-gray-600 rounded-3xl transition-all duration-300 hover:scale-105 w-full sm:w-auto">
              Watch Demo
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 px-8 text-center text-gray-600 text-sm border-t border-gray-800 bg-black/60 backdrop-blur-md">
        <p>
          &copy; 2026 Get Social. All rights reserved. Built for the future of
          social.
        </p>
      </footer>
    </div>
  );
};

export default LandingPage;
