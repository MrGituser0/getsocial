import { useEffect, useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await API.get("/user");
      setUser(res.data);
    };

    fetchUser();
  }, []);

  //   logout function

  const logout = async () => {
    try {
      await API.post("/logout");
    } catch (err) {
      console.log(err);
    }

    // remove token from browser
    localStorage.removeItem("token");

    // redirect to login page
    navigate("/");
  };

  return (
      <div className="min-h-screen bg-black">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-2xl">
            <span className="text-xl font-bold text-white">S</span>
          </div>
          <span className="text-2xl font-bold text-white">SocialX</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
            <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.065M6 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM12 12a2 2 0 11-4 0 2 2 0 014 0zM16.5 6a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
          </div>
          <button className="px-6 py-2 text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-0.5">
           {user ? `Hi, ${user.name}` : "Loading..."}
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 py-8 flex gap-6">
        {/* Left Sidebar - Trends */}
        <div className="w-64 hidden lg:block sticky top-24 h-fit">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <h3 className="font-bold text-white text-lg mb-6">Trends for you</h3>
            <div className="space-y-4">
              {['#SocialX', '#DelhiVibes', '#TechIndia', 'Aman'].map((trend, i) => (
                <div key={i} className="hover:bg-gray-800 p-3 rounded-xl cursor-pointer transition-colors">
                  <div className="font-bold text-white text-sm">{trend}</div>
                  <div className="text-gray-500 text-xs">1.2K posts</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Posts Feed */}
        <div className="flex-1 space-y-4">
          {/* Create Post */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl flex items-center justify-center">
                <span className="text-white font-semibold">A</span>
              </div>
              <div className="flex-1 relative">
                <textarea
                  className="w-full bg-transparent resize-none outline-none text-white placeholder-gray-500 text-lg leading-relaxed p-3"
                  rows={3}
                  placeholder="What’s happening?"
                />
                <div className="absolute bottom-2 right-2 flex space-x-2">
                  <div className="w-9 h-9 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-gray-700 cursor-pointer transition-colors">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.5h3m1.834-7.166a3.499 3.499 0 001.706-.464 1.49 1.49 0 011.257 2.524m-.121-8.073L17 12H9" />
                    </svg>
                  </div>
                  <button className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300">
                    Post
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sample Posts */}
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:bg-gray-850 transition-colors">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">R</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-bold text-white truncate">Rahul Sharma</span>
                  <span className="text-gray-500 text-sm">@rahul_sharma</span>
                  <span className="text-gray-500 text-sm">· 2h</span>
                </div>
                <p className="text-white leading-relaxed">
                  Just launched my new startup in Delhi! 🚀 Excited to connect with fellow founders and creators. #DelhiStartups #Entrepreneurship
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-8 pt-4 border-t border-gray-800">
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5 group-hover:fill-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">23</span>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-blue-400 p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">1.2K</span>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-red-400 p-2 -m-2 rounded-xl ml-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 hover:bg-gray-850 transition-colors">
            <div className="flex items-start space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">P</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-bold text-white truncate">Priya Singh</span>
                  <span className="text-gray-500 text-sm">@priya_singh</span>
                  <span className="text-gray-500 text-sm">· 4h</span>
                </div>
                <p className="text-white leading-relaxed">
                  Delhi nights are magical ✨ Anyone else loving this weather? Perfect for late-night coding sessions ☕💻
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-8 pt-4 border-t border-gray-800">
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-blue-400 transition-colors p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5 group-hover:fill-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="text-sm font-medium">15</span>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-green-400 transition-colors p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-blue-400 p-2 -m-2 rounded-xl">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                <span className="text-sm">892</span>
              </button>
              <button className="group flex items-center space-x-2 text-gray-500 hover:text-red-400 p-2 -m-2 rounded-xl ml-auto">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-80 hidden xl:block sticky top-24 h-fit">
          <div className="bg-gray-900 rounded-2xl p-6 border border-gray-800 space-y-6">
            <div>
              <h3 className="font-bold text-white text-lg mb-4">Who to follow</h3>
              <div className="space-y-3">
                {['TechGuru', 'DelhiFoodie', 'StartupIndia'].map((user, i) => (
                  <div key={i} className="flex items-center space-x-3 p-3 hover:bg-gray-800 rounded-xl cursor-pointer transition-colors">
                    <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <span className="text-white font-bold text-sm">{user[0]}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-bold text-white text-sm truncate">{user}</div>
                      <div className="text-gray-500 text-xs">@handle</div>
                    </div>
                    <button className="px-4 py-1.5 bg-gray-800 hover:bg-gray-700 text-white text-xs font-bold rounded-full transition-colors">
                      Follow
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center py-4">
              <button className="text-blue-400 hover:text-blue-300 text-sm font-bold underline hover:no-underline transition-colors">
                Show more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
