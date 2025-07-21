import React, { useEffect, useState } from "react";
import "./App.css";
import CyberBackground from "./components/CyberBackground";
import CustomCursor from "./components/CustomCursor";
import MatrixFace from "./components/MatrixFace";
import ContentCard from "./components/ContentCard";
import { mockTryHackMeContent } from "./mock/tryhackmeData";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    return () => {
      clearTimeout(timer);
      document.body.style.cursor = 'default';
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <CyberBackground />
      <CustomCursor />
      <MatrixFace />
      
      {/* Hero Section */}
      <section className="relative z-20 min-h-screen flex items-center justify-center px-6">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="mb-8">
            <div className="inline-block px-4 py-2 border border-red-500/30 bg-red-500/10 text-red-400 rounded-full text-sm font-medium mb-6 animate-pulse">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-ping"></span>
              CLASSIFIED ACCESS
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 leading-tight">
              <span className="bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent animate-pulse">
                RED TEAM
              </span>
              <br />
              <span className="text-white glitch-text">VAULT</span>
            </h1>
            
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 mx-auto mb-8 animate-pulse"></div>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Welcome to the <span className="text-green-400 font-semibold">Red Team Vault</span>. 
              Explore powerful tutorials and offensive security guides from TryHackMe. 
              <br />
              <span className="text-red-400 font-medium">Learn to attack — so you can defend better.</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="interactive group px-8 py-4 bg-gradient-to-r from-green-500/20 to-green-600/20 border border-green-500/50 hover:border-green-400 text-green-400 font-bold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,65,0.3)] hover:scale-105">
              <span className="flex items-center">
                BEGIN INFILTRATION
                <svg className="ml-2 w-5 h-5 transform group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <div className="flex items-center text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              <span>{mockTryHackMeContent.length} Active Missions</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative z-20 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-red-400">CLASSIFIED</span> <span className="text-white">TRAINING</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Handpicked offensive security challenges to sharpen your red team skills
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-green-500 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mockTryHackMeContent.map((content, index) => (
              <ContentCard key={content.id} content={content} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl font-bold text-green-400 mb-2 group-hover:animate-pulse">247</div>
              <div className="text-gray-400 text-sm">Active Hackers</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-red-400 mb-2 group-hover:animate-pulse">1,337</div>
              <div className="text-gray-400 text-sm">Systems Pwned</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-yellow-400 mb-2 group-hover:animate-pulse">24/7</div>
              <div className="text-gray-400 text-sm">Uptime</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-blue-400 mb-2 group-hover:animate-pulse">∞</div>
              <div className="text-gray-400 text-sm">Knowledge</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-20 border-t border-gray-800 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center text-gray-400 mb-4">
              <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-green-500 mr-4"></div>
              <span className="font-mono text-sm">TRANSMISSION_COMPLETE</span>
              <div className="w-8 h-0.5 bg-gradient-to-r from-green-500 to-transparent ml-4"></div>
            </div>
            
            <p className="text-gray-300 font-mono text-lg">
              Created by <span className="text-green-400">AI</span> for <span className="text-red-400">cybersecurity rebels</span>
            </p>
          </div>
          
          <div className="flex justify-center items-center space-x-8 text-sm text-gray-500">
            <span className="hover:text-green-400 transition-colors cursor-pointer interactive">Privacy Policy</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="hover:text-green-400 transition-colors cursor-pointer interactive">Terms of Service</span>
            <span className="w-1 h-1 bg-gray-600 rounded-full"></span>
            <span className="hover:text-green-400 transition-colors cursor-pointer interactive">Contact</span>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800">
            <p className="text-xs text-gray-600 font-mono">
              © 2025 Red Team Vault. All rights reserved. | 
              <span className="text-green-400 ml-1">Powered by TryHackMe</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;